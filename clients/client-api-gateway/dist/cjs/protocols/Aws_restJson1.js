"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1GetDeploymentsCommand =
  exports.serializeAws_restJson1GetDeploymentCommand =
  exports.serializeAws_restJson1GetClientCertificatesCommand =
  exports.serializeAws_restJson1GetClientCertificateCommand =
  exports.serializeAws_restJson1GetBasePathMappingsCommand =
  exports.serializeAws_restJson1GetBasePathMappingCommand =
  exports.serializeAws_restJson1GetAuthorizersCommand =
  exports.serializeAws_restJson1GetAuthorizerCommand =
  exports.serializeAws_restJson1GetApiKeysCommand =
  exports.serializeAws_restJson1GetApiKeyCommand =
  exports.serializeAws_restJson1GetAccountCommand =
  exports.serializeAws_restJson1GenerateClientCertificateCommand =
  exports.serializeAws_restJson1FlushStageCacheCommand =
  exports.serializeAws_restJson1FlushStageAuthorizersCacheCommand =
  exports.serializeAws_restJson1DeleteVpcLinkCommand =
  exports.serializeAws_restJson1DeleteUsagePlanKeyCommand =
  exports.serializeAws_restJson1DeleteUsagePlanCommand =
  exports.serializeAws_restJson1DeleteStageCommand =
  exports.serializeAws_restJson1DeleteRestApiCommand =
  exports.serializeAws_restJson1DeleteResourceCommand =
  exports.serializeAws_restJson1DeleteRequestValidatorCommand =
  exports.serializeAws_restJson1DeleteModelCommand =
  exports.serializeAws_restJson1DeleteMethodResponseCommand =
  exports.serializeAws_restJson1DeleteMethodCommand =
  exports.serializeAws_restJson1DeleteIntegrationResponseCommand =
  exports.serializeAws_restJson1DeleteIntegrationCommand =
  exports.serializeAws_restJson1DeleteGatewayResponseCommand =
  exports.serializeAws_restJson1DeleteDomainNameCommand =
  exports.serializeAws_restJson1DeleteDocumentationVersionCommand =
  exports.serializeAws_restJson1DeleteDocumentationPartCommand =
  exports.serializeAws_restJson1DeleteDeploymentCommand =
  exports.serializeAws_restJson1DeleteClientCertificateCommand =
  exports.serializeAws_restJson1DeleteBasePathMappingCommand =
  exports.serializeAws_restJson1DeleteAuthorizerCommand =
  exports.serializeAws_restJson1DeleteApiKeyCommand =
  exports.serializeAws_restJson1CreateVpcLinkCommand =
  exports.serializeAws_restJson1CreateUsagePlanKeyCommand =
  exports.serializeAws_restJson1CreateUsagePlanCommand =
  exports.serializeAws_restJson1CreateStageCommand =
  exports.serializeAws_restJson1CreateRestApiCommand =
  exports.serializeAws_restJson1CreateResourceCommand =
  exports.serializeAws_restJson1CreateRequestValidatorCommand =
  exports.serializeAws_restJson1CreateModelCommand =
  exports.serializeAws_restJson1CreateDomainNameCommand =
  exports.serializeAws_restJson1CreateDocumentationVersionCommand =
  exports.serializeAws_restJson1CreateDocumentationPartCommand =
  exports.serializeAws_restJson1CreateDeploymentCommand =
  exports.serializeAws_restJson1CreateBasePathMappingCommand =
  exports.serializeAws_restJson1CreateAuthorizerCommand =
  exports.serializeAws_restJson1CreateApiKeyCommand =
    void 0;
exports.serializeAws_restJson1UpdateApiKeyCommand =
  exports.serializeAws_restJson1UpdateAccountCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TestInvokeMethodCommand =
  exports.serializeAws_restJson1TestInvokeAuthorizerCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1PutRestApiCommand =
  exports.serializeAws_restJson1PutMethodResponseCommand =
  exports.serializeAws_restJson1PutMethodCommand =
  exports.serializeAws_restJson1PutIntegrationResponseCommand =
  exports.serializeAws_restJson1PutIntegrationCommand =
  exports.serializeAws_restJson1PutGatewayResponseCommand =
  exports.serializeAws_restJson1ImportRestApiCommand =
  exports.serializeAws_restJson1ImportDocumentationPartsCommand =
  exports.serializeAws_restJson1ImportApiKeysCommand =
  exports.serializeAws_restJson1GetVpcLinksCommand =
  exports.serializeAws_restJson1GetVpcLinkCommand =
  exports.serializeAws_restJson1GetUsagePlansCommand =
  exports.serializeAws_restJson1GetUsagePlanKeysCommand =
  exports.serializeAws_restJson1GetUsagePlanKeyCommand =
  exports.serializeAws_restJson1GetUsagePlanCommand =
  exports.serializeAws_restJson1GetUsageCommand =
  exports.serializeAws_restJson1GetTagsCommand =
  exports.serializeAws_restJson1GetStagesCommand =
  exports.serializeAws_restJson1GetStageCommand =
  exports.serializeAws_restJson1GetSdkTypesCommand =
  exports.serializeAws_restJson1GetSdkTypeCommand =
  exports.serializeAws_restJson1GetSdkCommand =
  exports.serializeAws_restJson1GetRestApisCommand =
  exports.serializeAws_restJson1GetRestApiCommand =
  exports.serializeAws_restJson1GetResourcesCommand =
  exports.serializeAws_restJson1GetResourceCommand =
  exports.serializeAws_restJson1GetRequestValidatorsCommand =
  exports.serializeAws_restJson1GetRequestValidatorCommand =
  exports.serializeAws_restJson1GetModelTemplateCommand =
  exports.serializeAws_restJson1GetModelsCommand =
  exports.serializeAws_restJson1GetModelCommand =
  exports.serializeAws_restJson1GetMethodResponseCommand =
  exports.serializeAws_restJson1GetMethodCommand =
  exports.serializeAws_restJson1GetIntegrationResponseCommand =
  exports.serializeAws_restJson1GetIntegrationCommand =
  exports.serializeAws_restJson1GetGatewayResponsesCommand =
  exports.serializeAws_restJson1GetGatewayResponseCommand =
  exports.serializeAws_restJson1GetExportCommand =
  exports.serializeAws_restJson1GetDomainNamesCommand =
  exports.serializeAws_restJson1GetDomainNameCommand =
  exports.serializeAws_restJson1GetDocumentationVersionsCommand =
  exports.serializeAws_restJson1GetDocumentationVersionCommand =
  exports.serializeAws_restJson1GetDocumentationPartsCommand =
  exports.serializeAws_restJson1GetDocumentationPartCommand =
    void 0;
exports.deserializeAws_restJson1DeleteRequestValidatorCommand =
  exports.deserializeAws_restJson1DeleteModelCommand =
  exports.deserializeAws_restJson1DeleteMethodResponseCommand =
  exports.deserializeAws_restJson1DeleteMethodCommand =
  exports.deserializeAws_restJson1DeleteIntegrationResponseCommand =
  exports.deserializeAws_restJson1DeleteIntegrationCommand =
  exports.deserializeAws_restJson1DeleteGatewayResponseCommand =
  exports.deserializeAws_restJson1DeleteDomainNameCommand =
  exports.deserializeAws_restJson1DeleteDocumentationVersionCommand =
  exports.deserializeAws_restJson1DeleteDocumentationPartCommand =
  exports.deserializeAws_restJson1DeleteDeploymentCommand =
  exports.deserializeAws_restJson1DeleteClientCertificateCommand =
  exports.deserializeAws_restJson1DeleteBasePathMappingCommand =
  exports.deserializeAws_restJson1DeleteAuthorizerCommand =
  exports.deserializeAws_restJson1DeleteApiKeyCommand =
  exports.deserializeAws_restJson1CreateVpcLinkCommand =
  exports.deserializeAws_restJson1CreateUsagePlanKeyCommand =
  exports.deserializeAws_restJson1CreateUsagePlanCommand =
  exports.deserializeAws_restJson1CreateStageCommand =
  exports.deserializeAws_restJson1CreateRestApiCommand =
  exports.deserializeAws_restJson1CreateResourceCommand =
  exports.deserializeAws_restJson1CreateRequestValidatorCommand =
  exports.deserializeAws_restJson1CreateModelCommand =
  exports.deserializeAws_restJson1CreateDomainNameCommand =
  exports.deserializeAws_restJson1CreateDocumentationVersionCommand =
  exports.deserializeAws_restJson1CreateDocumentationPartCommand =
  exports.deserializeAws_restJson1CreateDeploymentCommand =
  exports.deserializeAws_restJson1CreateBasePathMappingCommand =
  exports.deserializeAws_restJson1CreateAuthorizerCommand =
  exports.deserializeAws_restJson1CreateApiKeyCommand =
  exports.serializeAws_restJson1UpdateVpcLinkCommand =
  exports.serializeAws_restJson1UpdateUsagePlanCommand =
  exports.serializeAws_restJson1UpdateUsageCommand =
  exports.serializeAws_restJson1UpdateStageCommand =
  exports.serializeAws_restJson1UpdateRestApiCommand =
  exports.serializeAws_restJson1UpdateResourceCommand =
  exports.serializeAws_restJson1UpdateRequestValidatorCommand =
  exports.serializeAws_restJson1UpdateModelCommand =
  exports.serializeAws_restJson1UpdateMethodResponseCommand =
  exports.serializeAws_restJson1UpdateMethodCommand =
  exports.serializeAws_restJson1UpdateIntegrationResponseCommand =
  exports.serializeAws_restJson1UpdateIntegrationCommand =
  exports.serializeAws_restJson1UpdateGatewayResponseCommand =
  exports.serializeAws_restJson1UpdateDomainNameCommand =
  exports.serializeAws_restJson1UpdateDocumentationVersionCommand =
  exports.serializeAws_restJson1UpdateDocumentationPartCommand =
  exports.serializeAws_restJson1UpdateDeploymentCommand =
  exports.serializeAws_restJson1UpdateClientCertificateCommand =
  exports.serializeAws_restJson1UpdateBasePathMappingCommand =
  exports.serializeAws_restJson1UpdateAuthorizerCommand =
    void 0;
exports.deserializeAws_restJson1GetUsagePlanCommand =
  exports.deserializeAws_restJson1GetUsageCommand =
  exports.deserializeAws_restJson1GetTagsCommand =
  exports.deserializeAws_restJson1GetStagesCommand =
  exports.deserializeAws_restJson1GetStageCommand =
  exports.deserializeAws_restJson1GetSdkTypesCommand =
  exports.deserializeAws_restJson1GetSdkTypeCommand =
  exports.deserializeAws_restJson1GetSdkCommand =
  exports.deserializeAws_restJson1GetRestApisCommand =
  exports.deserializeAws_restJson1GetRestApiCommand =
  exports.deserializeAws_restJson1GetResourcesCommand =
  exports.deserializeAws_restJson1GetResourceCommand =
  exports.deserializeAws_restJson1GetRequestValidatorsCommand =
  exports.deserializeAws_restJson1GetRequestValidatorCommand =
  exports.deserializeAws_restJson1GetModelTemplateCommand =
  exports.deserializeAws_restJson1GetModelsCommand =
  exports.deserializeAws_restJson1GetModelCommand =
  exports.deserializeAws_restJson1GetMethodResponseCommand =
  exports.deserializeAws_restJson1GetMethodCommand =
  exports.deserializeAws_restJson1GetIntegrationResponseCommand =
  exports.deserializeAws_restJson1GetIntegrationCommand =
  exports.deserializeAws_restJson1GetGatewayResponsesCommand =
  exports.deserializeAws_restJson1GetGatewayResponseCommand =
  exports.deserializeAws_restJson1GetExportCommand =
  exports.deserializeAws_restJson1GetDomainNamesCommand =
  exports.deserializeAws_restJson1GetDomainNameCommand =
  exports.deserializeAws_restJson1GetDocumentationVersionsCommand =
  exports.deserializeAws_restJson1GetDocumentationVersionCommand =
  exports.deserializeAws_restJson1GetDocumentationPartsCommand =
  exports.deserializeAws_restJson1GetDocumentationPartCommand =
  exports.deserializeAws_restJson1GetDeploymentsCommand =
  exports.deserializeAws_restJson1GetDeploymentCommand =
  exports.deserializeAws_restJson1GetClientCertificatesCommand =
  exports.deserializeAws_restJson1GetClientCertificateCommand =
  exports.deserializeAws_restJson1GetBasePathMappingsCommand =
  exports.deserializeAws_restJson1GetBasePathMappingCommand =
  exports.deserializeAws_restJson1GetAuthorizersCommand =
  exports.deserializeAws_restJson1GetAuthorizerCommand =
  exports.deserializeAws_restJson1GetApiKeysCommand =
  exports.deserializeAws_restJson1GetApiKeyCommand =
  exports.deserializeAws_restJson1GetAccountCommand =
  exports.deserializeAws_restJson1GenerateClientCertificateCommand =
  exports.deserializeAws_restJson1FlushStageCacheCommand =
  exports.deserializeAws_restJson1FlushStageAuthorizersCacheCommand =
  exports.deserializeAws_restJson1DeleteVpcLinkCommand =
  exports.deserializeAws_restJson1DeleteUsagePlanKeyCommand =
  exports.deserializeAws_restJson1DeleteUsagePlanCommand =
  exports.deserializeAws_restJson1DeleteStageCommand =
  exports.deserializeAws_restJson1DeleteRestApiCommand =
  exports.deserializeAws_restJson1DeleteResourceCommand =
    void 0;
exports.deserializeAws_restJson1UpdateVpcLinkCommand =
  exports.deserializeAws_restJson1UpdateUsagePlanCommand =
  exports.deserializeAws_restJson1UpdateUsageCommand =
  exports.deserializeAws_restJson1UpdateStageCommand =
  exports.deserializeAws_restJson1UpdateRestApiCommand =
  exports.deserializeAws_restJson1UpdateResourceCommand =
  exports.deserializeAws_restJson1UpdateRequestValidatorCommand =
  exports.deserializeAws_restJson1UpdateModelCommand =
  exports.deserializeAws_restJson1UpdateMethodResponseCommand =
  exports.deserializeAws_restJson1UpdateMethodCommand =
  exports.deserializeAws_restJson1UpdateIntegrationResponseCommand =
  exports.deserializeAws_restJson1UpdateIntegrationCommand =
  exports.deserializeAws_restJson1UpdateGatewayResponseCommand =
  exports.deserializeAws_restJson1UpdateDomainNameCommand =
  exports.deserializeAws_restJson1UpdateDocumentationVersionCommand =
  exports.deserializeAws_restJson1UpdateDocumentationPartCommand =
  exports.deserializeAws_restJson1UpdateDeploymentCommand =
  exports.deserializeAws_restJson1UpdateClientCertificateCommand =
  exports.deserializeAws_restJson1UpdateBasePathMappingCommand =
  exports.deserializeAws_restJson1UpdateAuthorizerCommand =
  exports.deserializeAws_restJson1UpdateApiKeyCommand =
  exports.deserializeAws_restJson1UpdateAccountCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TestInvokeMethodCommand =
  exports.deserializeAws_restJson1TestInvokeAuthorizerCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1PutRestApiCommand =
  exports.deserializeAws_restJson1PutMethodResponseCommand =
  exports.deserializeAws_restJson1PutMethodCommand =
  exports.deserializeAws_restJson1PutIntegrationResponseCommand =
  exports.deserializeAws_restJson1PutIntegrationCommand =
  exports.deserializeAws_restJson1PutGatewayResponseCommand =
  exports.deserializeAws_restJson1ImportRestApiCommand =
  exports.deserializeAws_restJson1ImportDocumentationPartsCommand =
  exports.deserializeAws_restJson1ImportApiKeysCommand =
  exports.deserializeAws_restJson1GetVpcLinksCommand =
  exports.deserializeAws_restJson1GetVpcLinkCommand =
  exports.deserializeAws_restJson1GetUsagePlansCommand =
  exports.deserializeAws_restJson1GetUsagePlanKeysCommand =
  exports.deserializeAws_restJson1GetUsagePlanKeyCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateApiKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apikeys";
  let body;
  body = JSON.stringify({
    ...(input.customerId !== undefined && input.customerId !== null && { customerId: input.customerId }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.generateDistinctId !== undefined &&
      input.generateDistinctId !== null && { generateDistinctId: input.generateDistinctId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.stageKeys !== undefined &&
      input.stageKeys !== null && { stageKeys: serializeAws_restJson1ListOfStageKeys(input.stageKeys, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
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
const serializeAws_restJson1CreateAuthorizerCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/authorizers";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.authType !== undefined && input.authType !== null && { authType: input.authType }),
    ...(input.authorizerCredentials !== undefined &&
      input.authorizerCredentials !== null && { authorizerCredentials: input.authorizerCredentials }),
    ...(input.authorizerResultTtlInSeconds !== undefined &&
      input.authorizerResultTtlInSeconds !== null && {
        authorizerResultTtlInSeconds: input.authorizerResultTtlInSeconds,
      }),
    ...(input.authorizerUri !== undefined && input.authorizerUri !== null && { authorizerUri: input.authorizerUri }),
    ...(input.identitySource !== undefined &&
      input.identitySource !== null && { identitySource: input.identitySource }),
    ...(input.identityValidationExpression !== undefined &&
      input.identityValidationExpression !== null && {
        identityValidationExpression: input.identityValidationExpression,
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.providerARNs !== undefined &&
      input.providerARNs !== null && { providerARNs: serializeAws_restJson1ListOfARNs(input.providerARNs, context) }),
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
exports.serializeAws_restJson1CreateAuthorizerCommand = serializeAws_restJson1CreateAuthorizerCommand;
const serializeAws_restJson1CreateBasePathMappingCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/domainnames/{domainName}/basepathmappings";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.basePath !== undefined && input.basePath !== null && { basePath: input.basePath }),
    ...(input.restApiId !== undefined && input.restApiId !== null && { restApiId: input.restApiId }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
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
exports.serializeAws_restJson1CreateBasePathMappingCommand = serializeAws_restJson1CreateBasePathMappingCommand;
const serializeAws_restJson1CreateDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/deployments";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.cacheClusterEnabled !== undefined &&
      input.cacheClusterEnabled !== null && { cacheClusterEnabled: input.cacheClusterEnabled }),
    ...(input.cacheClusterSize !== undefined &&
      input.cacheClusterSize !== null && { cacheClusterSize: input.cacheClusterSize }),
    ...(input.canarySettings !== undefined &&
      input.canarySettings !== null && {
        canarySettings: serializeAws_restJson1DeploymentCanarySettings(input.canarySettings, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.stageDescription !== undefined &&
      input.stageDescription !== null && { stageDescription: input.stageDescription }),
    ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
    ...(input.tracingEnabled !== undefined &&
      input.tracingEnabled !== null && { tracingEnabled: input.tracingEnabled }),
    ...(input.variables !== undefined &&
      input.variables !== null && { variables: serializeAws_restJson1MapOfStringToString(input.variables, context) }),
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
const serializeAws_restJson1CreateDocumentationPartCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/documentation/parts";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.location !== undefined &&
      input.location !== null && {
        location: serializeAws_restJson1DocumentationPartLocation(input.location, context),
      }),
    ...(input.properties !== undefined && input.properties !== null && { properties: input.properties }),
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
exports.serializeAws_restJson1CreateDocumentationPartCommand = serializeAws_restJson1CreateDocumentationPartCommand;
const serializeAws_restJson1CreateDocumentationVersionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/documentation/versions";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.documentationVersion !== undefined &&
      input.documentationVersion !== null && { documentationVersion: input.documentationVersion }),
    ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
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
exports.serializeAws_restJson1CreateDocumentationVersionCommand =
  serializeAws_restJson1CreateDocumentationVersionCommand;
const serializeAws_restJson1CreateDomainNameCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/domainnames";
  let body;
  body = JSON.stringify({
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
    ...(input.certificateBody !== undefined &&
      input.certificateBody !== null && { certificateBody: input.certificateBody }),
    ...(input.certificateChain !== undefined &&
      input.certificateChain !== null && { certificateChain: input.certificateChain }),
    ...(input.certificateName !== undefined &&
      input.certificateName !== null && { certificateName: input.certificateName }),
    ...(input.certificatePrivateKey !== undefined &&
      input.certificatePrivateKey !== null && { certificatePrivateKey: input.certificatePrivateKey }),
    ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    ...(input.endpointConfiguration !== undefined &&
      input.endpointConfiguration !== null && {
        endpointConfiguration: serializeAws_restJson1EndpointConfiguration(input.endpointConfiguration, context),
      }),
    ...(input.mutualTlsAuthentication !== undefined &&
      input.mutualTlsAuthentication !== null && {
        mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
          input.mutualTlsAuthentication,
          context
        ),
      }),
    ...(input.regionalCertificateArn !== undefined &&
      input.regionalCertificateArn !== null && { regionalCertificateArn: input.regionalCertificateArn }),
    ...(input.regionalCertificateName !== undefined &&
      input.regionalCertificateName !== null && { regionalCertificateName: input.regionalCertificateName }),
    ...(input.securityPolicy !== undefined &&
      input.securityPolicy !== null && { securityPolicy: input.securityPolicy }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
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
const serializeAws_restJson1CreateModelCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/models";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
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
const serializeAws_restJson1CreateRequestValidatorCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/requestvalidators";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.validateRequestBody !== undefined &&
      input.validateRequestBody !== null && { validateRequestBody: input.validateRequestBody }),
    ...(input.validateRequestParameters !== undefined &&
      input.validateRequestParameters !== null && { validateRequestParameters: input.validateRequestParameters }),
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
exports.serializeAws_restJson1CreateRequestValidatorCommand = serializeAws_restJson1CreateRequestValidatorCommand;
const serializeAws_restJson1CreateResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{parentId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.parentId !== undefined) {
    const labelValue = input.parentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: parentId.");
    }
    resolvedPath = resolvedPath.replace("{parentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: parentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.pathPart !== undefined && input.pathPart !== null && { pathPart: input.pathPart }),
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
exports.serializeAws_restJson1CreateResourceCommand = serializeAws_restJson1CreateResourceCommand;
const serializeAws_restJson1CreateRestApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis";
  let body;
  body = JSON.stringify({
    ...(input.apiKeySource !== undefined && input.apiKeySource !== null && { apiKeySource: input.apiKeySource }),
    ...(input.binaryMediaTypes !== undefined &&
      input.binaryMediaTypes !== null && {
        binaryMediaTypes: serializeAws_restJson1ListOfString(input.binaryMediaTypes, context),
      }),
    ...(input.cloneFrom !== undefined && input.cloneFrom !== null && { cloneFrom: input.cloneFrom }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.disableExecuteApiEndpoint !== undefined &&
      input.disableExecuteApiEndpoint !== null && { disableExecuteApiEndpoint: input.disableExecuteApiEndpoint }),
    ...(input.endpointConfiguration !== undefined &&
      input.endpointConfiguration !== null && {
        endpointConfiguration: serializeAws_restJson1EndpointConfiguration(input.endpointConfiguration, context),
      }),
    ...(input.minimumCompressionSize !== undefined &&
      input.minimumCompressionSize !== null && { minimumCompressionSize: input.minimumCompressionSize }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
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
exports.serializeAws_restJson1CreateRestApiCommand = serializeAws_restJson1CreateRestApiCommand;
const serializeAws_restJson1CreateStageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/stages";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.cacheClusterEnabled !== undefined &&
      input.cacheClusterEnabled !== null && { cacheClusterEnabled: input.cacheClusterEnabled }),
    ...(input.cacheClusterSize !== undefined &&
      input.cacheClusterSize !== null && { cacheClusterSize: input.cacheClusterSize }),
    ...(input.canarySettings !== undefined &&
      input.canarySettings !== null && {
        canarySettings: serializeAws_restJson1CanarySettings(input.canarySettings, context),
      }),
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.documentationVersion !== undefined &&
      input.documentationVersion !== null && { documentationVersion: input.documentationVersion }),
    ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.tracingEnabled !== undefined &&
      input.tracingEnabled !== null && { tracingEnabled: input.tracingEnabled }),
    ...(input.variables !== undefined &&
      input.variables !== null && { variables: serializeAws_restJson1MapOfStringToString(input.variables, context) }),
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
const serializeAws_restJson1CreateUsagePlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/usageplans";
  let body;
  body = JSON.stringify({
    ...(input.apiStages !== undefined &&
      input.apiStages !== null && { apiStages: serializeAws_restJson1ListOfApiStage(input.apiStages, context) }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.quota !== undefined &&
      input.quota !== null && { quota: serializeAws_restJson1QuotaSettings(input.quota, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.throttle !== undefined &&
      input.throttle !== null && { throttle: serializeAws_restJson1ThrottleSettings(input.throttle, context) }),
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
exports.serializeAws_restJson1CreateUsagePlanCommand = serializeAws_restJson1CreateUsagePlanCommand;
const serializeAws_restJson1CreateUsagePlanKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/usageplans/{usagePlanId}/keys";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.keyId !== undefined && input.keyId !== null && { keyId: input.keyId }),
    ...(input.keyType !== undefined && input.keyType !== null && { keyType: input.keyType }),
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
exports.serializeAws_restJson1CreateUsagePlanKeyCommand = serializeAws_restJson1CreateUsagePlanKeyCommand;
const serializeAws_restJson1CreateVpcLinkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/vpclinks";
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
    ...(input.targetArns !== undefined &&
      input.targetArns !== null && { targetArns: serializeAws_restJson1ListOfString(input.targetArns, context) }),
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
const serializeAws_restJson1DeleteApiKeyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apikeys/{apiKey}";
  if (input.apiKey !== undefined) {
    const labelValue = input.apiKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiKey.");
    }
    resolvedPath = resolvedPath.replace("{apiKey}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiKey.");
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
const serializeAws_restJson1DeleteAuthorizerCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.authorizerId !== undefined) {
    const labelValue = input.authorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: authorizerId.");
    }
    resolvedPath = resolvedPath.replace("{authorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: authorizerId.");
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
const serializeAws_restJson1DeleteBasePathMappingCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/domainnames/{domainName}/basepathmappings/{basePath}";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  if (input.basePath !== undefined) {
    const labelValue = input.basePath;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: basePath.");
    }
    resolvedPath = resolvedPath.replace("{basePath}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: basePath.");
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
exports.serializeAws_restJson1DeleteBasePathMappingCommand = serializeAws_restJson1DeleteBasePathMappingCommand;
const serializeAws_restJson1DeleteClientCertificateCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/clientcertificates/{clientCertificateId}";
  if (input.clientCertificateId !== undefined) {
    const labelValue = input.clientCertificateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clientCertificateId.");
    }
    resolvedPath = resolvedPath.replace(
      "{clientCertificateId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clientCertificateId.");
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
exports.serializeAws_restJson1DeleteClientCertificateCommand = serializeAws_restJson1DeleteClientCertificateCommand;
const serializeAws_restJson1DeleteDeploymentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/deployments/{deploymentId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.deploymentId !== undefined) {
    const labelValue = input.deploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deploymentId.");
    }
    resolvedPath = resolvedPath.replace("{deploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deploymentId.");
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
const serializeAws_restJson1DeleteDocumentationPartCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.documentationPartId !== undefined) {
    const labelValue = input.documentationPartId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: documentationPartId.");
    }
    resolvedPath = resolvedPath.replace(
      "{documentationPartId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: documentationPartId.");
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
exports.serializeAws_restJson1DeleteDocumentationPartCommand = serializeAws_restJson1DeleteDocumentationPartCommand;
const serializeAws_restJson1DeleteDocumentationVersionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.documentationVersion !== undefined) {
    const labelValue = input.documentationVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: documentationVersion.");
    }
    resolvedPath = resolvedPath.replace(
      "{documentationVersion}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: documentationVersion.");
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
exports.serializeAws_restJson1DeleteDocumentationVersionCommand =
  serializeAws_restJson1DeleteDocumentationVersionCommand;
const serializeAws_restJson1DeleteDomainNameCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/domainnames/{domainName}";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
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
const serializeAws_restJson1DeleteGatewayResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.responseType !== undefined) {
    const labelValue = input.responseType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: responseType.");
    }
    resolvedPath = resolvedPath.replace("{responseType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: responseType.");
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
exports.serializeAws_restJson1DeleteGatewayResponseCommand = serializeAws_restJson1DeleteGatewayResponseCommand;
const serializeAws_restJson1DeleteIntegrationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
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
  let resolvedPath =
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
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
const serializeAws_restJson1DeleteMethodCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
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
exports.serializeAws_restJson1DeleteMethodCommand = serializeAws_restJson1DeleteMethodCommand;
const serializeAws_restJson1DeleteMethodResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
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
exports.serializeAws_restJson1DeleteMethodResponseCommand = serializeAws_restJson1DeleteMethodResponseCommand;
const serializeAws_restJson1DeleteModelCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/models/{modelName}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.modelName !== undefined) {
    const labelValue = input.modelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: modelName.");
    }
    resolvedPath = resolvedPath.replace("{modelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: modelName.");
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
const serializeAws_restJson1DeleteRequestValidatorCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.requestValidatorId !== undefined) {
    const labelValue = input.requestValidatorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: requestValidatorId.");
    }
    resolvedPath = resolvedPath.replace("{requestValidatorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: requestValidatorId.");
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
exports.serializeAws_restJson1DeleteRequestValidatorCommand = serializeAws_restJson1DeleteRequestValidatorCommand;
const serializeAws_restJson1DeleteResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
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
exports.serializeAws_restJson1DeleteResourceCommand = serializeAws_restJson1DeleteResourceCommand;
const serializeAws_restJson1DeleteRestApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
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
exports.serializeAws_restJson1DeleteRestApiCommand = serializeAws_restJson1DeleteRestApiCommand;
const serializeAws_restJson1DeleteStageCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
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
const serializeAws_restJson1DeleteUsagePlanCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans/{usagePlanId}";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
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
exports.serializeAws_restJson1DeleteUsagePlanCommand = serializeAws_restJson1DeleteUsagePlanCommand;
const serializeAws_restJson1DeleteUsagePlanKeyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans/{usagePlanId}/keys/{keyId}";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  if (input.keyId !== undefined) {
    const labelValue = input.keyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: keyId.");
    }
    resolvedPath = resolvedPath.replace("{keyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: keyId.");
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
exports.serializeAws_restJson1DeleteUsagePlanKeyCommand = serializeAws_restJson1DeleteUsagePlanKeyCommand;
const serializeAws_restJson1DeleteVpcLinkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/vpclinks/{vpcLinkId}";
  if (input.vpcLinkId !== undefined) {
    const labelValue = input.vpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{vpcLinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vpcLinkId.");
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
const serializeAws_restJson1FlushStageAuthorizersCacheCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}/cache/authorizers";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
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
exports.serializeAws_restJson1FlushStageAuthorizersCacheCommand =
  serializeAws_restJson1FlushStageAuthorizersCacheCommand;
const serializeAws_restJson1FlushStageCacheCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}/cache/data";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
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
exports.serializeAws_restJson1FlushStageCacheCommand = serializeAws_restJson1FlushStageCacheCommand;
const serializeAws_restJson1GenerateClientCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/clientcertificates";
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
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
exports.serializeAws_restJson1GenerateClientCertificateCommand = serializeAws_restJson1GenerateClientCertificateCommand;
const serializeAws_restJson1GetAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account";
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
exports.serializeAws_restJson1GetAccountCommand = serializeAws_restJson1GetAccountCommand;
const serializeAws_restJson1GetApiKeyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apikeys/{apiKey}";
  if (input.apiKey !== undefined) {
    const labelValue = input.apiKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiKey.");
    }
    resolvedPath = resolvedPath.replace("{apiKey}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiKey.");
  }
  const query = {
    ...(input.includeValue !== undefined && { includeValue: input.includeValue.toString() }),
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
exports.serializeAws_restJson1GetApiKeyCommand = serializeAws_restJson1GetApiKeyCommand;
const serializeAws_restJson1GetApiKeysCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apikeys";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nameQuery !== undefined && { name: input.nameQuery }),
    ...(input.customerId !== undefined && { customerId: input.customerId }),
    ...(input.includeValues !== undefined && { includeValues: input.includeValues.toString() }),
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
exports.serializeAws_restJson1GetApiKeysCommand = serializeAws_restJson1GetApiKeysCommand;
const serializeAws_restJson1GetAuthorizerCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.authorizerId !== undefined) {
    const labelValue = input.authorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: authorizerId.");
    }
    resolvedPath = resolvedPath.replace("{authorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: authorizerId.");
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
  let resolvedPath = "/restapis/{restApiId}/authorizers";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
const serializeAws_restJson1GetBasePathMappingCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/domainnames/{domainName}/basepathmappings/{basePath}";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  if (input.basePath !== undefined) {
    const labelValue = input.basePath;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: basePath.");
    }
    resolvedPath = resolvedPath.replace("{basePath}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: basePath.");
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
exports.serializeAws_restJson1GetBasePathMappingCommand = serializeAws_restJson1GetBasePathMappingCommand;
const serializeAws_restJson1GetBasePathMappingsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/domainnames/{domainName}/basepathmappings";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetBasePathMappingsCommand = serializeAws_restJson1GetBasePathMappingsCommand;
const serializeAws_restJson1GetClientCertificateCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/clientcertificates/{clientCertificateId}";
  if (input.clientCertificateId !== undefined) {
    const labelValue = input.clientCertificateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clientCertificateId.");
    }
    resolvedPath = resolvedPath.replace(
      "{clientCertificateId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clientCertificateId.");
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
exports.serializeAws_restJson1GetClientCertificateCommand = serializeAws_restJson1GetClientCertificateCommand;
const serializeAws_restJson1GetClientCertificatesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/clientcertificates";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetClientCertificatesCommand = serializeAws_restJson1GetClientCertificatesCommand;
const serializeAws_restJson1GetDeploymentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/deployments/{deploymentId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.deploymentId !== undefined) {
    const labelValue = input.deploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deploymentId.");
    }
    resolvedPath = resolvedPath.replace("{deploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deploymentId.");
  }
  const query = {
    ...(input.embed !== undefined && { embed: (input.embed || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1GetDeploymentCommand = serializeAws_restJson1GetDeploymentCommand;
const serializeAws_restJson1GetDeploymentsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/deployments";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
const serializeAws_restJson1GetDocumentationPartCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.documentationPartId !== undefined) {
    const labelValue = input.documentationPartId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: documentationPartId.");
    }
    resolvedPath = resolvedPath.replace(
      "{documentationPartId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: documentationPartId.");
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
exports.serializeAws_restJson1GetDocumentationPartCommand = serializeAws_restJson1GetDocumentationPartCommand;
const serializeAws_restJson1GetDocumentationPartsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/documentation/parts";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.type !== undefined && { type: input.type }),
    ...(input.nameQuery !== undefined && { name: input.nameQuery }),
    ...(input.path !== undefined && { path: input.path }),
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.locationStatus !== undefined && { locationStatus: input.locationStatus }),
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
exports.serializeAws_restJson1GetDocumentationPartsCommand = serializeAws_restJson1GetDocumentationPartsCommand;
const serializeAws_restJson1GetDocumentationVersionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.documentationVersion !== undefined) {
    const labelValue = input.documentationVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: documentationVersion.");
    }
    resolvedPath = resolvedPath.replace(
      "{documentationVersion}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: documentationVersion.");
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
exports.serializeAws_restJson1GetDocumentationVersionCommand = serializeAws_restJson1GetDocumentationVersionCommand;
const serializeAws_restJson1GetDocumentationVersionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/documentation/versions";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetDocumentationVersionsCommand = serializeAws_restJson1GetDocumentationVersionsCommand;
const serializeAws_restJson1GetDomainNameCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/domainnames/{domainName}";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
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
  let resolvedPath = "/domainnames";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
const serializeAws_restJson1GetExportCommand = async (input, context) => {
  const headers = {
    ...(isSerializableHeaderValue(input.accepts) && { accept: input.accepts }),
  };
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}/exports/{exportType}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
  }
  if (input.exportType !== undefined) {
    const labelValue = input.exportType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: exportType.");
    }
    resolvedPath = resolvedPath.replace("{exportType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: exportType.");
  }
  const query = {
    ...(input.parameters !== undefined && input.parameters),
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
exports.serializeAws_restJson1GetExportCommand = serializeAws_restJson1GetExportCommand;
const serializeAws_restJson1GetGatewayResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.responseType !== undefined) {
    const labelValue = input.responseType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: responseType.");
    }
    resolvedPath = resolvedPath.replace("{responseType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: responseType.");
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
exports.serializeAws_restJson1GetGatewayResponseCommand = serializeAws_restJson1GetGatewayResponseCommand;
const serializeAws_restJson1GetGatewayResponsesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/gatewayresponses";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetGatewayResponsesCommand = serializeAws_restJson1GetGatewayResponsesCommand;
const serializeAws_restJson1GetIntegrationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
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
  let resolvedPath =
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
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
const serializeAws_restJson1GetMethodCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
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
exports.serializeAws_restJson1GetMethodCommand = serializeAws_restJson1GetMethodCommand;
const serializeAws_restJson1GetMethodResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
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
exports.serializeAws_restJson1GetMethodResponseCommand = serializeAws_restJson1GetMethodResponseCommand;
const serializeAws_restJson1GetModelCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/models/{modelName}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.modelName !== undefined) {
    const labelValue = input.modelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: modelName.");
    }
    resolvedPath = resolvedPath.replace("{modelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: modelName.");
  }
  const query = {
    ...(input.flatten !== undefined && { flatten: input.flatten.toString() }),
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
exports.serializeAws_restJson1GetModelCommand = serializeAws_restJson1GetModelCommand;
const serializeAws_restJson1GetModelsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/models";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
  let resolvedPath = "/restapis/{restApiId}/models/{modelName}/default_template";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.modelName !== undefined) {
    const labelValue = input.modelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: modelName.");
    }
    resolvedPath = resolvedPath.replace("{modelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: modelName.");
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
const serializeAws_restJson1GetRequestValidatorCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.requestValidatorId !== undefined) {
    const labelValue = input.requestValidatorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: requestValidatorId.");
    }
    resolvedPath = resolvedPath.replace("{requestValidatorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: requestValidatorId.");
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
exports.serializeAws_restJson1GetRequestValidatorCommand = serializeAws_restJson1GetRequestValidatorCommand;
const serializeAws_restJson1GetRequestValidatorsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/requestvalidators";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetRequestValidatorsCommand = serializeAws_restJson1GetRequestValidatorsCommand;
const serializeAws_restJson1GetResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  const query = {
    ...(input.embed !== undefined && { embed: (input.embed || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1GetResourceCommand = serializeAws_restJson1GetResourceCommand;
const serializeAws_restJson1GetResourcesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/resources";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.embed !== undefined && { embed: (input.embed || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1GetResourcesCommand = serializeAws_restJson1GetResourcesCommand;
const serializeAws_restJson1GetRestApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
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
exports.serializeAws_restJson1GetRestApiCommand = serializeAws_restJson1GetRestApiCommand;
const serializeAws_restJson1GetRestApisCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetRestApisCommand = serializeAws_restJson1GetRestApisCommand;
const serializeAws_restJson1GetSdkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}/sdks/{sdkType}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
  }
  if (input.sdkType !== undefined) {
    const labelValue = input.sdkType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sdkType.");
    }
    resolvedPath = resolvedPath.replace("{sdkType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sdkType.");
  }
  const query = {
    ...(input.parameters !== undefined && input.parameters),
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
exports.serializeAws_restJson1GetSdkCommand = serializeAws_restJson1GetSdkCommand;
const serializeAws_restJson1GetSdkTypeCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/sdktypes/{id}";
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
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};
exports.serializeAws_restJson1GetSdkTypeCommand = serializeAws_restJson1GetSdkTypeCommand;
const serializeAws_restJson1GetSdkTypesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/sdktypes";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetSdkTypesCommand = serializeAws_restJson1GetSdkTypesCommand;
const serializeAws_restJson1GetStageCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
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
  let resolvedPath = "/restapis/{restApiId}/stages";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.deploymentId !== undefined && { deploymentId: input.deploymentId }),
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
  let resolvedPath = "/tags/{resourceArn}";
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
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetTagsCommand = serializeAws_restJson1GetTagsCommand;
const serializeAws_restJson1GetUsageCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans/{usagePlanId}/usage";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  const query = {
    ...(input.keyId !== undefined && { keyId: input.keyId }),
    ...(input.startDate !== undefined && { startDate: input.startDate }),
    ...(input.endDate !== undefined && { endDate: input.endDate }),
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetUsageCommand = serializeAws_restJson1GetUsageCommand;
const serializeAws_restJson1GetUsagePlanCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans/{usagePlanId}";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
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
exports.serializeAws_restJson1GetUsagePlanCommand = serializeAws_restJson1GetUsagePlanCommand;
const serializeAws_restJson1GetUsagePlanKeyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans/{usagePlanId}/keys/{keyId}";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  if (input.keyId !== undefined) {
    const labelValue = input.keyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: keyId.");
    }
    resolvedPath = resolvedPath.replace("{keyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: keyId.");
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
exports.serializeAws_restJson1GetUsagePlanKeyCommand = serializeAws_restJson1GetUsagePlanKeyCommand;
const serializeAws_restJson1GetUsagePlanKeysCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans/{usagePlanId}/keys";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nameQuery !== undefined && { name: input.nameQuery }),
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
exports.serializeAws_restJson1GetUsagePlanKeysCommand = serializeAws_restJson1GetUsagePlanKeysCommand;
const serializeAws_restJson1GetUsagePlansCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/usageplans";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.keyId !== undefined && { keyId: input.keyId }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1GetUsagePlansCommand = serializeAws_restJson1GetUsagePlansCommand;
const serializeAws_restJson1GetVpcLinkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/vpclinks/{vpcLinkId}";
  if (input.vpcLinkId !== undefined) {
    const labelValue = input.vpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{vpcLinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vpcLinkId.");
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
  let resolvedPath = "/vpclinks";
  const query = {
    ...(input.position !== undefined && { position: input.position }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
const serializeAws_restJson1ImportApiKeysCommand = async (input, context) => {
  const headers = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath = "/apikeys";
  const query = {
    mode: "import",
    ...(input.format !== undefined && { format: input.format }),
    ...(input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }),
  };
  let body;
  if (input.body !== undefined) {
    body = input.body;
  }
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
exports.serializeAws_restJson1ImportApiKeysCommand = serializeAws_restJson1ImportApiKeysCommand;
const serializeAws_restJson1ImportDocumentationPartsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath = "/restapis/{restApiId}/documentation/parts";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.mode !== undefined && { mode: input.mode }),
    ...(input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }),
  };
  let body;
  if (input.body !== undefined) {
    body = input.body;
  }
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
exports.serializeAws_restJson1ImportDocumentationPartsCommand = serializeAws_restJson1ImportDocumentationPartsCommand;
const serializeAws_restJson1ImportRestApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath = "/restapis";
  const query = {
    mode: "import",
    ...(input.parameters !== undefined && input.parameters),
    ...(input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }),
  };
  let body;
  if (input.body !== undefined) {
    body = input.body;
  }
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
exports.serializeAws_restJson1ImportRestApiCommand = serializeAws_restJson1ImportRestApiCommand;
const serializeAws_restJson1PutGatewayResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.responseType !== undefined) {
    const labelValue = input.responseType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: responseType.");
    }
    resolvedPath = resolvedPath.replace("{responseType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: responseType.");
  }
  let body;
  body = JSON.stringify({
    ...(input.responseParameters !== undefined &&
      input.responseParameters !== null && {
        responseParameters: serializeAws_restJson1MapOfStringToString(input.responseParameters, context),
      }),
    ...(input.responseTemplates !== undefined &&
      input.responseTemplates !== null && {
        responseTemplates: serializeAws_restJson1MapOfStringToString(input.responseTemplates, context),
      }),
    ...(input.statusCode !== undefined && input.statusCode !== null && { statusCode: input.statusCode }),
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
exports.serializeAws_restJson1PutGatewayResponseCommand = serializeAws_restJson1PutGatewayResponseCommand;
const serializeAws_restJson1PutIntegrationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  let body;
  body = JSON.stringify({
    ...(input.cacheKeyParameters !== undefined &&
      input.cacheKeyParameters !== null && {
        cacheKeyParameters: serializeAws_restJson1ListOfString(input.cacheKeyParameters, context),
      }),
    ...(input.cacheNamespace !== undefined &&
      input.cacheNamespace !== null && { cacheNamespace: input.cacheNamespace }),
    ...(input.connectionId !== undefined && input.connectionId !== null && { connectionId: input.connectionId }),
    ...(input.connectionType !== undefined &&
      input.connectionType !== null && { connectionType: input.connectionType }),
    ...(input.contentHandling !== undefined &&
      input.contentHandling !== null && { contentHandling: input.contentHandling }),
    ...(input.credentials !== undefined && input.credentials !== null && { credentials: input.credentials }),
    ...(input.integrationHttpMethod !== undefined &&
      input.integrationHttpMethod !== null && { httpMethod: input.integrationHttpMethod }),
    ...(input.passthroughBehavior !== undefined &&
      input.passthroughBehavior !== null && { passthroughBehavior: input.passthroughBehavior }),
    ...(input.requestParameters !== undefined &&
      input.requestParameters !== null && {
        requestParameters: serializeAws_restJson1MapOfStringToString(input.requestParameters, context),
      }),
    ...(input.requestTemplates !== undefined &&
      input.requestTemplates !== null && {
        requestTemplates: serializeAws_restJson1MapOfStringToString(input.requestTemplates, context),
      }),
    ...(input.timeoutInMillis !== undefined &&
      input.timeoutInMillis !== null && { timeoutInMillis: input.timeoutInMillis }),
    ...(input.tlsConfig !== undefined &&
      input.tlsConfig !== null && { tlsConfig: serializeAws_restJson1TlsConfig(input.tlsConfig, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
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
exports.serializeAws_restJson1PutIntegrationCommand = serializeAws_restJson1PutIntegrationCommand;
const serializeAws_restJson1PutIntegrationResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath =
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
  }
  let body;
  body = JSON.stringify({
    ...(input.contentHandling !== undefined &&
      input.contentHandling !== null && { contentHandling: input.contentHandling }),
    ...(input.responseParameters !== undefined &&
      input.responseParameters !== null && {
        responseParameters: serializeAws_restJson1MapOfStringToString(input.responseParameters, context),
      }),
    ...(input.responseTemplates !== undefined &&
      input.responseTemplates !== null && {
        responseTemplates: serializeAws_restJson1MapOfStringToString(input.responseTemplates, context),
      }),
    ...(input.selectionPattern !== undefined &&
      input.selectionPattern !== null && { selectionPattern: input.selectionPattern }),
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
exports.serializeAws_restJson1PutIntegrationResponseCommand = serializeAws_restJson1PutIntegrationResponseCommand;
const serializeAws_restJson1PutMethodCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  let body;
  body = JSON.stringify({
    ...(input.apiKeyRequired !== undefined &&
      input.apiKeyRequired !== null && { apiKeyRequired: input.apiKeyRequired }),
    ...(input.authorizationScopes !== undefined &&
      input.authorizationScopes !== null && {
        authorizationScopes: serializeAws_restJson1ListOfString(input.authorizationScopes, context),
      }),
    ...(input.authorizationType !== undefined &&
      input.authorizationType !== null && { authorizationType: input.authorizationType }),
    ...(input.authorizerId !== undefined && input.authorizerId !== null && { authorizerId: input.authorizerId }),
    ...(input.operationName !== undefined && input.operationName !== null && { operationName: input.operationName }),
    ...(input.requestModels !== undefined &&
      input.requestModels !== null && {
        requestModels: serializeAws_restJson1MapOfStringToString(input.requestModels, context),
      }),
    ...(input.requestParameters !== undefined &&
      input.requestParameters !== null && {
        requestParameters: serializeAws_restJson1MapOfStringToBoolean(input.requestParameters, context),
      }),
    ...(input.requestValidatorId !== undefined &&
      input.requestValidatorId !== null && { requestValidatorId: input.requestValidatorId }),
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
exports.serializeAws_restJson1PutMethodCommand = serializeAws_restJson1PutMethodCommand;
const serializeAws_restJson1PutMethodResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
  }
  let body;
  body = JSON.stringify({
    ...(input.responseModels !== undefined &&
      input.responseModels !== null && {
        responseModels: serializeAws_restJson1MapOfStringToString(input.responseModels, context),
      }),
    ...(input.responseParameters !== undefined &&
      input.responseParameters !== null && {
        responseParameters: serializeAws_restJson1MapOfStringToBoolean(input.responseParameters, context),
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
exports.serializeAws_restJson1PutMethodResponseCommand = serializeAws_restJson1PutMethodResponseCommand;
const serializeAws_restJson1PutRestApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath = "/restapis/{restApiId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  const query = {
    ...(input.parameters !== undefined && input.parameters),
    ...(input.mode !== undefined && { mode: input.mode }),
    ...(input.failOnWarnings !== undefined && { failonwarnings: input.failOnWarnings.toString() }),
  };
  let body;
  if (input.body !== undefined) {
    body = input.body;
  }
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
exports.serializeAws_restJson1PutRestApiCommand = serializeAws_restJson1PutRestApiCommand;
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
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body;
  body = JSON.stringify({
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1MapOfStringToString(input.tags, context) }),
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
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1TestInvokeAuthorizerCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.authorizerId !== undefined) {
    const labelValue = input.authorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: authorizerId.");
    }
    resolvedPath = resolvedPath.replace("{authorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: authorizerId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.additionalContext !== undefined &&
      input.additionalContext !== null && {
        additionalContext: serializeAws_restJson1MapOfStringToString(input.additionalContext, context),
      }),
    ...(input.body !== undefined && input.body !== null && { body: input.body }),
    ...(input.headers !== undefined &&
      input.headers !== null && { headers: serializeAws_restJson1MapOfStringToString(input.headers, context) }),
    ...(input.multiValueHeaders !== undefined &&
      input.multiValueHeaders !== null && {
        multiValueHeaders: serializeAws_restJson1MapOfStringToList(input.multiValueHeaders, context),
      }),
    ...(input.pathWithQueryString !== undefined &&
      input.pathWithQueryString !== null && { pathWithQueryString: input.pathWithQueryString }),
    ...(input.stageVariables !== undefined &&
      input.stageVariables !== null && {
        stageVariables: serializeAws_restJson1MapOfStringToString(input.stageVariables, context),
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
exports.serializeAws_restJson1TestInvokeAuthorizerCommand = serializeAws_restJson1TestInvokeAuthorizerCommand;
const serializeAws_restJson1TestInvokeMethodCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  let body;
  body = JSON.stringify({
    ...(input.body !== undefined && input.body !== null && { body: input.body }),
    ...(input.clientCertificateId !== undefined &&
      input.clientCertificateId !== null && { clientCertificateId: input.clientCertificateId }),
    ...(input.headers !== undefined &&
      input.headers !== null && { headers: serializeAws_restJson1MapOfStringToString(input.headers, context) }),
    ...(input.multiValueHeaders !== undefined &&
      input.multiValueHeaders !== null && {
        multiValueHeaders: serializeAws_restJson1MapOfStringToList(input.multiValueHeaders, context),
      }),
    ...(input.pathWithQueryString !== undefined &&
      input.pathWithQueryString !== null && { pathWithQueryString: input.pathWithQueryString }),
    ...(input.stageVariables !== undefined &&
      input.stageVariables !== null && {
        stageVariables: serializeAws_restJson1MapOfStringToString(input.stageVariables, context),
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
exports.serializeAws_restJson1TestInvokeMethodCommand = serializeAws_restJson1TestInvokeMethodCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/tags/{resourceArn}";
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
const serializeAws_restJson1UpdateAccountCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/account";
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateAccountCommand = serializeAws_restJson1UpdateAccountCommand;
const serializeAws_restJson1UpdateApiKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apikeys/{apiKey}";
  if (input.apiKey !== undefined) {
    const labelValue = input.apiKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiKey.");
    }
    resolvedPath = resolvedPath.replace("{apiKey}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiKey.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateApiKeyCommand = serializeAws_restJson1UpdateApiKeyCommand;
const serializeAws_restJson1UpdateAuthorizerCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/authorizers/{authorizerId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.authorizerId !== undefined) {
    const labelValue = input.authorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: authorizerId.");
    }
    resolvedPath = resolvedPath.replace("{authorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: authorizerId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateAuthorizerCommand = serializeAws_restJson1UpdateAuthorizerCommand;
const serializeAws_restJson1UpdateBasePathMappingCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/domainnames/{domainName}/basepathmappings/{basePath}";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  if (input.basePath !== undefined) {
    const labelValue = input.basePath;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: basePath.");
    }
    resolvedPath = resolvedPath.replace("{basePath}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: basePath.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateBasePathMappingCommand = serializeAws_restJson1UpdateBasePathMappingCommand;
const serializeAws_restJson1UpdateClientCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/clientcertificates/{clientCertificateId}";
  if (input.clientCertificateId !== undefined) {
    const labelValue = input.clientCertificateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: clientCertificateId.");
    }
    resolvedPath = resolvedPath.replace(
      "{clientCertificateId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clientCertificateId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateClientCertificateCommand = serializeAws_restJson1UpdateClientCertificateCommand;
const serializeAws_restJson1UpdateDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/deployments/{deploymentId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.deploymentId !== undefined) {
    const labelValue = input.deploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deploymentId.");
    }
    resolvedPath = resolvedPath.replace("{deploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deploymentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateDeploymentCommand = serializeAws_restJson1UpdateDeploymentCommand;
const serializeAws_restJson1UpdateDocumentationPartCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/documentation/parts/{documentationPartId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.documentationPartId !== undefined) {
    const labelValue = input.documentationPartId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: documentationPartId.");
    }
    resolvedPath = resolvedPath.replace(
      "{documentationPartId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: documentationPartId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateDocumentationPartCommand = serializeAws_restJson1UpdateDocumentationPartCommand;
const serializeAws_restJson1UpdateDocumentationVersionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/documentation/versions/{documentationVersion}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.documentationVersion !== undefined) {
    const labelValue = input.documentationVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: documentationVersion.");
    }
    resolvedPath = resolvedPath.replace(
      "{documentationVersion}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: documentationVersion.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateDocumentationVersionCommand =
  serializeAws_restJson1UpdateDocumentationVersionCommand;
const serializeAws_restJson1UpdateDomainNameCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/domainnames/{domainName}";
  if (input.domainName !== undefined) {
    const labelValue = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
const serializeAws_restJson1UpdateGatewayResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/gatewayresponses/{responseType}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.responseType !== undefined) {
    const labelValue = input.responseType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: responseType.");
    }
    resolvedPath = resolvedPath.replace("{responseType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: responseType.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateGatewayResponseCommand = serializeAws_restJson1UpdateGatewayResponseCommand;
const serializeAws_restJson1UpdateIntegrationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateIntegrationCommand = serializeAws_restJson1UpdateIntegrationCommand;
const serializeAws_restJson1UpdateIntegrationResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath =
    "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateIntegrationResponseCommand = serializeAws_restJson1UpdateIntegrationResponseCommand;
const serializeAws_restJson1UpdateMethodCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateMethodCommand = serializeAws_restJson1UpdateMethodCommand;
const serializeAws_restJson1UpdateMethodResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  if (input.httpMethod !== undefined) {
    const labelValue = input.httpMethod;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: httpMethod.");
    }
    resolvedPath = resolvedPath.replace("{httpMethod}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: httpMethod.");
  }
  if (input.statusCode !== undefined) {
    const labelValue = input.statusCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statusCode.");
    }
    resolvedPath = resolvedPath.replace("{statusCode}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statusCode.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateMethodResponseCommand = serializeAws_restJson1UpdateMethodResponseCommand;
const serializeAws_restJson1UpdateModelCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/models/{modelName}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.modelName !== undefined) {
    const labelValue = input.modelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: modelName.");
    }
    resolvedPath = resolvedPath.replace("{modelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: modelName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateModelCommand = serializeAws_restJson1UpdateModelCommand;
const serializeAws_restJson1UpdateRequestValidatorCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/requestvalidators/{requestValidatorId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.requestValidatorId !== undefined) {
    const labelValue = input.requestValidatorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: requestValidatorId.");
    }
    resolvedPath = resolvedPath.replace("{requestValidatorId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: requestValidatorId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateRequestValidatorCommand = serializeAws_restJson1UpdateRequestValidatorCommand;
const serializeAws_restJson1UpdateResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/resources/{resourceId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.resourceId !== undefined) {
    const labelValue = input.resourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceId.");
    }
    resolvedPath = resolvedPath.replace("{resourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateResourceCommand = serializeAws_restJson1UpdateResourceCommand;
const serializeAws_restJson1UpdateRestApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateRestApiCommand = serializeAws_restJson1UpdateRestApiCommand;
const serializeAws_restJson1UpdateStageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restapis/{restApiId}/stages/{stageName}";
  if (input.restApiId !== undefined) {
    const labelValue = input.restApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: restApiId.");
    }
    resolvedPath = resolvedPath.replace("{restApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: restApiId.");
  }
  if (input.stageName !== undefined) {
    const labelValue = input.stageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: stageName.");
    }
    resolvedPath = resolvedPath.replace("{stageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: stageName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
const serializeAws_restJson1UpdateUsageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/usageplans/{usagePlanId}/keys/{keyId}/usage";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  if (input.keyId !== undefined) {
    const labelValue = input.keyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: keyId.");
    }
    resolvedPath = resolvedPath.replace("{keyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: keyId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateUsageCommand = serializeAws_restJson1UpdateUsageCommand;
const serializeAws_restJson1UpdateUsagePlanCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/usageplans/{usagePlanId}";
  if (input.usagePlanId !== undefined) {
    const labelValue = input.usagePlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: usagePlanId.");
    }
    resolvedPath = resolvedPath.replace("{usagePlanId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: usagePlanId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateUsagePlanCommand = serializeAws_restJson1UpdateUsagePlanCommand;
const serializeAws_restJson1UpdateVpcLinkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/vpclinks/{vpcLinkId}";
  if (input.vpcLinkId !== undefined) {
    const labelValue = input.vpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{vpcLinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vpcLinkId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.patchOperations !== undefined &&
      input.patchOperations !== null && {
        patchOperations: serializeAws_restJson1ListOfPatchOperation(input.patchOperations, context),
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
exports.serializeAws_restJson1UpdateVpcLinkCommand = serializeAws_restJson1UpdateVpcLinkCommand;
const deserializeAws_restJson1CreateApiKeyCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    customerId: undefined,
    description: undefined,
    enabled: undefined,
    id: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    stageKeys: undefined,
    tags: undefined,
    value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.customerId !== undefined && data.customerId !== null) {
    contents.customerId = data.customerId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.enabled !== undefined && data.enabled !== null) {
    contents.enabled = data.enabled;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.stageKeys !== undefined && data.stageKeys !== null) {
    contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.value !== undefined && data.value !== null) {
    contents.value = data.value;
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    authType: undefined,
    authorizerCredentials: undefined,
    authorizerResultTtlInSeconds: undefined,
    authorizerUri: undefined,
    id: undefined,
    identitySource: undefined,
    identityValidationExpression: undefined,
    name: undefined,
    providerARNs: undefined,
    type: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authType !== undefined && data.authType !== null) {
    contents.authType = data.authType;
  }
  if (data.authorizerCredentials !== undefined && data.authorizerCredentials !== null) {
    contents.authorizerCredentials = data.authorizerCredentials;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.authorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.authorizerUri = data.authorizerUri;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.identitySource = data.identitySource;
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.identityValidationExpression = data.identityValidationExpression;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.providerARNs !== undefined && data.providerARNs !== null) {
    contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateBasePathMappingCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBasePathMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    basePath: undefined,
    restApiId: undefined,
    stage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.basePath !== undefined && data.basePath !== null) {
    contents.basePath = data.basePath;
  }
  if (data.restApiId !== undefined && data.restApiId !== null) {
    contents.restApiId = data.restApiId;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.stage = data.stage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBasePathMappingCommand = deserializeAws_restJson1CreateBasePathMappingCommand;
const deserializeAws_restJson1CreateBasePathMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiSummary: undefined,
    createdDate: undefined,
    description: undefined,
    id: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiSummary !== undefined && data.apiSummary !== null) {
    contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateDocumentationPartCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDocumentationPartCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    location: undefined,
    properties: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.location !== undefined && data.location !== null) {
    contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
  }
  if (data.properties !== undefined && data.properties !== null) {
    contents.properties = data.properties;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDocumentationPartCommand = deserializeAws_restJson1CreateDocumentationPartCommand;
const deserializeAws_restJson1CreateDocumentationPartCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateDocumentationVersionCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDocumentationVersionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    description: undefined,
    version: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDocumentationVersionCommand =
  deserializeAws_restJson1CreateDocumentationVersionCommand;
const deserializeAws_restJson1CreateDocumentationVersionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    certificateArn: undefined,
    certificateName: undefined,
    certificateUploadDate: undefined,
    distributionDomainName: undefined,
    distributionHostedZoneId: undefined,
    domainName: undefined,
    domainNameStatus: undefined,
    domainNameStatusMessage: undefined,
    endpointConfiguration: undefined,
    mutualTlsAuthentication: undefined,
    regionalCertificateArn: undefined,
    regionalCertificateName: undefined,
    regionalDomainName: undefined,
    regionalHostedZoneId: undefined,
    securityPolicy: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.certificateArn !== undefined && data.certificateArn !== null) {
    contents.certificateArn = data.certificateArn;
  }
  if (data.certificateName !== undefined && data.certificateName !== null) {
    contents.certificateName = data.certificateName;
  }
  if (data.certificateUploadDate !== undefined && data.certificateUploadDate !== null) {
    contents.certificateUploadDate = new Date(Math.round(data.certificateUploadDate * 1000));
  }
  if (data.distributionDomainName !== undefined && data.distributionDomainName !== null) {
    contents.distributionDomainName = data.distributionDomainName;
  }
  if (data.distributionHostedZoneId !== undefined && data.distributionHostedZoneId !== null) {
    contents.distributionHostedZoneId = data.distributionHostedZoneId;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.domainName = data.domainName;
  }
  if (data.domainNameStatus !== undefined && data.domainNameStatus !== null) {
    contents.domainNameStatus = data.domainNameStatus;
  }
  if (data.domainNameStatusMessage !== undefined && data.domainNameStatusMessage !== null) {
    contents.domainNameStatusMessage = data.domainNameStatusMessage;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.regionalCertificateArn !== undefined && data.regionalCertificateArn !== null) {
    contents.regionalCertificateArn = data.regionalCertificateArn;
  }
  if (data.regionalCertificateName !== undefined && data.regionalCertificateName !== null) {
    contents.regionalCertificateName = data.regionalCertificateName;
  }
  if (data.regionalDomainName !== undefined && data.regionalDomainName !== null) {
    contents.regionalDomainName = data.regionalDomainName;
  }
  if (data.regionalHostedZoneId !== undefined && data.regionalHostedZoneId !== null) {
    contents.regionalHostedZoneId = data.regionalHostedZoneId;
  }
  if (data.securityPolicy !== undefined && data.securityPolicy !== null) {
    contents.securityPolicy = data.securityPolicy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateModelCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    contentType: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    schema: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.contentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.schema = data.schema;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateRequestValidatorCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRequestValidatorCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    name: undefined,
    validateRequestBody: undefined,
    validateRequestParameters: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.validateRequestBody !== undefined && data.validateRequestBody !== null) {
    contents.validateRequestBody = data.validateRequestBody;
  }
  if (data.validateRequestParameters !== undefined && data.validateRequestParameters !== null) {
    contents.validateRequestParameters = data.validateRequestParameters;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRequestValidatorCommand = deserializeAws_restJson1CreateRequestValidatorCommand;
const deserializeAws_restJson1CreateRequestValidatorCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateResourceCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    parentId: undefined,
    path: undefined,
    pathPart: undefined,
    resourceMethods: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.parentId !== undefined && data.parentId !== null) {
    contents.parentId = data.parentId;
  }
  if (data.path !== undefined && data.path !== null) {
    contents.path = data.path;
  }
  if (data.pathPart !== undefined && data.pathPart !== null) {
    contents.pathPart = data.pathPart;
  }
  if (data.resourceMethods !== undefined && data.resourceMethods !== null) {
    contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResourceCommand = deserializeAws_restJson1CreateResourceCommand;
const deserializeAws_restJson1CreateResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateRestApiCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRestApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeySource: undefined,
    binaryMediaTypes: undefined,
    createdDate: undefined,
    description: undefined,
    disableExecuteApiEndpoint: undefined,
    endpointConfiguration: undefined,
    id: undefined,
    minimumCompressionSize: undefined,
    name: undefined,
    policy: undefined,
    tags: undefined,
    version: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
    contents.apiKeySource = data.apiKeySource;
  }
  if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
    contents.minimumCompressionSize = data.minimumCompressionSize;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRestApiCommand = deserializeAws_restJson1CreateRestApiCommand;
const deserializeAws_restJson1CreateRestApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateStageCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    accessLogSettings: undefined,
    cacheClusterEnabled: undefined,
    cacheClusterSize: undefined,
    cacheClusterStatus: undefined,
    canarySettings: undefined,
    clientCertificateId: undefined,
    createdDate: undefined,
    deploymentId: undefined,
    description: undefined,
    documentationVersion: undefined,
    lastUpdatedDate: undefined,
    methodSettings: undefined,
    stageName: undefined,
    tags: undefined,
    tracingEnabled: undefined,
    variables: undefined,
    webAclArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.cacheClusterEnabled !== undefined && data.cacheClusterEnabled !== null) {
    contents.cacheClusterEnabled = data.cacheClusterEnabled;
  }
  if (data.cacheClusterSize !== undefined && data.cacheClusterSize !== null) {
    contents.cacheClusterSize = data.cacheClusterSize;
  }
  if (data.cacheClusterStatus !== undefined && data.cacheClusterStatus !== null) {
    contents.cacheClusterStatus = data.cacheClusterStatus;
  }
  if (data.canarySettings !== undefined && data.canarySettings !== null) {
    contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.clientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.documentationVersion !== undefined && data.documentationVersion !== null) {
    contents.documentationVersion = data.documentationVersion;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.methodSettings !== undefined && data.methodSettings !== null) {
    contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.stageName = data.stageName;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.tracingEnabled !== undefined && data.tracingEnabled !== null) {
    contents.tracingEnabled = data.tracingEnabled;
  }
  if (data.variables !== undefined && data.variables !== null) {
    contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
  }
  if (data.webAclArn !== undefined && data.webAclArn !== null) {
    contents.webAclArn = data.webAclArn;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateUsagePlanCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUsagePlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiStages: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    productCode: undefined,
    quota: undefined,
    tags: undefined,
    throttle: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiStages !== undefined && data.apiStages !== null) {
    contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.productCode !== undefined && data.productCode !== null) {
    contents.productCode = data.productCode;
  }
  if (data.quota !== undefined && data.quota !== null) {
    contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.throttle !== undefined && data.throttle !== null) {
    contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUsagePlanCommand = deserializeAws_restJson1CreateUsagePlanCommand;
const deserializeAws_restJson1CreateUsagePlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateUsagePlanKeyCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUsagePlanKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    name: undefined,
    type: undefined,
    value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  if (data.value !== undefined && data.value !== null) {
    contents.value = data.value;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUsagePlanKeyCommand = deserializeAws_restJson1CreateUsagePlanKeyCommand;
const deserializeAws_restJson1CreateUsagePlanKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1CreateVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    description: undefined,
    id: undefined,
    name: undefined,
    status: undefined,
    statusMessage: undefined,
    tags: undefined,
    targetArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.statusMessage !== undefined && data.statusMessage !== null) {
    contents.statusMessage = data.statusMessage;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.targetArns !== undefined && data.targetArns !== null) {
    contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
  if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteBasePathMappingCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBasePathMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBasePathMappingCommand = deserializeAws_restJson1DeleteBasePathMappingCommand;
const deserializeAws_restJson1DeleteBasePathMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteClientCertificateCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteClientCertificateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteClientCertificateCommand = deserializeAws_restJson1DeleteClientCertificateCommand;
const deserializeAws_restJson1DeleteClientCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteDocumentationPartCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDocumentationPartCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDocumentationPartCommand = deserializeAws_restJson1DeleteDocumentationPartCommand;
const deserializeAws_restJson1DeleteDocumentationPartCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteDocumentationVersionCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDocumentationVersionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDocumentationVersionCommand =
  deserializeAws_restJson1DeleteDocumentationVersionCommand;
const deserializeAws_restJson1DeleteDocumentationVersionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteGatewayResponseCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGatewayResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGatewayResponseCommand = deserializeAws_restJson1DeleteGatewayResponseCommand;
const deserializeAws_restJson1DeleteGatewayResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteMethodCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMethodCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMethodCommand = deserializeAws_restJson1DeleteMethodCommand;
const deserializeAws_restJson1DeleteMethodCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteMethodResponseCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMethodResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMethodResponseCommand = deserializeAws_restJson1DeleteMethodResponseCommand;
const deserializeAws_restJson1DeleteMethodResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteModelCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteRequestValidatorCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRequestValidatorCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRequestValidatorCommand = deserializeAws_restJson1DeleteRequestValidatorCommand;
const deserializeAws_restJson1DeleteRequestValidatorCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteResourceCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourceCommand = deserializeAws_restJson1DeleteResourceCommand;
const deserializeAws_restJson1DeleteResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteRestApiCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRestApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRestApiCommand = deserializeAws_restJson1DeleteRestApiCommand;
const deserializeAws_restJson1DeleteRestApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteStageCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteUsagePlanCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUsagePlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUsagePlanCommand = deserializeAws_restJson1DeleteUsagePlanCommand;
const deserializeAws_restJson1DeleteUsagePlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1DeleteUsagePlanKeyCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUsagePlanKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUsagePlanKeyCommand = deserializeAws_restJson1DeleteUsagePlanKeyCommand;
const deserializeAws_restJson1DeleteUsagePlanKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1FlushStageAuthorizersCacheCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushStageAuthorizersCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FlushStageAuthorizersCacheCommand =
  deserializeAws_restJson1FlushStageAuthorizersCacheCommand;
const deserializeAws_restJson1FlushStageAuthorizersCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1FlushStageCacheCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushStageCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FlushStageCacheCommand = deserializeAws_restJson1FlushStageCacheCommand;
const deserializeAws_restJson1FlushStageCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GenerateClientCertificateCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateClientCertificateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    clientCertificateId: undefined,
    createdDate: undefined,
    description: undefined,
    expirationDate: undefined,
    pemEncodedCertificate: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.clientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.expirationDate !== undefined && data.expirationDate !== null) {
    contents.expirationDate = new Date(Math.round(data.expirationDate * 1000));
  }
  if (data.pemEncodedCertificate !== undefined && data.pemEncodedCertificate !== null) {
    contents.pemEncodedCertificate = data.pemEncodedCertificate;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GenerateClientCertificateCommand =
  deserializeAws_restJson1GenerateClientCertificateCommand;
const deserializeAws_restJson1GenerateClientCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeyVersion: undefined,
    cloudwatchRoleArn: undefined,
    features: undefined,
    throttleSettings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeyVersion !== undefined && data.apiKeyVersion !== null) {
    contents.apiKeyVersion = data.apiKeyVersion;
  }
  if (data.cloudwatchRoleArn !== undefined && data.cloudwatchRoleArn !== null) {
    contents.cloudwatchRoleArn = data.cloudwatchRoleArn;
  }
  if (data.features !== undefined && data.features !== null) {
    contents.features = deserializeAws_restJson1ListOfString(data.features, context);
  }
  if (data.throttleSettings !== undefined && data.throttleSettings !== null) {
    contents.throttleSettings = deserializeAws_restJson1ThrottleSettings(data.throttleSettings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAccountCommand = deserializeAws_restJson1GetAccountCommand;
const deserializeAws_restJson1GetAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetApiKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    customerId: undefined,
    description: undefined,
    enabled: undefined,
    id: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    stageKeys: undefined,
    tags: undefined,
    value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.customerId !== undefined && data.customerId !== null) {
    contents.customerId = data.customerId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.enabled !== undefined && data.enabled !== null) {
    contents.enabled = data.enabled;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.stageKeys !== undefined && data.stageKeys !== null) {
    contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.value !== undefined && data.value !== null) {
    contents.value = data.value;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApiKeyCommand = deserializeAws_restJson1GetApiKeyCommand;
const deserializeAws_restJson1GetApiKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetApiKeysCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiKeysCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfApiKey(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApiKeysCommand = deserializeAws_restJson1GetApiKeysCommand;
const deserializeAws_restJson1GetApiKeysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    authType: undefined,
    authorizerCredentials: undefined,
    authorizerResultTtlInSeconds: undefined,
    authorizerUri: undefined,
    id: undefined,
    identitySource: undefined,
    identityValidationExpression: undefined,
    name: undefined,
    providerARNs: undefined,
    type: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authType !== undefined && data.authType !== null) {
    contents.authType = data.authType;
  }
  if (data.authorizerCredentials !== undefined && data.authorizerCredentials !== null) {
    contents.authorizerCredentials = data.authorizerCredentials;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.authorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.authorizerUri = data.authorizerUri;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.identitySource = data.identitySource;
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.identityValidationExpression = data.identityValidationExpression;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.providerARNs !== undefined && data.providerARNs !== null) {
    contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetAuthorizersCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizersCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfAuthorizer(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetBasePathMappingCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBasePathMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    basePath: undefined,
    restApiId: undefined,
    stage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.basePath !== undefined && data.basePath !== null) {
    contents.basePath = data.basePath;
  }
  if (data.restApiId !== undefined && data.restApiId !== null) {
    contents.restApiId = data.restApiId;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.stage = data.stage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBasePathMappingCommand = deserializeAws_restJson1GetBasePathMappingCommand;
const deserializeAws_restJson1GetBasePathMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetBasePathMappingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBasePathMappingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfBasePathMapping(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBasePathMappingsCommand = deserializeAws_restJson1GetBasePathMappingsCommand;
const deserializeAws_restJson1GetBasePathMappingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetClientCertificateCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClientCertificateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    clientCertificateId: undefined,
    createdDate: undefined,
    description: undefined,
    expirationDate: undefined,
    pemEncodedCertificate: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.clientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.expirationDate !== undefined && data.expirationDate !== null) {
    contents.expirationDate = new Date(Math.round(data.expirationDate * 1000));
  }
  if (data.pemEncodedCertificate !== undefined && data.pemEncodedCertificate !== null) {
    contents.pemEncodedCertificate = data.pemEncodedCertificate;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetClientCertificateCommand = deserializeAws_restJson1GetClientCertificateCommand;
const deserializeAws_restJson1GetClientCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetClientCertificatesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetClientCertificatesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfClientCertificate(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetClientCertificatesCommand = deserializeAws_restJson1GetClientCertificatesCommand;
const deserializeAws_restJson1GetClientCertificatesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiSummary: undefined,
    createdDate: undefined,
    description: undefined,
    id: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiSummary !== undefined && data.apiSummary !== null) {
    contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDeploymentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfDeployment(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDocumentationPartCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationPartCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    location: undefined,
    properties: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.location !== undefined && data.location !== null) {
    contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
  }
  if (data.properties !== undefined && data.properties !== null) {
    contents.properties = data.properties;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentationPartCommand = deserializeAws_restJson1GetDocumentationPartCommand;
const deserializeAws_restJson1GetDocumentationPartCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDocumentationPartsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationPartsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfDocumentationPart(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentationPartsCommand = deserializeAws_restJson1GetDocumentationPartsCommand;
const deserializeAws_restJson1GetDocumentationPartsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDocumentationVersionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationVersionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    description: undefined,
    version: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentationVersionCommand = deserializeAws_restJson1GetDocumentationVersionCommand;
const deserializeAws_restJson1GetDocumentationVersionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDocumentationVersionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDocumentationVersionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfDocumentationVersion(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentationVersionsCommand =
  deserializeAws_restJson1GetDocumentationVersionsCommand;
const deserializeAws_restJson1GetDocumentationVersionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    certificateArn: undefined,
    certificateName: undefined,
    certificateUploadDate: undefined,
    distributionDomainName: undefined,
    distributionHostedZoneId: undefined,
    domainName: undefined,
    domainNameStatus: undefined,
    domainNameStatusMessage: undefined,
    endpointConfiguration: undefined,
    mutualTlsAuthentication: undefined,
    regionalCertificateArn: undefined,
    regionalCertificateName: undefined,
    regionalDomainName: undefined,
    regionalHostedZoneId: undefined,
    securityPolicy: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.certificateArn !== undefined && data.certificateArn !== null) {
    contents.certificateArn = data.certificateArn;
  }
  if (data.certificateName !== undefined && data.certificateName !== null) {
    contents.certificateName = data.certificateName;
  }
  if (data.certificateUploadDate !== undefined && data.certificateUploadDate !== null) {
    contents.certificateUploadDate = new Date(Math.round(data.certificateUploadDate * 1000));
  }
  if (data.distributionDomainName !== undefined && data.distributionDomainName !== null) {
    contents.distributionDomainName = data.distributionDomainName;
  }
  if (data.distributionHostedZoneId !== undefined && data.distributionHostedZoneId !== null) {
    contents.distributionHostedZoneId = data.distributionHostedZoneId;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.domainName = data.domainName;
  }
  if (data.domainNameStatus !== undefined && data.domainNameStatus !== null) {
    contents.domainNameStatus = data.domainNameStatus;
  }
  if (data.domainNameStatusMessage !== undefined && data.domainNameStatusMessage !== null) {
    contents.domainNameStatusMessage = data.domainNameStatusMessage;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.regionalCertificateArn !== undefined && data.regionalCertificateArn !== null) {
    contents.regionalCertificateArn = data.regionalCertificateArn;
  }
  if (data.regionalCertificateName !== undefined && data.regionalCertificateName !== null) {
    contents.regionalCertificateName = data.regionalCertificateName;
  }
  if (data.regionalDomainName !== undefined && data.regionalDomainName !== null) {
    contents.regionalDomainName = data.regionalDomainName;
  }
  if (data.regionalHostedZoneId !== undefined && data.regionalHostedZoneId !== null) {
    contents.regionalHostedZoneId = data.regionalHostedZoneId;
  }
  if (data.securityPolicy !== undefined && data.securityPolicy !== null) {
    contents.securityPolicy = data.securityPolicy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetDomainNamesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNamesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfDomainName(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetExportCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    body: undefined,
    contentDisposition: undefined,
    contentType: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.contentDisposition = output.headers["content-disposition"];
  }
  const data = await collectBody(output.body, context);
  contents.body = data;
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetExportCommand = deserializeAws_restJson1GetExportCommand;
const deserializeAws_restJson1GetExportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetGatewayResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGatewayResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    defaultResponse: undefined,
    responseParameters: undefined,
    responseTemplates: undefined,
    responseType: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.defaultResponse !== undefined && data.defaultResponse !== null) {
    contents.defaultResponse = data.defaultResponse;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.responseType !== undefined && data.responseType !== null) {
    contents.responseType = data.responseType;
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGatewayResponseCommand = deserializeAws_restJson1GetGatewayResponseCommand;
const deserializeAws_restJson1GetGatewayResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetGatewayResponsesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGatewayResponsesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfGatewayResponse(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGatewayResponsesCommand = deserializeAws_restJson1GetGatewayResponsesCommand;
const deserializeAws_restJson1GetGatewayResponsesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    cacheKeyParameters: undefined,
    cacheNamespace: undefined,
    connectionId: undefined,
    connectionType: undefined,
    contentHandling: undefined,
    credentials: undefined,
    httpMethod: undefined,
    integrationResponses: undefined,
    passthroughBehavior: undefined,
    requestParameters: undefined,
    requestTemplates: undefined,
    timeoutInMillis: undefined,
    tlsConfig: undefined,
    type: undefined,
    uri: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.cacheKeyParameters !== undefined && data.cacheKeyParameters !== null) {
    contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
  }
  if (data.cacheNamespace !== undefined && data.cacheNamespace !== null) {
    contents.cacheNamespace = data.cacheNamespace;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.connectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.connectionType = data.connectionType;
  }
  if (data.contentHandling !== undefined && data.contentHandling !== null) {
    contents.contentHandling = data.contentHandling;
  }
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = data.credentials;
  }
  if (data.httpMethod !== undefined && data.httpMethod !== null) {
    contents.httpMethod = data.httpMethod;
  }
  if (data.integrationResponses !== undefined && data.integrationResponses !== null) {
    contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
      data.integrationResponses,
      context
    );
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.passthroughBehavior = data.passthroughBehavior;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.timeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  if (data.uri !== undefined && data.uri !== null) {
    contents.uri = data.uri;
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    contentHandling: undefined,
    responseParameters: undefined,
    responseTemplates: undefined,
    selectionPattern: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentHandling !== undefined && data.contentHandling !== null) {
    contents.contentHandling = data.contentHandling;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.selectionPattern !== undefined && data.selectionPattern !== null) {
    contents.selectionPattern = data.selectionPattern;
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetMethodCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMethodCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeyRequired: undefined,
    authorizationScopes: undefined,
    authorizationType: undefined,
    authorizerId: undefined,
    httpMethod: undefined,
    methodIntegration: undefined,
    methodResponses: undefined,
    operationName: undefined,
    requestModels: undefined,
    requestParameters: undefined,
    requestValidatorId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.apiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.authorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.authorizerId = data.authorizerId;
  }
  if (data.httpMethod !== undefined && data.httpMethod !== null) {
    contents.httpMethod = data.httpMethod;
  }
  if (data.methodIntegration !== undefined && data.methodIntegration !== null) {
    contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
  }
  if (data.methodResponses !== undefined && data.methodResponses !== null) {
    contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.operationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
  }
  if (data.requestValidatorId !== undefined && data.requestValidatorId !== null) {
    contents.requestValidatorId = data.requestValidatorId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMethodCommand = deserializeAws_restJson1GetMethodCommand;
const deserializeAws_restJson1GetMethodCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetMethodResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMethodResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    responseModels: undefined,
    responseParameters: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(data.responseParameters, context);
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMethodResponseCommand = deserializeAws_restJson1GetMethodResponseCommand;
const deserializeAws_restJson1GetMethodResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetModelCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    contentType: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    schema: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.contentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.schema = data.schema;
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetModelsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfModel(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetModelTemplateCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelTemplateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.value !== undefined && data.value !== null) {
    contents.value = data.value;
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetRequestValidatorCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRequestValidatorCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    name: undefined,
    validateRequestBody: undefined,
    validateRequestParameters: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.validateRequestBody !== undefined && data.validateRequestBody !== null) {
    contents.validateRequestBody = data.validateRequestBody;
  }
  if (data.validateRequestParameters !== undefined && data.validateRequestParameters !== null) {
    contents.validateRequestParameters = data.validateRequestParameters;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRequestValidatorCommand = deserializeAws_restJson1GetRequestValidatorCommand;
const deserializeAws_restJson1GetRequestValidatorCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetRequestValidatorsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRequestValidatorsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfRequestValidator(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRequestValidatorsCommand = deserializeAws_restJson1GetRequestValidatorsCommand;
const deserializeAws_restJson1GetRequestValidatorsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    parentId: undefined,
    path: undefined,
    pathPart: undefined,
    resourceMethods: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.parentId !== undefined && data.parentId !== null) {
    contents.parentId = data.parentId;
  }
  if (data.path !== undefined && data.path !== null) {
    contents.path = data.path;
  }
  if (data.pathPart !== undefined && data.pathPart !== null) {
    contents.pathPart = data.pathPart;
  }
  if (data.resourceMethods !== undefined && data.resourceMethods !== null) {
    contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceCommand = deserializeAws_restJson1GetResourceCommand;
const deserializeAws_restJson1GetResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetResourcesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfResource(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourcesCommand = deserializeAws_restJson1GetResourcesCommand;
const deserializeAws_restJson1GetResourcesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetRestApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRestApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeySource: undefined,
    binaryMediaTypes: undefined,
    createdDate: undefined,
    description: undefined,
    disableExecuteApiEndpoint: undefined,
    endpointConfiguration: undefined,
    id: undefined,
    minimumCompressionSize: undefined,
    name: undefined,
    policy: undefined,
    tags: undefined,
    version: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
    contents.apiKeySource = data.apiKeySource;
  }
  if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
    contents.minimumCompressionSize = data.minimumCompressionSize;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRestApiCommand = deserializeAws_restJson1GetRestApiCommand;
const deserializeAws_restJson1GetRestApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetRestApisCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRestApisCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfRestApi(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRestApisCommand = deserializeAws_restJson1GetRestApisCommand;
const deserializeAws_restJson1GetRestApisCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetSdkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSdkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    body: undefined,
    contentDisposition: undefined,
    contentType: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["content-disposition"] !== undefined) {
    contents.contentDisposition = output.headers["content-disposition"];
  }
  const data = await collectBody(output.body, context);
  contents.body = data;
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSdkCommand = deserializeAws_restJson1GetSdkCommand;
const deserializeAws_restJson1GetSdkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetSdkTypeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSdkTypeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    configurationProperties: undefined,
    description: undefined,
    friendlyName: undefined,
    id: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.configurationProperties !== undefined && data.configurationProperties !== null) {
    contents.configurationProperties = deserializeAws_restJson1ListOfSdkConfigurationProperty(
      data.configurationProperties,
      context
    );
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.friendlyName !== undefined && data.friendlyName !== null) {
    contents.friendlyName = data.friendlyName;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSdkTypeCommand = deserializeAws_restJson1GetSdkTypeCommand;
const deserializeAws_restJson1GetSdkTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetSdkTypesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSdkTypesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfSdkType(data.item, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSdkTypesCommand = deserializeAws_restJson1GetSdkTypesCommand;
const deserializeAws_restJson1GetSdkTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetStageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    accessLogSettings: undefined,
    cacheClusterEnabled: undefined,
    cacheClusterSize: undefined,
    cacheClusterStatus: undefined,
    canarySettings: undefined,
    clientCertificateId: undefined,
    createdDate: undefined,
    deploymentId: undefined,
    description: undefined,
    documentationVersion: undefined,
    lastUpdatedDate: undefined,
    methodSettings: undefined,
    stageName: undefined,
    tags: undefined,
    tracingEnabled: undefined,
    variables: undefined,
    webAclArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.cacheClusterEnabled !== undefined && data.cacheClusterEnabled !== null) {
    contents.cacheClusterEnabled = data.cacheClusterEnabled;
  }
  if (data.cacheClusterSize !== undefined && data.cacheClusterSize !== null) {
    contents.cacheClusterSize = data.cacheClusterSize;
  }
  if (data.cacheClusterStatus !== undefined && data.cacheClusterStatus !== null) {
    contents.cacheClusterStatus = data.cacheClusterStatus;
  }
  if (data.canarySettings !== undefined && data.canarySettings !== null) {
    contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.clientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.documentationVersion !== undefined && data.documentationVersion !== null) {
    contents.documentationVersion = data.documentationVersion;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.methodSettings !== undefined && data.methodSettings !== null) {
    contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.stageName = data.stageName;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.tracingEnabled !== undefined && data.tracingEnabled !== null) {
    contents.tracingEnabled = data.tracingEnabled;
  }
  if (data.variables !== undefined && data.variables !== null) {
    contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
  }
  if (data.webAclArn !== undefined && data.webAclArn !== null) {
    contents.webAclArn = data.webAclArn;
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetStagesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStagesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    item: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.item = deserializeAws_restJson1ListOfStage(data.item, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetTagsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTagsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetUsageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    endDate: undefined,
    items: undefined,
    position: undefined,
    startDate: undefined,
    usagePlanId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.endDate !== undefined && data.endDate !== null) {
    contents.endDate = data.endDate;
  }
  if (data.values !== undefined && data.values !== null) {
    contents.items = deserializeAws_restJson1MapOfKeyUsages(data.values, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  if (data.startDate !== undefined && data.startDate !== null) {
    contents.startDate = data.startDate;
  }
  if (data.usagePlanId !== undefined && data.usagePlanId !== null) {
    contents.usagePlanId = data.usagePlanId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsageCommand = deserializeAws_restJson1GetUsageCommand;
const deserializeAws_restJson1GetUsageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetUsagePlanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiStages: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    productCode: undefined,
    quota: undefined,
    tags: undefined,
    throttle: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiStages !== undefined && data.apiStages !== null) {
    contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.productCode !== undefined && data.productCode !== null) {
    contents.productCode = data.productCode;
  }
  if (data.quota !== undefined && data.quota !== null) {
    contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.throttle !== undefined && data.throttle !== null) {
    contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsagePlanCommand = deserializeAws_restJson1GetUsagePlanCommand;
const deserializeAws_restJson1GetUsagePlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetUsagePlanKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlanKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    name: undefined,
    type: undefined,
    value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  if (data.value !== undefined && data.value !== null) {
    contents.value = data.value;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsagePlanKeyCommand = deserializeAws_restJson1GetUsagePlanKeyCommand;
const deserializeAws_restJson1GetUsagePlanKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetUsagePlanKeysCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlanKeysCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfUsagePlanKey(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsagePlanKeysCommand = deserializeAws_restJson1GetUsagePlanKeysCommand;
const deserializeAws_restJson1GetUsagePlanKeysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetUsagePlansCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUsagePlansCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfUsagePlan(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUsagePlansCommand = deserializeAws_restJson1GetUsagePlansCommand;
const deserializeAws_restJson1GetUsagePlansCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    description: undefined,
    id: undefined,
    name: undefined,
    status: undefined,
    statusMessage: undefined,
    tags: undefined,
    targetArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.statusMessage !== undefined && data.statusMessage !== null) {
    contents.statusMessage = data.statusMessage;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.targetArns !== undefined && data.targetArns !== null) {
    contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
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
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1GetVpcLinksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    items: undefined,
    position: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.item !== undefined && data.item !== null) {
    contents.items = deserializeAws_restJson1ListOfVpcLink(data.item, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1ImportApiKeysCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportApiKeysCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ids: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ids !== undefined && data.ids !== null) {
    contents.ids = deserializeAws_restJson1ListOfString(data.ids, context);
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ImportApiKeysCommand = deserializeAws_restJson1ImportApiKeysCommand;
const deserializeAws_restJson1ImportApiKeysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1ImportDocumentationPartsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportDocumentationPartsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ids: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.ids !== undefined && data.ids !== null) {
    contents.ids = deserializeAws_restJson1ListOfString(data.ids, context);
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ImportDocumentationPartsCommand =
  deserializeAws_restJson1ImportDocumentationPartsCommand;
const deserializeAws_restJson1ImportDocumentationPartsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1ImportRestApiCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportRestApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeySource: undefined,
    binaryMediaTypes: undefined,
    createdDate: undefined,
    description: undefined,
    disableExecuteApiEndpoint: undefined,
    endpointConfiguration: undefined,
    id: undefined,
    minimumCompressionSize: undefined,
    name: undefined,
    policy: undefined,
    tags: undefined,
    version: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
    contents.apiKeySource = data.apiKeySource;
  }
  if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
    contents.minimumCompressionSize = data.minimumCompressionSize;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ImportRestApiCommand = deserializeAws_restJson1ImportRestApiCommand;
const deserializeAws_restJson1ImportRestApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1PutGatewayResponseCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutGatewayResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    defaultResponse: undefined,
    responseParameters: undefined,
    responseTemplates: undefined,
    responseType: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.defaultResponse !== undefined && data.defaultResponse !== null) {
    contents.defaultResponse = data.defaultResponse;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.responseType !== undefined && data.responseType !== null) {
    contents.responseType = data.responseType;
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutGatewayResponseCommand = deserializeAws_restJson1PutGatewayResponseCommand;
const deserializeAws_restJson1PutGatewayResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1PutIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    cacheKeyParameters: undefined,
    cacheNamespace: undefined,
    connectionId: undefined,
    connectionType: undefined,
    contentHandling: undefined,
    credentials: undefined,
    httpMethod: undefined,
    integrationResponses: undefined,
    passthroughBehavior: undefined,
    requestParameters: undefined,
    requestTemplates: undefined,
    timeoutInMillis: undefined,
    tlsConfig: undefined,
    type: undefined,
    uri: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.cacheKeyParameters !== undefined && data.cacheKeyParameters !== null) {
    contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
  }
  if (data.cacheNamespace !== undefined && data.cacheNamespace !== null) {
    contents.cacheNamespace = data.cacheNamespace;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.connectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.connectionType = data.connectionType;
  }
  if (data.contentHandling !== undefined && data.contentHandling !== null) {
    contents.contentHandling = data.contentHandling;
  }
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = data.credentials;
  }
  if (data.httpMethod !== undefined && data.httpMethod !== null) {
    contents.httpMethod = data.httpMethod;
  }
  if (data.integrationResponses !== undefined && data.integrationResponses !== null) {
    contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
      data.integrationResponses,
      context
    );
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.passthroughBehavior = data.passthroughBehavior;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.timeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  if (data.uri !== undefined && data.uri !== null) {
    contents.uri = data.uri;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutIntegrationCommand = deserializeAws_restJson1PutIntegrationCommand;
const deserializeAws_restJson1PutIntegrationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1PutIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    contentHandling: undefined,
    responseParameters: undefined,
    responseTemplates: undefined,
    selectionPattern: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentHandling !== undefined && data.contentHandling !== null) {
    contents.contentHandling = data.contentHandling;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.selectionPattern !== undefined && data.selectionPattern !== null) {
    contents.selectionPattern = data.selectionPattern;
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutIntegrationResponseCommand = deserializeAws_restJson1PutIntegrationResponseCommand;
const deserializeAws_restJson1PutIntegrationResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1PutMethodCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutMethodCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeyRequired: undefined,
    authorizationScopes: undefined,
    authorizationType: undefined,
    authorizerId: undefined,
    httpMethod: undefined,
    methodIntegration: undefined,
    methodResponses: undefined,
    operationName: undefined,
    requestModels: undefined,
    requestParameters: undefined,
    requestValidatorId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.apiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.authorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.authorizerId = data.authorizerId;
  }
  if (data.httpMethod !== undefined && data.httpMethod !== null) {
    contents.httpMethod = data.httpMethod;
  }
  if (data.methodIntegration !== undefined && data.methodIntegration !== null) {
    contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
  }
  if (data.methodResponses !== undefined && data.methodResponses !== null) {
    contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.operationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
  }
  if (data.requestValidatorId !== undefined && data.requestValidatorId !== null) {
    contents.requestValidatorId = data.requestValidatorId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutMethodCommand = deserializeAws_restJson1PutMethodCommand;
const deserializeAws_restJson1PutMethodCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1PutMethodResponseCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutMethodResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    responseModels: undefined,
    responseParameters: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(data.responseParameters, context);
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutMethodResponseCommand = deserializeAws_restJson1PutMethodResponseCommand;
const deserializeAws_restJson1PutMethodResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1PutRestApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutRestApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeySource: undefined,
    binaryMediaTypes: undefined,
    createdDate: undefined,
    description: undefined,
    disableExecuteApiEndpoint: undefined,
    endpointConfiguration: undefined,
    id: undefined,
    minimumCompressionSize: undefined,
    name: undefined,
    policy: undefined,
    tags: undefined,
    version: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
    contents.apiKeySource = data.apiKeySource;
  }
  if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
    contents.minimumCompressionSize = data.minimumCompressionSize;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutRestApiCommand = deserializeAws_restJson1PutRestApiCommand;
const deserializeAws_restJson1PutRestApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1TestInvokeAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestInvokeAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    authorization: undefined,
    claims: undefined,
    clientStatus: undefined,
    latency: undefined,
    log: undefined,
    policy: undefined,
    principalId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.authorization = deserializeAws_restJson1MapOfStringToList(data.authorization, context);
  }
  if (data.claims !== undefined && data.claims !== null) {
    contents.claims = deserializeAws_restJson1MapOfStringToString(data.claims, context);
  }
  if (data.clientStatus !== undefined && data.clientStatus !== null) {
    contents.clientStatus = data.clientStatus;
  }
  if (data.latency !== undefined && data.latency !== null) {
    contents.latency = data.latency;
  }
  if (data.log !== undefined && data.log !== null) {
    contents.log = data.log;
  }
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.principalId !== undefined && data.principalId !== null) {
    contents.principalId = data.principalId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TestInvokeAuthorizerCommand = deserializeAws_restJson1TestInvokeAuthorizerCommand;
const deserializeAws_restJson1TestInvokeAuthorizerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1TestInvokeMethodCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestInvokeMethodCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    body: undefined,
    headers: undefined,
    latency: undefined,
    log: undefined,
    multiValueHeaders: undefined,
    status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.body !== undefined && data.body !== null) {
    contents.body = data.body;
  }
  if (data.headers !== undefined && data.headers !== null) {
    contents.headers = deserializeAws_restJson1MapOfStringToString(data.headers, context);
  }
  if (data.latency !== undefined && data.latency !== null) {
    contents.latency = data.latency;
  }
  if (data.log !== undefined && data.log !== null) {
    contents.log = data.log;
  }
  if (data.multiValueHeaders !== undefined && data.multiValueHeaders !== null) {
    contents.multiValueHeaders = deserializeAws_restJson1MapOfStringToList(data.multiValueHeaders, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TestInvokeMethodCommand = deserializeAws_restJson1TestInvokeMethodCommand;
const deserializeAws_restJson1TestInvokeMethodCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateAccountCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccountCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeyVersion: undefined,
    cloudwatchRoleArn: undefined,
    features: undefined,
    throttleSettings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeyVersion !== undefined && data.apiKeyVersion !== null) {
    contents.apiKeyVersion = data.apiKeyVersion;
  }
  if (data.cloudwatchRoleArn !== undefined && data.cloudwatchRoleArn !== null) {
    contents.cloudwatchRoleArn = data.cloudwatchRoleArn;
  }
  if (data.features !== undefined && data.features !== null) {
    contents.features = deserializeAws_restJson1ListOfString(data.features, context);
  }
  if (data.throttleSettings !== undefined && data.throttleSettings !== null) {
    contents.throttleSettings = deserializeAws_restJson1ThrottleSettings(data.throttleSettings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAccountCommand = deserializeAws_restJson1UpdateAccountCommand;
const deserializeAws_restJson1UpdateAccountCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
    createdDate: undefined,
    customerId: undefined,
    description: undefined,
    enabled: undefined,
    id: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    stageKeys: undefined,
    tags: undefined,
    value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.customerId !== undefined && data.customerId !== null) {
    contents.customerId = data.customerId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.enabled !== undefined && data.enabled !== null) {
    contents.enabled = data.enabled;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.stageKeys !== undefined && data.stageKeys !== null) {
    contents.stageKeys = deserializeAws_restJson1ListOfString(data.stageKeys, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.value !== undefined && data.value !== null) {
    contents.value = data.value;
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
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    authType: undefined,
    authorizerCredentials: undefined,
    authorizerResultTtlInSeconds: undefined,
    authorizerUri: undefined,
    id: undefined,
    identitySource: undefined,
    identityValidationExpression: undefined,
    name: undefined,
    providerARNs: undefined,
    type: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authType !== undefined && data.authType !== null) {
    contents.authType = data.authType;
  }
  if (data.authorizerCredentials !== undefined && data.authorizerCredentials !== null) {
    contents.authorizerCredentials = data.authorizerCredentials;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.authorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.authorizerUri = data.authorizerUri;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.identitySource = data.identitySource;
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.identityValidationExpression = data.identityValidationExpression;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.providerARNs !== undefined && data.providerARNs !== null) {
    contents.providerARNs = deserializeAws_restJson1ListOfARNs(data.providerARNs, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateBasePathMappingCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBasePathMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    basePath: undefined,
    restApiId: undefined,
    stage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.basePath !== undefined && data.basePath !== null) {
    contents.basePath = data.basePath;
  }
  if (data.restApiId !== undefined && data.restApiId !== null) {
    contents.restApiId = data.restApiId;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.stage = data.stage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBasePathMappingCommand = deserializeAws_restJson1UpdateBasePathMappingCommand;
const deserializeAws_restJson1UpdateBasePathMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateClientCertificateCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClientCertificateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    clientCertificateId: undefined,
    createdDate: undefined,
    description: undefined,
    expirationDate: undefined,
    pemEncodedCertificate: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.clientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.expirationDate !== undefined && data.expirationDate !== null) {
    contents.expirationDate = new Date(Math.round(data.expirationDate * 1000));
  }
  if (data.pemEncodedCertificate !== undefined && data.pemEncodedCertificate !== null) {
    contents.pemEncodedCertificate = data.pemEncodedCertificate;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateClientCertificateCommand = deserializeAws_restJson1UpdateClientCertificateCommand;
const deserializeAws_restJson1UpdateClientCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiSummary: undefined,
    createdDate: undefined,
    description: undefined,
    id: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiSummary !== undefined && data.apiSummary !== null) {
    contents.apiSummary = deserializeAws_restJson1PathToMapOfMethodSnapshot(data.apiSummary, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.apigateway#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDocumentationPartCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDocumentationPartCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    location: undefined,
    properties: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.location !== undefined && data.location !== null) {
    contents.location = deserializeAws_restJson1DocumentationPartLocation(data.location, context);
  }
  if (data.properties !== undefined && data.properties !== null) {
    contents.properties = data.properties;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDocumentationPartCommand = deserializeAws_restJson1UpdateDocumentationPartCommand;
const deserializeAws_restJson1UpdateDocumentationPartCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDocumentationVersionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDocumentationVersionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    description: undefined,
    version: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDocumentationVersionCommand =
  deserializeAws_restJson1UpdateDocumentationVersionCommand;
const deserializeAws_restJson1UpdateDocumentationVersionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    certificateArn: undefined,
    certificateName: undefined,
    certificateUploadDate: undefined,
    distributionDomainName: undefined,
    distributionHostedZoneId: undefined,
    domainName: undefined,
    domainNameStatus: undefined,
    domainNameStatusMessage: undefined,
    endpointConfiguration: undefined,
    mutualTlsAuthentication: undefined,
    regionalCertificateArn: undefined,
    regionalCertificateName: undefined,
    regionalDomainName: undefined,
    regionalHostedZoneId: undefined,
    securityPolicy: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.certificateArn !== undefined && data.certificateArn !== null) {
    contents.certificateArn = data.certificateArn;
  }
  if (data.certificateName !== undefined && data.certificateName !== null) {
    contents.certificateName = data.certificateName;
  }
  if (data.certificateUploadDate !== undefined && data.certificateUploadDate !== null) {
    contents.certificateUploadDate = new Date(Math.round(data.certificateUploadDate * 1000));
  }
  if (data.distributionDomainName !== undefined && data.distributionDomainName !== null) {
    contents.distributionDomainName = data.distributionDomainName;
  }
  if (data.distributionHostedZoneId !== undefined && data.distributionHostedZoneId !== null) {
    contents.distributionHostedZoneId = data.distributionHostedZoneId;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.domainName = data.domainName;
  }
  if (data.domainNameStatus !== undefined && data.domainNameStatus !== null) {
    contents.domainNameStatus = data.domainNameStatus;
  }
  if (data.domainNameStatusMessage !== undefined && data.domainNameStatusMessage !== null) {
    contents.domainNameStatusMessage = data.domainNameStatusMessage;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.mutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.regionalCertificateArn !== undefined && data.regionalCertificateArn !== null) {
    contents.regionalCertificateArn = data.regionalCertificateArn;
  }
  if (data.regionalCertificateName !== undefined && data.regionalCertificateName !== null) {
    contents.regionalCertificateName = data.regionalCertificateName;
  }
  if (data.regionalDomainName !== undefined && data.regionalDomainName !== null) {
    contents.regionalDomainName = data.regionalDomainName;
  }
  if (data.regionalHostedZoneId !== undefined && data.regionalHostedZoneId !== null) {
    contents.regionalHostedZoneId = data.regionalHostedZoneId;
  }
  if (data.securityPolicy !== undefined && data.securityPolicy !== null) {
    contents.securityPolicy = data.securityPolicy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateGatewayResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    defaultResponse: undefined,
    responseParameters: undefined,
    responseTemplates: undefined,
    responseType: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.defaultResponse !== undefined && data.defaultResponse !== null) {
    contents.defaultResponse = data.defaultResponse;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.responseType !== undefined && data.responseType !== null) {
    contents.responseType = data.responseType;
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGatewayResponseCommand = deserializeAws_restJson1UpdateGatewayResponseCommand;
const deserializeAws_restJson1UpdateGatewayResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    cacheKeyParameters: undefined,
    cacheNamespace: undefined,
    connectionId: undefined,
    connectionType: undefined,
    contentHandling: undefined,
    credentials: undefined,
    httpMethod: undefined,
    integrationResponses: undefined,
    passthroughBehavior: undefined,
    requestParameters: undefined,
    requestTemplates: undefined,
    timeoutInMillis: undefined,
    tlsConfig: undefined,
    type: undefined,
    uri: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.cacheKeyParameters !== undefined && data.cacheKeyParameters !== null) {
    contents.cacheKeyParameters = deserializeAws_restJson1ListOfString(data.cacheKeyParameters, context);
  }
  if (data.cacheNamespace !== undefined && data.cacheNamespace !== null) {
    contents.cacheNamespace = data.cacheNamespace;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.connectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.connectionType = data.connectionType;
  }
  if (data.contentHandling !== undefined && data.contentHandling !== null) {
    contents.contentHandling = data.contentHandling;
  }
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = data.credentials;
  }
  if (data.httpMethod !== undefined && data.httpMethod !== null) {
    contents.httpMethod = data.httpMethod;
  }
  if (data.integrationResponses !== undefined && data.integrationResponses !== null) {
    contents.integrationResponses = deserializeAws_restJson1MapOfIntegrationResponse(
      data.integrationResponses,
      context
    );
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.passthroughBehavior = data.passthroughBehavior;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToString(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.requestTemplates = deserializeAws_restJson1MapOfStringToString(data.requestTemplates, context);
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.timeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.tlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  if (data.uri !== undefined && data.uri !== null) {
    contents.uri = data.uri;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    contentHandling: undefined,
    responseParameters: undefined,
    responseTemplates: undefined,
    selectionPattern: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentHandling !== undefined && data.contentHandling !== null) {
    contents.contentHandling = data.contentHandling;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToString(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.responseTemplates = deserializeAws_restJson1MapOfStringToString(data.responseTemplates, context);
  }
  if (data.selectionPattern !== undefined && data.selectionPattern !== null) {
    contents.selectionPattern = data.selectionPattern;
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateMethodCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMethodCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeyRequired: undefined,
    authorizationScopes: undefined,
    authorizationType: undefined,
    authorizerId: undefined,
    httpMethod: undefined,
    methodIntegration: undefined,
    methodResponses: undefined,
    operationName: undefined,
    requestModels: undefined,
    requestParameters: undefined,
    requestValidatorId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.apiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.authorizationScopes = deserializeAws_restJson1ListOfString(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.authorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.authorizerId = data.authorizerId;
  }
  if (data.httpMethod !== undefined && data.httpMethod !== null) {
    contents.httpMethod = data.httpMethod;
  }
  if (data.methodIntegration !== undefined && data.methodIntegration !== null) {
    contents.methodIntegration = deserializeAws_restJson1Integration(data.methodIntegration, context);
  }
  if (data.methodResponses !== undefined && data.methodResponses !== null) {
    contents.methodResponses = deserializeAws_restJson1MapOfMethodResponse(data.methodResponses, context);
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.operationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.requestModels = deserializeAws_restJson1MapOfStringToString(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.requestParameters = deserializeAws_restJson1MapOfStringToBoolean(data.requestParameters, context);
  }
  if (data.requestValidatorId !== undefined && data.requestValidatorId !== null) {
    contents.requestValidatorId = data.requestValidatorId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMethodCommand = deserializeAws_restJson1UpdateMethodCommand;
const deserializeAws_restJson1UpdateMethodCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateMethodResponseCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMethodResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    responseModels: undefined,
    responseParameters: undefined,
    statusCode: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.responseModels = deserializeAws_restJson1MapOfStringToString(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.responseParameters = deserializeAws_restJson1MapOfStringToBoolean(data.responseParameters, context);
  }
  if (data.statusCode !== undefined && data.statusCode !== null) {
    contents.statusCode = data.statusCode;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMethodResponseCommand = deserializeAws_restJson1UpdateMethodResponseCommand;
const deserializeAws_restJson1UpdateMethodResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigateway#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateModelCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    contentType: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    schema: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.contentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.schema = data.schema;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateRequestValidatorCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRequestValidatorCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    name: undefined,
    validateRequestBody: undefined,
    validateRequestParameters: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.validateRequestBody !== undefined && data.validateRequestBody !== null) {
    contents.validateRequestBody = data.validateRequestBody;
  }
  if (data.validateRequestParameters !== undefined && data.validateRequestParameters !== null) {
    contents.validateRequestParameters = data.validateRequestParameters;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRequestValidatorCommand = deserializeAws_restJson1UpdateRequestValidatorCommand;
const deserializeAws_restJson1UpdateRequestValidatorCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateResourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    parentId: undefined,
    path: undefined,
    pathPart: undefined,
    resourceMethods: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.parentId !== undefined && data.parentId !== null) {
    contents.parentId = data.parentId;
  }
  if (data.path !== undefined && data.path !== null) {
    contents.path = data.path;
  }
  if (data.pathPart !== undefined && data.pathPart !== null) {
    contents.pathPart = data.pathPart;
  }
  if (data.resourceMethods !== undefined && data.resourceMethods !== null) {
    contents.resourceMethods = deserializeAws_restJson1MapOfMethod(data.resourceMethods, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResourceCommand = deserializeAws_restJson1UpdateResourceCommand;
const deserializeAws_restJson1UpdateResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateRestApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRestApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeySource: undefined,
    binaryMediaTypes: undefined,
    createdDate: undefined,
    description: undefined,
    disableExecuteApiEndpoint: undefined,
    endpointConfiguration: undefined,
    id: undefined,
    minimumCompressionSize: undefined,
    name: undefined,
    policy: undefined,
    tags: undefined,
    version: undefined,
    warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeySource !== undefined && data.apiKeySource !== null) {
    contents.apiKeySource = data.apiKeySource;
  }
  if (data.binaryMediaTypes !== undefined && data.binaryMediaTypes !== null) {
    contents.binaryMediaTypes = deserializeAws_restJson1ListOfString(data.binaryMediaTypes, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.disableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.endpointConfiguration !== undefined && data.endpointConfiguration !== null) {
    contents.endpointConfiguration = deserializeAws_restJson1EndpointConfiguration(data.endpointConfiguration, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.minimumCompressionSize !== undefined && data.minimumCompressionSize !== null) {
    contents.minimumCompressionSize = data.minimumCompressionSize;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.warnings = deserializeAws_restJson1ListOfString(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRestApiCommand = deserializeAws_restJson1UpdateRestApiCommand;
const deserializeAws_restJson1UpdateRestApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateStageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    accessLogSettings: undefined,
    cacheClusterEnabled: undefined,
    cacheClusterSize: undefined,
    cacheClusterStatus: undefined,
    canarySettings: undefined,
    clientCertificateId: undefined,
    createdDate: undefined,
    deploymentId: undefined,
    description: undefined,
    documentationVersion: undefined,
    lastUpdatedDate: undefined,
    methodSettings: undefined,
    stageName: undefined,
    tags: undefined,
    tracingEnabled: undefined,
    variables: undefined,
    webAclArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.accessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.cacheClusterEnabled !== undefined && data.cacheClusterEnabled !== null) {
    contents.cacheClusterEnabled = data.cacheClusterEnabled;
  }
  if (data.cacheClusterSize !== undefined && data.cacheClusterSize !== null) {
    contents.cacheClusterSize = data.cacheClusterSize;
  }
  if (data.cacheClusterStatus !== undefined && data.cacheClusterStatus !== null) {
    contents.cacheClusterStatus = data.cacheClusterStatus;
  }
  if (data.canarySettings !== undefined && data.canarySettings !== null) {
    contents.canarySettings = deserializeAws_restJson1CanarySettings(data.canarySettings, context);
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.clientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.documentationVersion !== undefined && data.documentationVersion !== null) {
    contents.documentationVersion = data.documentationVersion;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.methodSettings !== undefined && data.methodSettings !== null) {
    contents.methodSettings = deserializeAws_restJson1MapOfMethodSettings(data.methodSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.stageName = data.stageName;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.tracingEnabled !== undefined && data.tracingEnabled !== null) {
    contents.tracingEnabled = data.tracingEnabled;
  }
  if (data.variables !== undefined && data.variables !== null) {
    contents.variables = deserializeAws_restJson1MapOfStringToString(data.variables, context);
  }
  if (data.webAclArn !== undefined && data.webAclArn !== null) {
    contents.webAclArn = data.webAclArn;
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateUsageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUsageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    endDate: undefined,
    items: undefined,
    position: undefined,
    startDate: undefined,
    usagePlanId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.endDate !== undefined && data.endDate !== null) {
    contents.endDate = data.endDate;
  }
  if (data.values !== undefined && data.values !== null) {
    contents.items = deserializeAws_restJson1MapOfKeyUsages(data.values, context);
  }
  if (data.position !== undefined && data.position !== null) {
    contents.position = data.position;
  }
  if (data.startDate !== undefined && data.startDate !== null) {
    contents.startDate = data.startDate;
  }
  if (data.usagePlanId !== undefined && data.usagePlanId !== null) {
    contents.usagePlanId = data.usagePlanId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUsageCommand = deserializeAws_restJson1UpdateUsageCommand;
const deserializeAws_restJson1UpdateUsageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateUsagePlanCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUsagePlanCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiStages: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    productCode: undefined,
    quota: undefined,
    tags: undefined,
    throttle: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiStages !== undefined && data.apiStages !== null) {
    contents.apiStages = deserializeAws_restJson1ListOfApiStage(data.apiStages, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.productCode !== undefined && data.productCode !== null) {
    contents.productCode = data.productCode;
  }
  if (data.quota !== undefined && data.quota !== null) {
    contents.quota = deserializeAws_restJson1QuotaSettings(data.quota, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.throttle !== undefined && data.throttle !== null) {
    contents.throttle = deserializeAws_restJson1ThrottleSettings(data.throttle, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUsagePlanCommand = deserializeAws_restJson1UpdateUsagePlanCommand;
const deserializeAws_restJson1UpdateUsagePlanCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1UpdateVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    description: undefined,
    id: undefined,
    name: undefined,
    status: undefined,
    statusMessage: undefined,
    tags: undefined,
    targetArns: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = data.id;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.statusMessage !== undefined && data.statusMessage !== null) {
    contents.statusMessage = data.statusMessage;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1MapOfStringToString(data.tags, context);
  }
  if (data.targetArns !== undefined && data.targetArns !== null) {
    contents.targetArns = deserializeAws_restJson1ListOfString(data.targetArns, context);
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
    case "com.amazonaws.apigateway#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigateway#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigateway#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigateway#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.apigateway#UnauthorizedException":
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ConflictException",
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
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
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
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
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
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
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
const serializeAws_restJson1ApiStage = (input, context) => {
  return {
    ...(input.apiId !== undefined && input.apiId !== null && { apiId: input.apiId }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
    ...(input.throttle !== undefined &&
      input.throttle !== null && {
        throttle: serializeAws_restJson1MapOfApiStageThrottleSettings(input.throttle, context),
      }),
  };
};
const serializeAws_restJson1CanarySettings = (input, context) => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.percentTraffic !== undefined &&
      input.percentTraffic !== null && { percentTraffic: input.percentTraffic }),
    ...(input.stageVariableOverrides !== undefined &&
      input.stageVariableOverrides !== null && {
        stageVariableOverrides: serializeAws_restJson1MapOfStringToString(input.stageVariableOverrides, context),
      }),
    ...(input.useStageCache !== undefined && input.useStageCache !== null && { useStageCache: input.useStageCache }),
  };
};
const serializeAws_restJson1DeploymentCanarySettings = (input, context) => {
  return {
    ...(input.percentTraffic !== undefined &&
      input.percentTraffic !== null && { percentTraffic: input.percentTraffic }),
    ...(input.stageVariableOverrides !== undefined &&
      input.stageVariableOverrides !== null && {
        stageVariableOverrides: serializeAws_restJson1MapOfStringToString(input.stageVariableOverrides, context),
      }),
    ...(input.useStageCache !== undefined && input.useStageCache !== null && { useStageCache: input.useStageCache }),
  };
};
const serializeAws_restJson1DocumentationPartLocation = (input, context) => {
  return {
    ...(input.method !== undefined && input.method !== null && { method: input.method }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.statusCode !== undefined && input.statusCode !== null && { statusCode: input.statusCode }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};
const serializeAws_restJson1EndpointConfiguration = (input, context) => {
  return {
    ...(input.types !== undefined &&
      input.types !== null && { types: serializeAws_restJson1ListOfEndpointType(input.types, context) }),
    ...(input.vpcEndpointIds !== undefined &&
      input.vpcEndpointIds !== null && {
        vpcEndpointIds: serializeAws_restJson1ListOfString(input.vpcEndpointIds, context),
      }),
  };
};
const serializeAws_restJson1ListOfApiStage = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1ApiStage(entry, context);
    });
};
const serializeAws_restJson1ListOfARNs = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ListOfEndpointType = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ListOfPatchOperation = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1PatchOperation(entry, context);
    });
};
const serializeAws_restJson1ListOfStageKeys = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1StageKey(entry, context);
    });
};
const serializeAws_restJson1ListOfString = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1MapOfApiStageThrottleSettings = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ThrottleSettings(value, context),
    };
  }, {});
};
const serializeAws_restJson1MapOfStringToBoolean = (input, context) => {
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
const serializeAws_restJson1MapOfStringToList = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ListOfString(value, context),
    };
  }, {});
};
const serializeAws_restJson1MapOfStringToString = (input, context) => {
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
const serializeAws_restJson1MutualTlsAuthenticationInput = (input, context) => {
  return {
    ...(input.truststoreUri !== undefined && input.truststoreUri !== null && { truststoreUri: input.truststoreUri }),
    ...(input.truststoreVersion !== undefined &&
      input.truststoreVersion !== null && { truststoreVersion: input.truststoreVersion }),
  };
};
const serializeAws_restJson1PatchOperation = (input, context) => {
  return {
    ...(input.from !== undefined && input.from !== null && { from: input.from }),
    ...(input.op !== undefined && input.op !== null && { op: input.op }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};
const serializeAws_restJson1QuotaSettings = (input, context) => {
  return {
    ...(input.limit !== undefined && input.limit !== null && { limit: input.limit }),
    ...(input.offset !== undefined && input.offset !== null && { offset: input.offset }),
    ...(input.period !== undefined && input.period !== null && { period: input.period }),
  };
};
const serializeAws_restJson1StageKey = (input, context) => {
  return {
    ...(input.restApiId !== undefined && input.restApiId !== null && { restApiId: input.restApiId }),
    ...(input.stageName !== undefined && input.stageName !== null && { stageName: input.stageName }),
  };
};
const serializeAws_restJson1ThrottleSettings = (input, context) => {
  return {
    ...(input.burstLimit !== undefined && input.burstLimit !== null && { burstLimit: input.burstLimit }),
    ...(input.rateLimit !== undefined && input.rateLimit !== null && { rateLimit: input.rateLimit }),
  };
};
const serializeAws_restJson1TlsConfig = (input, context) => {
  return {
    ...(input.insecureSkipVerification !== undefined &&
      input.insecureSkipVerification !== null && { insecureSkipVerification: input.insecureSkipVerification }),
  };
};
const deserializeAws_restJson1AccessLogSettings = (output, context) => {
  return {
    destinationArn:
      output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
  };
};
const deserializeAws_restJson1ApiKey = (output, context) => {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    customerId: output.customerId !== undefined && output.customerId !== null ? output.customerId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    stageKeys:
      output.stageKeys !== undefined && output.stageKeys !== null
        ? deserializeAws_restJson1ListOfString(output.stageKeys, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1ApiStage = (output, context) => {
  return {
    apiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
    throttle:
      output.throttle !== undefined && output.throttle !== null
        ? deserializeAws_restJson1MapOfApiStageThrottleSettings(output.throttle, context)
        : undefined,
  };
};
const deserializeAws_restJson1Authorizer = (output, context) => {
  return {
    authType: output.authType !== undefined && output.authType !== null ? output.authType : undefined,
    authorizerCredentials:
      output.authorizerCredentials !== undefined && output.authorizerCredentials !== null
        ? output.authorizerCredentials
        : undefined,
    authorizerResultTtlInSeconds:
      output.authorizerResultTtlInSeconds !== undefined && output.authorizerResultTtlInSeconds !== null
        ? output.authorizerResultTtlInSeconds
        : undefined,
    authorizerUri:
      output.authorizerUri !== undefined && output.authorizerUri !== null ? output.authorizerUri : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    identitySource:
      output.identitySource !== undefined && output.identitySource !== null ? output.identitySource : undefined,
    identityValidationExpression:
      output.identityValidationExpression !== undefined && output.identityValidationExpression !== null
        ? output.identityValidationExpression
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    providerARNs:
      output.providerARNs !== undefined && output.providerARNs !== null
        ? deserializeAws_restJson1ListOfARNs(output.providerARNs, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1BasePathMapping = (output, context) => {
  return {
    basePath: output.basePath !== undefined && output.basePath !== null ? output.basePath : undefined,
    restApiId: output.restApiId !== undefined && output.restApiId !== null ? output.restApiId : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  };
};
const deserializeAws_restJson1CanarySettings = (output, context) => {
  return {
    deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    percentTraffic:
      output.percentTraffic !== undefined && output.percentTraffic !== null ? output.percentTraffic : undefined,
    stageVariableOverrides:
      output.stageVariableOverrides !== undefined && output.stageVariableOverrides !== null
        ? deserializeAws_restJson1MapOfStringToString(output.stageVariableOverrides, context)
        : undefined,
    useStageCache:
      output.useStageCache !== undefined && output.useStageCache !== null ? output.useStageCache : undefined,
  };
};
const deserializeAws_restJson1ClientCertificate = (output, context) => {
  return {
    clientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    expirationDate:
      output.expirationDate !== undefined && output.expirationDate !== null
        ? new Date(Math.round(output.expirationDate * 1000))
        : undefined,
    pemEncodedCertificate:
      output.pemEncodedCertificate !== undefined && output.pemEncodedCertificate !== null
        ? output.pemEncodedCertificate
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1Deployment = (output, context) => {
  return {
    apiSummary:
      output.apiSummary !== undefined && output.apiSummary !== null
        ? deserializeAws_restJson1PathToMapOfMethodSnapshot(output.apiSummary, context)
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
  };
};
const deserializeAws_restJson1DocumentationPart = (output, context) => {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_restJson1DocumentationPartLocation(output.location, context)
        : undefined,
    properties: output.properties !== undefined && output.properties !== null ? output.properties : undefined,
  };
};
const deserializeAws_restJson1DocumentationPartLocation = (output, context) => {
  return {
    method: output.method !== undefined && output.method !== null ? output.method : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1DocumentationVersion = (output, context) => {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
const deserializeAws_restJson1DomainName = (output, context) => {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    certificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    certificateUploadDate:
      output.certificateUploadDate !== undefined && output.certificateUploadDate !== null
        ? new Date(Math.round(output.certificateUploadDate * 1000))
        : undefined,
    distributionDomainName:
      output.distributionDomainName !== undefined && output.distributionDomainName !== null
        ? output.distributionDomainName
        : undefined,
    distributionHostedZoneId:
      output.distributionHostedZoneId !== undefined && output.distributionHostedZoneId !== null
        ? output.distributionHostedZoneId
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainNameStatus:
      output.domainNameStatus !== undefined && output.domainNameStatus !== null ? output.domainNameStatus : undefined,
    domainNameStatusMessage:
      output.domainNameStatusMessage !== undefined && output.domainNameStatusMessage !== null
        ? output.domainNameStatusMessage
        : undefined,
    endpointConfiguration:
      output.endpointConfiguration !== undefined && output.endpointConfiguration !== null
        ? deserializeAws_restJson1EndpointConfiguration(output.endpointConfiguration, context)
        : undefined,
    mutualTlsAuthentication:
      output.mutualTlsAuthentication !== undefined && output.mutualTlsAuthentication !== null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    regionalCertificateArn:
      output.regionalCertificateArn !== undefined && output.regionalCertificateArn !== null
        ? output.regionalCertificateArn
        : undefined,
    regionalCertificateName:
      output.regionalCertificateName !== undefined && output.regionalCertificateName !== null
        ? output.regionalCertificateName
        : undefined,
    regionalDomainName:
      output.regionalDomainName !== undefined && output.regionalDomainName !== null
        ? output.regionalDomainName
        : undefined,
    regionalHostedZoneId:
      output.regionalHostedZoneId !== undefined && output.regionalHostedZoneId !== null
        ? output.regionalHostedZoneId
        : undefined,
    securityPolicy:
      output.securityPolicy !== undefined && output.securityPolicy !== null ? output.securityPolicy : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1EndpointConfiguration = (output, context) => {
  return {
    types:
      output.types !== undefined && output.types !== null
        ? deserializeAws_restJson1ListOfEndpointType(output.types, context)
        : undefined,
    vpcEndpointIds:
      output.vpcEndpointIds !== undefined && output.vpcEndpointIds !== null
        ? deserializeAws_restJson1ListOfString(output.vpcEndpointIds, context)
        : undefined,
  };
};
const deserializeAws_restJson1GatewayResponse = (output, context) => {
  return {
    defaultResponse:
      output.defaultResponse !== undefined && output.defaultResponse !== null ? output.defaultResponse : undefined,
    responseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseParameters, context)
        : undefined,
    responseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseTemplates, context)
        : undefined,
    responseType: output.responseType !== undefined && output.responseType !== null ? output.responseType : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
  };
};
const deserializeAws_restJson1Integration = (output, context) => {
  return {
    cacheKeyParameters:
      output.cacheKeyParameters !== undefined && output.cacheKeyParameters !== null
        ? deserializeAws_restJson1ListOfString(output.cacheKeyParameters, context)
        : undefined,
    cacheNamespace:
      output.cacheNamespace !== undefined && output.cacheNamespace !== null ? output.cacheNamespace : undefined,
    connectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    connectionType:
      output.connectionType !== undefined && output.connectionType !== null ? output.connectionType : undefined,
    contentHandling:
      output.contentHandling !== undefined && output.contentHandling !== null ? output.contentHandling : undefined,
    credentials: output.credentials !== undefined && output.credentials !== null ? output.credentials : undefined,
    httpMethod: output.httpMethod !== undefined && output.httpMethod !== null ? output.httpMethod : undefined,
    integrationResponses:
      output.integrationResponses !== undefined && output.integrationResponses !== null
        ? deserializeAws_restJson1MapOfIntegrationResponse(output.integrationResponses, context)
        : undefined,
    passthroughBehavior:
      output.passthroughBehavior !== undefined && output.passthroughBehavior !== null
        ? output.passthroughBehavior
        : undefined,
    requestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1MapOfStringToString(output.requestParameters, context)
        : undefined,
    requestTemplates:
      output.requestTemplates !== undefined && output.requestTemplates !== null
        ? deserializeAws_restJson1MapOfStringToString(output.requestTemplates, context)
        : undefined,
    timeoutInMillis:
      output.timeoutInMillis !== undefined && output.timeoutInMillis !== null ? output.timeoutInMillis : undefined,
    tlsConfig:
      output.tlsConfig !== undefined && output.tlsConfig !== null
        ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
  };
};
const deserializeAws_restJson1IntegrationResponse = (output, context) => {
  return {
    contentHandling:
      output.contentHandling !== undefined && output.contentHandling !== null ? output.contentHandling : undefined,
    responseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseParameters, context)
        : undefined,
    responseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseTemplates, context)
        : undefined,
    selectionPattern:
      output.selectionPattern !== undefined && output.selectionPattern !== null ? output.selectionPattern : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
  };
};
const deserializeAws_restJson1ListOfApiKey = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiKey(entry, context);
    });
};
const deserializeAws_restJson1ListOfApiStage = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiStage(entry, context);
    });
};
const deserializeAws_restJson1ListOfARNs = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfAuthorizer = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Authorizer(entry, context);
    });
};
const deserializeAws_restJson1ListOfBasePathMapping = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BasePathMapping(entry, context);
    });
};
const deserializeAws_restJson1ListOfClientCertificate = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ClientCertificate(entry, context);
    });
};
const deserializeAws_restJson1ListOfDeployment = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
};
const deserializeAws_restJson1ListOfDocumentationPart = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DocumentationPart(entry, context);
    });
};
const deserializeAws_restJson1ListOfDocumentationVersion = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DocumentationVersion(entry, context);
    });
};
const deserializeAws_restJson1ListOfDomainName = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainName(entry, context);
    });
};
const deserializeAws_restJson1ListOfEndpointType = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfGatewayResponse = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GatewayResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfLong = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfModel = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Model(entry, context);
    });
};
const deserializeAws_restJson1ListOfRequestValidator = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RequestValidator(entry, context);
    });
};
const deserializeAws_restJson1ListOfResource = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};
const deserializeAws_restJson1ListOfRestApi = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RestApi(entry, context);
    });
};
const deserializeAws_restJson1ListOfSdkConfigurationProperty = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SdkConfigurationProperty(entry, context);
    });
};
const deserializeAws_restJson1ListOfSdkType = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SdkType(entry, context);
    });
};
const deserializeAws_restJson1ListOfStage = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Stage(entry, context);
    });
};
const deserializeAws_restJson1ListOfString = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfUsage = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ListOfLong(entry, context);
    });
};
const deserializeAws_restJson1ListOfUsagePlan = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1UsagePlan(entry, context);
    });
};
const deserializeAws_restJson1ListOfUsagePlanKey = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1UsagePlanKey(entry, context);
    });
};
const deserializeAws_restJson1ListOfVpcLink = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VpcLink(entry, context);
    });
};
const deserializeAws_restJson1MapOfApiStageThrottleSettings = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ThrottleSettings(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfIntegrationResponse = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1IntegrationResponse(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfKeyUsages = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ListOfUsage(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfMethod = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Method(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfMethodResponse = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MethodResponse(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfMethodSettings = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MethodSetting(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfMethodSnapshot = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MethodSnapshot(value, context),
    };
  }, {});
};
const deserializeAws_restJson1MapOfStringToBoolean = (output, context) => {
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
const deserializeAws_restJson1MapOfStringToList = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ListOfString(value, context),
    };
  }, {});
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
const deserializeAws_restJson1Method = (output, context) => {
  return {
    apiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    authorizationScopes:
      output.authorizationScopes !== undefined && output.authorizationScopes !== null
        ? deserializeAws_restJson1ListOfString(output.authorizationScopes, context)
        : undefined,
    authorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
    authorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    httpMethod: output.httpMethod !== undefined && output.httpMethod !== null ? output.httpMethod : undefined,
    methodIntegration:
      output.methodIntegration !== undefined && output.methodIntegration !== null
        ? deserializeAws_restJson1Integration(output.methodIntegration, context)
        : undefined,
    methodResponses:
      output.methodResponses !== undefined && output.methodResponses !== null
        ? deserializeAws_restJson1MapOfMethodResponse(output.methodResponses, context)
        : undefined,
    operationName:
      output.operationName !== undefined && output.operationName !== null ? output.operationName : undefined,
    requestModels:
      output.requestModels !== undefined && output.requestModels !== null
        ? deserializeAws_restJson1MapOfStringToString(output.requestModels, context)
        : undefined,
    requestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1MapOfStringToBoolean(output.requestParameters, context)
        : undefined,
    requestValidatorId:
      output.requestValidatorId !== undefined && output.requestValidatorId !== null
        ? output.requestValidatorId
        : undefined,
  };
};
const deserializeAws_restJson1MethodResponse = (output, context) => {
  return {
    responseModels:
      output.responseModels !== undefined && output.responseModels !== null
        ? deserializeAws_restJson1MapOfStringToString(output.responseModels, context)
        : undefined,
    responseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1MapOfStringToBoolean(output.responseParameters, context)
        : undefined,
    statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
  };
};
const deserializeAws_restJson1MethodSetting = (output, context) => {
  return {
    cacheDataEncrypted:
      output.cacheDataEncrypted !== undefined && output.cacheDataEncrypted !== null
        ? output.cacheDataEncrypted
        : undefined,
    cacheTtlInSeconds:
      output.cacheTtlInSeconds !== undefined && output.cacheTtlInSeconds !== null
        ? output.cacheTtlInSeconds
        : undefined,
    cachingEnabled:
      output.cachingEnabled !== undefined && output.cachingEnabled !== null ? output.cachingEnabled : undefined,
    dataTraceEnabled:
      output.dataTraceEnabled !== undefined && output.dataTraceEnabled !== null ? output.dataTraceEnabled : undefined,
    loggingLevel: output.loggingLevel !== undefined && output.loggingLevel !== null ? output.loggingLevel : undefined,
    metricsEnabled:
      output.metricsEnabled !== undefined && output.metricsEnabled !== null ? output.metricsEnabled : undefined,
    requireAuthorizationForCacheControl:
      output.requireAuthorizationForCacheControl !== undefined && output.requireAuthorizationForCacheControl !== null
        ? output.requireAuthorizationForCacheControl
        : undefined,
    throttlingBurstLimit:
      output.throttlingBurstLimit !== undefined && output.throttlingBurstLimit !== null
        ? output.throttlingBurstLimit
        : undefined,
    throttlingRateLimit:
      output.throttlingRateLimit !== undefined && output.throttlingRateLimit !== null
        ? output.throttlingRateLimit
        : undefined,
    unauthorizedCacheControlHeaderStrategy:
      output.unauthorizedCacheControlHeaderStrategy !== undefined &&
      output.unauthorizedCacheControlHeaderStrategy !== null
        ? output.unauthorizedCacheControlHeaderStrategy
        : undefined,
  };
};
const deserializeAws_restJson1MethodSnapshot = (output, context) => {
  return {
    apiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    authorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
  };
};
const deserializeAws_restJson1Model = (output, context) => {
  return {
    contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
  };
};
const deserializeAws_restJson1MutualTlsAuthentication = (output, context) => {
  return {
    truststoreUri:
      output.truststoreUri !== undefined && output.truststoreUri !== null ? output.truststoreUri : undefined,
    truststoreVersion:
      output.truststoreVersion !== undefined && output.truststoreVersion !== null
        ? output.truststoreVersion
        : undefined,
    truststoreWarnings:
      output.truststoreWarnings !== undefined && output.truststoreWarnings !== null
        ? deserializeAws_restJson1ListOfString(output.truststoreWarnings, context)
        : undefined,
  };
};
const deserializeAws_restJson1PathToMapOfMethodSnapshot = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1MapOfMethodSnapshot(value, context),
    };
  }, {});
};
const deserializeAws_restJson1QuotaSettings = (output, context) => {
  return {
    limit: output.limit !== undefined && output.limit !== null ? output.limit : undefined,
    offset: output.offset !== undefined && output.offset !== null ? output.offset : undefined,
    period: output.period !== undefined && output.period !== null ? output.period : undefined,
  };
};
const deserializeAws_restJson1RequestValidator = (output, context) => {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    validateRequestBody:
      output.validateRequestBody !== undefined && output.validateRequestBody !== null
        ? output.validateRequestBody
        : undefined,
    validateRequestParameters:
      output.validateRequestParameters !== undefined && output.validateRequestParameters !== null
        ? output.validateRequestParameters
        : undefined,
  };
};
const deserializeAws_restJson1Resource = (output, context) => {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    parentId: output.parentId !== undefined && output.parentId !== null ? output.parentId : undefined,
    path: output.path !== undefined && output.path !== null ? output.path : undefined,
    pathPart: output.pathPart !== undefined && output.pathPart !== null ? output.pathPart : undefined,
    resourceMethods:
      output.resourceMethods !== undefined && output.resourceMethods !== null
        ? deserializeAws_restJson1MapOfMethod(output.resourceMethods, context)
        : undefined,
  };
};
const deserializeAws_restJson1RestApi = (output, context) => {
  return {
    apiKeySource: output.apiKeySource !== undefined && output.apiKeySource !== null ? output.apiKeySource : undefined,
    binaryMediaTypes:
      output.binaryMediaTypes !== undefined && output.binaryMediaTypes !== null
        ? deserializeAws_restJson1ListOfString(output.binaryMediaTypes, context)
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    disableExecuteApiEndpoint:
      output.disableExecuteApiEndpoint !== undefined && output.disableExecuteApiEndpoint !== null
        ? output.disableExecuteApiEndpoint
        : undefined,
    endpointConfiguration:
      output.endpointConfiguration !== undefined && output.endpointConfiguration !== null
        ? deserializeAws_restJson1EndpointConfiguration(output.endpointConfiguration, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    minimumCompressionSize:
      output.minimumCompressionSize !== undefined && output.minimumCompressionSize !== null
        ? output.minimumCompressionSize
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    policy: output.policy !== undefined && output.policy !== null ? output.policy : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
    warnings:
      output.warnings !== undefined && output.warnings !== null
        ? deserializeAws_restJson1ListOfString(output.warnings, context)
        : undefined,
  };
};
const deserializeAws_restJson1SdkConfigurationProperty = (output, context) => {
  return {
    defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    friendlyName: output.friendlyName !== undefined && output.friendlyName !== null ? output.friendlyName : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    required: output.required !== undefined && output.required !== null ? output.required : undefined,
  };
};
const deserializeAws_restJson1SdkType = (output, context) => {
  return {
    configurationProperties:
      output.configurationProperties !== undefined && output.configurationProperties !== null
        ? deserializeAws_restJson1ListOfSdkConfigurationProperty(output.configurationProperties, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    friendlyName: output.friendlyName !== undefined && output.friendlyName !== null ? output.friendlyName : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
  };
};
const deserializeAws_restJson1Stage = (output, context) => {
  return {
    accessLogSettings:
      output.accessLogSettings !== undefined && output.accessLogSettings !== null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    cacheClusterEnabled:
      output.cacheClusterEnabled !== undefined && output.cacheClusterEnabled !== null
        ? output.cacheClusterEnabled
        : undefined,
    cacheClusterSize:
      output.cacheClusterSize !== undefined && output.cacheClusterSize !== null ? output.cacheClusterSize : undefined,
    cacheClusterStatus:
      output.cacheClusterStatus !== undefined && output.cacheClusterStatus !== null
        ? output.cacheClusterStatus
        : undefined,
    canarySettings:
      output.canarySettings !== undefined && output.canarySettings !== null
        ? deserializeAws_restJson1CanarySettings(output.canarySettings, context)
        : undefined,
    clientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    documentationVersion:
      output.documentationVersion !== undefined && output.documentationVersion !== null
        ? output.documentationVersion
        : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    methodSettings:
      output.methodSettings !== undefined && output.methodSettings !== null
        ? deserializeAws_restJson1MapOfMethodSettings(output.methodSettings, context)
        : undefined,
    stageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    tracingEnabled:
      output.tracingEnabled !== undefined && output.tracingEnabled !== null ? output.tracingEnabled : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_restJson1MapOfStringToString(output.variables, context)
        : undefined,
    webAclArn: output.webAclArn !== undefined && output.webAclArn !== null ? output.webAclArn : undefined,
  };
};
const deserializeAws_restJson1ThrottleSettings = (output, context) => {
  return {
    burstLimit: output.burstLimit !== undefined && output.burstLimit !== null ? output.burstLimit : undefined,
    rateLimit: output.rateLimit !== undefined && output.rateLimit !== null ? output.rateLimit : undefined,
  };
};
const deserializeAws_restJson1TlsConfig = (output, context) => {
  return {
    insecureSkipVerification:
      output.insecureSkipVerification !== undefined && output.insecureSkipVerification !== null
        ? output.insecureSkipVerification
        : undefined,
  };
};
const deserializeAws_restJson1UsagePlan = (output, context) => {
  return {
    apiStages:
      output.apiStages !== undefined && output.apiStages !== null
        ? deserializeAws_restJson1ListOfApiStage(output.apiStages, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    productCode: output.productCode !== undefined && output.productCode !== null ? output.productCode : undefined,
    quota:
      output.quota !== undefined && output.quota !== null
        ? deserializeAws_restJson1QuotaSettings(output.quota, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    throttle:
      output.throttle !== undefined && output.throttle !== null
        ? deserializeAws_restJson1ThrottleSettings(output.throttle, context)
        : undefined,
  };
};
const deserializeAws_restJson1UsagePlanKey = (output, context) => {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
const deserializeAws_restJson1VpcLink = (output, context) => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOfStringToString(output.tags, context)
        : undefined,
    targetArns:
      output.targetArns !== undefined && output.targetArns !== null
        ? deserializeAws_restJson1ListOfString(output.targetArns, context)
        : undefined,
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
