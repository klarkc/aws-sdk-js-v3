"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1GenerateAccessLogsCommand =
  exports.deserializeAws_restJson1DeleteWebhookCommand =
  exports.deserializeAws_restJson1DeleteJobCommand =
  exports.deserializeAws_restJson1DeleteDomainAssociationCommand =
  exports.deserializeAws_restJson1DeleteBranchCommand =
  exports.deserializeAws_restJson1DeleteBackendEnvironmentCommand =
  exports.deserializeAws_restJson1DeleteAppCommand =
  exports.deserializeAws_restJson1CreateWebhookCommand =
  exports.deserializeAws_restJson1CreateDomainAssociationCommand =
  exports.deserializeAws_restJson1CreateDeploymentCommand =
  exports.deserializeAws_restJson1CreateBranchCommand =
  exports.deserializeAws_restJson1CreateBackendEnvironmentCommand =
  exports.deserializeAws_restJson1CreateAppCommand =
  exports.serializeAws_restJson1UpdateWebhookCommand =
  exports.serializeAws_restJson1UpdateDomainAssociationCommand =
  exports.serializeAws_restJson1UpdateBranchCommand =
  exports.serializeAws_restJson1UpdateAppCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1StopJobCommand =
  exports.serializeAws_restJson1StartJobCommand =
  exports.serializeAws_restJson1StartDeploymentCommand =
  exports.serializeAws_restJson1ListWebhooksCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListJobsCommand =
  exports.serializeAws_restJson1ListDomainAssociationsCommand =
  exports.serializeAws_restJson1ListBranchesCommand =
  exports.serializeAws_restJson1ListBackendEnvironmentsCommand =
  exports.serializeAws_restJson1ListArtifactsCommand =
  exports.serializeAws_restJson1ListAppsCommand =
  exports.serializeAws_restJson1GetWebhookCommand =
  exports.serializeAws_restJson1GetJobCommand =
  exports.serializeAws_restJson1GetDomainAssociationCommand =
  exports.serializeAws_restJson1GetBranchCommand =
  exports.serializeAws_restJson1GetBackendEnvironmentCommand =
  exports.serializeAws_restJson1GetArtifactUrlCommand =
  exports.serializeAws_restJson1GetAppCommand =
  exports.serializeAws_restJson1GenerateAccessLogsCommand =
  exports.serializeAws_restJson1DeleteWebhookCommand =
  exports.serializeAws_restJson1DeleteJobCommand =
  exports.serializeAws_restJson1DeleteDomainAssociationCommand =
  exports.serializeAws_restJson1DeleteBranchCommand =
  exports.serializeAws_restJson1DeleteBackendEnvironmentCommand =
  exports.serializeAws_restJson1DeleteAppCommand =
  exports.serializeAws_restJson1CreateWebhookCommand =
  exports.serializeAws_restJson1CreateDomainAssociationCommand =
  exports.serializeAws_restJson1CreateDeploymentCommand =
  exports.serializeAws_restJson1CreateBranchCommand =
  exports.serializeAws_restJson1CreateBackendEnvironmentCommand =
  exports.serializeAws_restJson1CreateAppCommand =
    void 0;
exports.deserializeAws_restJson1UpdateWebhookCommand =
  exports.deserializeAws_restJson1UpdateDomainAssociationCommand =
  exports.deserializeAws_restJson1UpdateBranchCommand =
  exports.deserializeAws_restJson1UpdateAppCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1StopJobCommand =
  exports.deserializeAws_restJson1StartJobCommand =
  exports.deserializeAws_restJson1StartDeploymentCommand =
  exports.deserializeAws_restJson1ListWebhooksCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListJobsCommand =
  exports.deserializeAws_restJson1ListDomainAssociationsCommand =
  exports.deserializeAws_restJson1ListBranchesCommand =
  exports.deserializeAws_restJson1ListBackendEnvironmentsCommand =
  exports.deserializeAws_restJson1ListArtifactsCommand =
  exports.deserializeAws_restJson1ListAppsCommand =
  exports.deserializeAws_restJson1GetWebhookCommand =
  exports.deserializeAws_restJson1GetJobCommand =
  exports.deserializeAws_restJson1GetDomainAssociationCommand =
  exports.deserializeAws_restJson1GetBranchCommand =
  exports.deserializeAws_restJson1GetBackendEnvironmentCommand =
  exports.deserializeAws_restJson1GetArtifactUrlCommand =
  exports.deserializeAws_restJson1GetAppCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateAppCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps";
  let body;
  body = JSON.stringify({
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.autoBranchCreationConfig !== undefined &&
      input.autoBranchCreationConfig !== null && {
        autoBranchCreationConfig: serializeAws_restJson1AutoBranchCreationConfig(
          input.autoBranchCreationConfig,
          context
        ),
      }),
    ...(input.autoBranchCreationPatterns !== undefined &&
      input.autoBranchCreationPatterns !== null && {
        autoBranchCreationPatterns: serializeAws_restJson1AutoBranchCreationPatterns(
          input.autoBranchCreationPatterns,
          context
        ),
      }),
    ...(input.basicAuthCredentials !== undefined &&
      input.basicAuthCredentials !== null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec !== undefined && input.buildSpec !== null && { buildSpec: input.buildSpec }),
    ...(input.customHeaders !== undefined && input.customHeaders !== null && { customHeaders: input.customHeaders }),
    ...(input.customRules !== undefined &&
      input.customRules !== null && { customRules: serializeAws_restJson1CustomRules(input.customRules, context) }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.enableAutoBranchCreation !== undefined &&
      input.enableAutoBranchCreation !== null && { enableAutoBranchCreation: input.enableAutoBranchCreation }),
    ...(input.enableBasicAuth !== undefined &&
      input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableBranchAutoBuild !== undefined &&
      input.enableBranchAutoBuild !== null && { enableBranchAutoBuild: input.enableBranchAutoBuild }),
    ...(input.enableBranchAutoDeletion !== undefined &&
      input.enableBranchAutoDeletion !== null && { enableBranchAutoDeletion: input.enableBranchAutoDeletion }),
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariables(input.environmentVariables, context),
      }),
    ...(input.iamServiceRoleArn !== undefined &&
      input.iamServiceRoleArn !== null && { iamServiceRoleArn: input.iamServiceRoleArn }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.oauthToken !== undefined && input.oauthToken !== null && { oauthToken: input.oauthToken }),
    ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
    ...(input.repository !== undefined && input.repository !== null && { repository: input.repository }),
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
exports.serializeAws_restJson1CreateAppCommand = serializeAws_restJson1CreateAppCommand;
const serializeAws_restJson1CreateBackendEnvironmentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/backendenvironments";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.deploymentArtifacts !== undefined &&
      input.deploymentArtifacts !== null && { deploymentArtifacts: input.deploymentArtifacts }),
    ...(input.environmentName !== undefined &&
      input.environmentName !== null && { environmentName: input.environmentName }),
    ...(input.stackName !== undefined && input.stackName !== null && { stackName: input.stackName }),
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
exports.serializeAws_restJson1CreateBackendEnvironmentCommand = serializeAws_restJson1CreateBackendEnvironmentCommand;
const serializeAws_restJson1CreateBranchCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/branches";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.backendEnvironmentArn !== undefined &&
      input.backendEnvironmentArn !== null && { backendEnvironmentArn: input.backendEnvironmentArn }),
    ...(input.basicAuthCredentials !== undefined &&
      input.basicAuthCredentials !== null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.buildSpec !== undefined && input.buildSpec !== null && { buildSpec: input.buildSpec }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    ...(input.enableAutoBuild !== undefined &&
      input.enableAutoBuild !== null && { enableAutoBuild: input.enableAutoBuild }),
    ...(input.enableBasicAuth !== undefined &&
      input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableNotification !== undefined &&
      input.enableNotification !== null && { enableNotification: input.enableNotification }),
    ...(input.enablePerformanceMode !== undefined &&
      input.enablePerformanceMode !== null && { enablePerformanceMode: input.enablePerformanceMode }),
    ...(input.enablePullRequestPreview !== undefined &&
      input.enablePullRequestPreview !== null && { enablePullRequestPreview: input.enablePullRequestPreview }),
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariables(input.environmentVariables, context),
      }),
    ...(input.framework !== undefined && input.framework !== null && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName !== undefined &&
      input.pullRequestEnvironmentName !== null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
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
exports.serializeAws_restJson1CreateBranchCommand = serializeAws_restJson1CreateBranchCommand;
const serializeAws_restJson1CreateDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/deployments";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.fileMap !== undefined &&
      input.fileMap !== null && { fileMap: serializeAws_restJson1FileMap(input.fileMap, context) }),
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
const serializeAws_restJson1CreateDomainAssociationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/domains";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.autoSubDomainCreationPatterns !== undefined &&
      input.autoSubDomainCreationPatterns !== null && {
        autoSubDomainCreationPatterns: serializeAws_restJson1AutoSubDomainCreationPatterns(
          input.autoSubDomainCreationPatterns,
          context
        ),
      }),
    ...(input.autoSubDomainIAMRole !== undefined &&
      input.autoSubDomainIAMRole !== null && { autoSubDomainIAMRole: input.autoSubDomainIAMRole }),
    ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    ...(input.enableAutoSubDomain !== undefined &&
      input.enableAutoSubDomain !== null && { enableAutoSubDomain: input.enableAutoSubDomain }),
    ...(input.subDomainSettings !== undefined &&
      input.subDomainSettings !== null && {
        subDomainSettings: serializeAws_restJson1SubDomainSettings(input.subDomainSettings, context),
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
exports.serializeAws_restJson1CreateDomainAssociationCommand = serializeAws_restJson1CreateDomainAssociationCommand;
const serializeAws_restJson1CreateWebhookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/webhooks";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
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
exports.serializeAws_restJson1CreateWebhookCommand = serializeAws_restJson1CreateWebhookCommand;
const serializeAws_restJson1DeleteAppCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
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
exports.serializeAws_restJson1DeleteAppCommand = serializeAws_restJson1DeleteAppCommand;
const serializeAws_restJson1DeleteBackendEnvironmentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
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
exports.serializeAws_restJson1DeleteBackendEnvironmentCommand = serializeAws_restJson1DeleteBackendEnvironmentCommand;
const serializeAws_restJson1DeleteBranchCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
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
exports.serializeAws_restJson1DeleteBranchCommand = serializeAws_restJson1DeleteBranchCommand;
const serializeAws_restJson1DeleteDomainAssociationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
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
exports.serializeAws_restJson1DeleteDomainAssociationCommand = serializeAws_restJson1DeleteDomainAssociationCommand;
const serializeAws_restJson1DeleteJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1DeleteJobCommand = serializeAws_restJson1DeleteJobCommand;
const serializeAws_restJson1DeleteWebhookCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue = input.webhookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace("{webhookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
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
exports.serializeAws_restJson1DeleteWebhookCommand = serializeAws_restJson1DeleteWebhookCommand;
const serializeAws_restJson1GenerateAccessLogsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/accesslogs";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
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
exports.serializeAws_restJson1GenerateAccessLogsCommand = serializeAws_restJson1GenerateAccessLogsCommand;
const serializeAws_restJson1GetAppCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
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
exports.serializeAws_restJson1GetAppCommand = serializeAws_restJson1GetAppCommand;
const serializeAws_restJson1GetArtifactUrlCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/artifacts/{artifactId}";
  if (input.artifactId !== undefined) {
    const labelValue = input.artifactId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: artifactId.");
    }
    resolvedPath = resolvedPath.replace("{artifactId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: artifactId.");
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
exports.serializeAws_restJson1GetArtifactUrlCommand = serializeAws_restJson1GetArtifactUrlCommand;
const serializeAws_restJson1GetBackendEnvironmentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: environmentName.");
    }
    resolvedPath = resolvedPath.replace("{environmentName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
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
exports.serializeAws_restJson1GetBackendEnvironmentCommand = serializeAws_restJson1GetBackendEnvironmentCommand;
const serializeAws_restJson1GetBranchCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
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
exports.serializeAws_restJson1GetBranchCommand = serializeAws_restJson1GetBranchCommand;
const serializeAws_restJson1GetDomainAssociationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
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
exports.serializeAws_restJson1GetDomainAssociationCommand = serializeAws_restJson1GetDomainAssociationCommand;
const serializeAws_restJson1GetJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
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
const serializeAws_restJson1GetWebhookCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue = input.webhookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace("{webhookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
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
exports.serializeAws_restJson1GetWebhookCommand = serializeAws_restJson1GetWebhookCommand;
const serializeAws_restJson1ListAppsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps";
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
exports.serializeAws_restJson1ListAppsCommand = serializeAws_restJson1ListAppsCommand;
const serializeAws_restJson1ListArtifactsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1ListArtifactsCommand = serializeAws_restJson1ListArtifactsCommand;
const serializeAws_restJson1ListBackendEnvironmentsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/backendenvironments";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query = {
    ...(input.environmentName !== undefined && { environmentName: input.environmentName }),
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
exports.serializeAws_restJson1ListBackendEnvironmentsCommand = serializeAws_restJson1ListBackendEnvironmentsCommand;
const serializeAws_restJson1ListBranchesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
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
exports.serializeAws_restJson1ListBranchesCommand = serializeAws_restJson1ListBranchesCommand;
const serializeAws_restJson1ListDomainAssociationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/domains";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
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
exports.serializeAws_restJson1ListDomainAssociationsCommand = serializeAws_restJson1ListDomainAssociationsCommand;
const serializeAws_restJson1ListJobsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
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
exports.serializeAws_restJson1ListJobsCommand = serializeAws_restJson1ListJobsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
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
const serializeAws_restJson1ListWebhooksCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/webhooks";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
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
exports.serializeAws_restJson1ListWebhooksCommand = serializeAws_restJson1ListWebhooksCommand;
const serializeAws_restJson1StartDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/deployments/start";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.sourceUrl !== undefined && input.sourceUrl !== null && { sourceUrl: input.sourceUrl }),
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
exports.serializeAws_restJson1StartDeploymentCommand = serializeAws_restJson1StartDeploymentCommand;
const serializeAws_restJson1StartJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
    ...(input.commitMessage !== undefined && input.commitMessage !== null && { commitMessage: input.commitMessage }),
    ...(input.commitTime !== undefined &&
      input.commitTime !== null && { commitTime: Math.round(input.commitTime.getTime() / 1000) }),
    ...(input.jobId !== undefined && input.jobId !== null && { jobId: input.jobId }),
    ...(input.jobReason !== undefined && input.jobReason !== null && { jobReason: input.jobReason }),
    ...(input.jobType !== undefined && input.jobType !== null && { jobType: input.jobType }),
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
exports.serializeAws_restJson1StartJobCommand = serializeAws_restJson1StartJobCommand;
const serializeAws_restJson1StopJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1StopJobCommand = serializeAws_restJson1StopJobCommand;
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
const serializeAws_restJson1UpdateAppCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.autoBranchCreationConfig !== undefined &&
      input.autoBranchCreationConfig !== null && {
        autoBranchCreationConfig: serializeAws_restJson1AutoBranchCreationConfig(
          input.autoBranchCreationConfig,
          context
        ),
      }),
    ...(input.autoBranchCreationPatterns !== undefined &&
      input.autoBranchCreationPatterns !== null && {
        autoBranchCreationPatterns: serializeAws_restJson1AutoBranchCreationPatterns(
          input.autoBranchCreationPatterns,
          context
        ),
      }),
    ...(input.basicAuthCredentials !== undefined &&
      input.basicAuthCredentials !== null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec !== undefined && input.buildSpec !== null && { buildSpec: input.buildSpec }),
    ...(input.customHeaders !== undefined && input.customHeaders !== null && { customHeaders: input.customHeaders }),
    ...(input.customRules !== undefined &&
      input.customRules !== null && { customRules: serializeAws_restJson1CustomRules(input.customRules, context) }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.enableAutoBranchCreation !== undefined &&
      input.enableAutoBranchCreation !== null && { enableAutoBranchCreation: input.enableAutoBranchCreation }),
    ...(input.enableBasicAuth !== undefined &&
      input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableBranchAutoBuild !== undefined &&
      input.enableBranchAutoBuild !== null && { enableBranchAutoBuild: input.enableBranchAutoBuild }),
    ...(input.enableBranchAutoDeletion !== undefined &&
      input.enableBranchAutoDeletion !== null && { enableBranchAutoDeletion: input.enableBranchAutoDeletion }),
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariables(input.environmentVariables, context),
      }),
    ...(input.iamServiceRoleArn !== undefined &&
      input.iamServiceRoleArn !== null && { iamServiceRoleArn: input.iamServiceRoleArn }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.oauthToken !== undefined && input.oauthToken !== null && { oauthToken: input.oauthToken }),
    ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
    ...(input.repository !== undefined && input.repository !== null && { repository: input.repository }),
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
exports.serializeAws_restJson1UpdateAppCommand = serializeAws_restJson1UpdateAppCommand;
const serializeAws_restJson1UpdateBranchCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.backendEnvironmentArn !== undefined &&
      input.backendEnvironmentArn !== null && { backendEnvironmentArn: input.backendEnvironmentArn }),
    ...(input.basicAuthCredentials !== undefined &&
      input.basicAuthCredentials !== null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec !== undefined && input.buildSpec !== null && { buildSpec: input.buildSpec }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    ...(input.enableAutoBuild !== undefined &&
      input.enableAutoBuild !== null && { enableAutoBuild: input.enableAutoBuild }),
    ...(input.enableBasicAuth !== undefined &&
      input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enableNotification !== undefined &&
      input.enableNotification !== null && { enableNotification: input.enableNotification }),
    ...(input.enablePerformanceMode !== undefined &&
      input.enablePerformanceMode !== null && { enablePerformanceMode: input.enablePerformanceMode }),
    ...(input.enablePullRequestPreview !== undefined &&
      input.enablePullRequestPreview !== null && { enablePullRequestPreview: input.enablePullRequestPreview }),
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariables(input.environmentVariables, context),
      }),
    ...(input.framework !== undefined && input.framework !== null && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName !== undefined &&
      input.pullRequestEnvironmentName !== null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
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
exports.serializeAws_restJson1UpdateBranchCommand = serializeAws_restJson1UpdateBranchCommand;
const serializeAws_restJson1UpdateDomainAssociationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
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
    ...(input.autoSubDomainCreationPatterns !== undefined &&
      input.autoSubDomainCreationPatterns !== null && {
        autoSubDomainCreationPatterns: serializeAws_restJson1AutoSubDomainCreationPatterns(
          input.autoSubDomainCreationPatterns,
          context
        ),
      }),
    ...(input.autoSubDomainIAMRole !== undefined &&
      input.autoSubDomainIAMRole !== null && { autoSubDomainIAMRole: input.autoSubDomainIAMRole }),
    ...(input.enableAutoSubDomain !== undefined &&
      input.enableAutoSubDomain !== null && { enableAutoSubDomain: input.enableAutoSubDomain }),
    ...(input.subDomainSettings !== undefined &&
      input.subDomainSettings !== null && {
        subDomainSettings: serializeAws_restJson1SubDomainSettings(input.subDomainSettings, context),
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
exports.serializeAws_restJson1UpdateDomainAssociationCommand = serializeAws_restJson1UpdateDomainAssociationCommand;
const serializeAws_restJson1UpdateWebhookCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue = input.webhookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace("{webhookId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
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
exports.serializeAws_restJson1UpdateWebhookCommand = serializeAws_restJson1UpdateWebhookCommand;
const deserializeAws_restJson1CreateAppCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    app: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAppCommand = deserializeAws_restJson1CreateAppCommand;
const deserializeAws_restJson1CreateAppCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1CreateBackendEnvironmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendEnvironmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    backendEnvironment: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.backendEnvironment !== undefined && data.backendEnvironment !== null) {
    contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(data.backendEnvironment, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackendEnvironmentCommand =
  deserializeAws_restJson1CreateBackendEnvironmentCommand;
const deserializeAws_restJson1CreateBackendEnvironmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1CreateBranchCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBranchCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    branch: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBranchCommand = deserializeAws_restJson1CreateBranchCommand;
const deserializeAws_restJson1CreateBranchCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    fileUploadUrls: undefined,
    jobId: undefined,
    zipUploadUrl: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.fileUploadUrls !== undefined && data.fileUploadUrls !== null) {
    contents.fileUploadUrls = deserializeAws_restJson1FileUploadUrls(data.fileUploadUrls, context);
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  if (data.zipUploadUrl !== undefined && data.zipUploadUrl !== null) {
    contents.zipUploadUrl = data.zipUploadUrl;
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
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1CreateDomainAssociationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainAssociationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    domainAssociation: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDomainAssociationCommand = deserializeAws_restJson1CreateDomainAssociationCommand;
const deserializeAws_restJson1CreateDomainAssociationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1CreateWebhookCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWebhookCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    webhook: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateWebhookCommand = deserializeAws_restJson1CreateWebhookCommand;
const deserializeAws_restJson1CreateWebhookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DeleteAppCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    app: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAppCommand = deserializeAws_restJson1DeleteAppCommand;
const deserializeAws_restJson1DeleteAppCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DeleteBackendEnvironmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendEnvironmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    backendEnvironment: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.backendEnvironment !== undefined && data.backendEnvironment !== null) {
    contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(data.backendEnvironment, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackendEnvironmentCommand =
  deserializeAws_restJson1DeleteBackendEnvironmentCommand;
const deserializeAws_restJson1DeleteBackendEnvironmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DeleteBranchCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBranchCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    branch: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBranchCommand = deserializeAws_restJson1DeleteBranchCommand;
const deserializeAws_restJson1DeleteBranchCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DeleteDomainAssociationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainAssociationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    domainAssociation: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDomainAssociationCommand = deserializeAws_restJson1DeleteDomainAssociationCommand;
const deserializeAws_restJson1DeleteDomainAssociationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DeleteJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobSummary: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteJobCommand = deserializeAws_restJson1DeleteJobCommand;
const deserializeAws_restJson1DeleteJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DeleteWebhookCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWebhookCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    webhook: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteWebhookCommand = deserializeAws_restJson1DeleteWebhookCommand;
const deserializeAws_restJson1DeleteWebhookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GenerateAccessLogsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateAccessLogsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    logUrl: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.logUrl !== undefined && data.logUrl !== null) {
    contents.logUrl = data.logUrl;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GenerateAccessLogsCommand = deserializeAws_restJson1GenerateAccessLogsCommand;
const deserializeAws_restJson1GenerateAccessLogsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetAppCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    app: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAppCommand = deserializeAws_restJson1GetAppCommand;
const deserializeAws_restJson1GetAppCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetArtifactUrlCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetArtifactUrlCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    artifactId: undefined,
    artifactUrl: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.artifactId !== undefined && data.artifactId !== null) {
    contents.artifactId = data.artifactId;
  }
  if (data.artifactUrl !== undefined && data.artifactUrl !== null) {
    contents.artifactUrl = data.artifactUrl;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetArtifactUrlCommand = deserializeAws_restJson1GetArtifactUrlCommand;
const deserializeAws_restJson1GetArtifactUrlCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetBackendEnvironmentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendEnvironmentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    backendEnvironment: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.backendEnvironment !== undefined && data.backendEnvironment !== null) {
    contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(data.backendEnvironment, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackendEnvironmentCommand = deserializeAws_restJson1GetBackendEnvironmentCommand;
const deserializeAws_restJson1GetBackendEnvironmentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetBranchCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBranchCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    branch: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBranchCommand = deserializeAws_restJson1GetBranchCommand;
const deserializeAws_restJson1GetBranchCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetDomainAssociationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainAssociationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    domainAssociation: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainAssociationCommand = deserializeAws_restJson1GetDomainAssociationCommand;
const deserializeAws_restJson1GetDomainAssociationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    job: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.job !== undefined && data.job !== null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1GetWebhookCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWebhookCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    webhook: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetWebhookCommand = deserializeAws_restJson1GetWebhookCommand;
const deserializeAws_restJson1GetWebhookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1ListAppsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apps: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apps !== undefined && data.apps !== null) {
    contents.apps = deserializeAws_restJson1Apps(data.apps, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAppsCommand = deserializeAws_restJson1ListAppsCommand;
const deserializeAws_restJson1ListAppsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1ListArtifactsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListArtifactsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    artifacts: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.artifacts !== undefined && data.artifacts !== null) {
    contents.artifacts = deserializeAws_restJson1Artifacts(data.artifacts, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListArtifactsCommand = deserializeAws_restJson1ListArtifactsCommand;
const deserializeAws_restJson1ListArtifactsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1ListBackendEnvironmentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackendEnvironmentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    backendEnvironments: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.backendEnvironments !== undefined && data.backendEnvironments !== null) {
    contents.backendEnvironments = deserializeAws_restJson1BackendEnvironments(data.backendEnvironments, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackendEnvironmentsCommand = deserializeAws_restJson1ListBackendEnvironmentsCommand;
const deserializeAws_restJson1ListBackendEnvironmentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1ListBranchesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBranchesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    branches: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.branches !== undefined && data.branches !== null) {
    contents.branches = deserializeAws_restJson1Branches(data.branches, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBranchesCommand = deserializeAws_restJson1ListBranchesCommand;
const deserializeAws_restJson1ListBranchesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1ListDomainAssociationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainAssociationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    domainAssociations: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.domainAssociations !== undefined && data.domainAssociations !== null) {
    contents.domainAssociations = deserializeAws_restJson1DomainAssociations(data.domainAssociations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDomainAssociationsCommand = deserializeAws_restJson1ListDomainAssociationsCommand;
const deserializeAws_restJson1ListDomainAssociationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1ListJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobSummaries: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobSummaries !== undefined && data.jobSummaries !== null) {
    contents.jobSummaries = deserializeAws_restJson1JobSummaries(data.jobSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
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
const deserializeAws_restJson1ListWebhooksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWebhooksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    webhooks: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.webhooks !== undefined && data.webhooks !== null) {
    contents.webhooks = deserializeAws_restJson1Webhooks(data.webhooks, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListWebhooksCommand = deserializeAws_restJson1ListWebhooksCommand;
const deserializeAws_restJson1ListWebhooksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1StartDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobSummary: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartDeploymentCommand = deserializeAws_restJson1StartDeploymentCommand;
const deserializeAws_restJson1StartDeploymentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1StartJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobSummary: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
  }
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1StopJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    jobSummary: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(data.jobSummary, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopJobCommand = deserializeAws_restJson1StopJobCommand;
const deserializeAws_restJson1StopJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
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
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
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
const deserializeAws_restJson1UpdateAppCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    app: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAppCommand = deserializeAws_restJson1UpdateAppCommand;
const deserializeAws_restJson1UpdateAppCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1UpdateBranchCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBranchCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    branch: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBranchCommand = deserializeAws_restJson1UpdateBranchCommand;
const deserializeAws_restJson1UpdateBranchCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDomainAssociationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainAssociationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    domainAssociation: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(data.domainAssociation, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDomainAssociationCommand = deserializeAws_restJson1UpdateDomainAssociationCommand;
const deserializeAws_restJson1UpdateDomainAssociationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1UpdateWebhookCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWebhookCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    webhook: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateWebhookCommand = deserializeAws_restJson1UpdateWebhookCommand;
const deserializeAws_restJson1UpdateWebhookCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
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
const deserializeAws_restJson1DependentServiceFailureExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DependentServiceFailureException",
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
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
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
const serializeAws_restJson1AutoBranchCreationConfig = (input, context) => {
  return {
    ...(input.basicAuthCredentials !== undefined &&
      input.basicAuthCredentials !== null && { basicAuthCredentials: input.basicAuthCredentials }),
    ...(input.buildSpec !== undefined && input.buildSpec !== null && { buildSpec: input.buildSpec }),
    ...(input.enableAutoBuild !== undefined &&
      input.enableAutoBuild !== null && { enableAutoBuild: input.enableAutoBuild }),
    ...(input.enableBasicAuth !== undefined &&
      input.enableBasicAuth !== null && { enableBasicAuth: input.enableBasicAuth }),
    ...(input.enablePerformanceMode !== undefined &&
      input.enablePerformanceMode !== null && { enablePerformanceMode: input.enablePerformanceMode }),
    ...(input.enablePullRequestPreview !== undefined &&
      input.enablePullRequestPreview !== null && { enablePullRequestPreview: input.enablePullRequestPreview }),
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariables(input.environmentVariables, context),
      }),
    ...(input.framework !== undefined && input.framework !== null && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName !== undefined &&
      input.pullRequestEnvironmentName !== null && { pullRequestEnvironmentName: input.pullRequestEnvironmentName }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
  };
};
const serializeAws_restJson1AutoBranchCreationPatterns = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1AutoSubDomainCreationPatterns = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1CustomRule = (input, context) => {
  return {
    ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
    ...(input.source !== undefined && input.source !== null && { source: input.source }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
    ...(input.target !== undefined && input.target !== null && { target: input.target }),
  };
};
const serializeAws_restJson1CustomRules = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1CustomRule(entry, context);
    });
};
const serializeAws_restJson1EnvironmentVariables = (input, context) => {
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
const serializeAws_restJson1FileMap = (input, context) => {
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
const serializeAws_restJson1SubDomainSetting = (input, context) => {
  return {
    ...(input.branchName !== undefined && input.branchName !== null && { branchName: input.branchName }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};
const serializeAws_restJson1SubDomainSettings = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1SubDomainSetting(entry, context);
    });
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
const deserializeAws_restJson1App = (output, context) => {
  return {
    appArn: output.appArn !== undefined && output.appArn !== null ? output.appArn : undefined,
    appId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
    autoBranchCreationConfig:
      output.autoBranchCreationConfig !== undefined && output.autoBranchCreationConfig !== null
        ? deserializeAws_restJson1AutoBranchCreationConfig(output.autoBranchCreationConfig, context)
        : undefined,
    autoBranchCreationPatterns:
      output.autoBranchCreationPatterns !== undefined && output.autoBranchCreationPatterns !== null
        ? deserializeAws_restJson1AutoBranchCreationPatterns(output.autoBranchCreationPatterns, context)
        : undefined,
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined && output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    buildSpec: output.buildSpec !== undefined && output.buildSpec !== null ? output.buildSpec : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    customHeaders:
      output.customHeaders !== undefined && output.customHeaders !== null ? output.customHeaders : undefined,
    customRules:
      output.customRules !== undefined && output.customRules !== null
        ? deserializeAws_restJson1CustomRules(output.customRules, context)
        : undefined,
    defaultDomain:
      output.defaultDomain !== undefined && output.defaultDomain !== null ? output.defaultDomain : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    enableAutoBranchCreation:
      output.enableAutoBranchCreation !== undefined && output.enableAutoBranchCreation !== null
        ? output.enableAutoBranchCreation
        : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null ? output.enableBasicAuth : undefined,
    enableBranchAutoBuild:
      output.enableBranchAutoBuild !== undefined && output.enableBranchAutoBuild !== null
        ? output.enableBranchAutoBuild
        : undefined,
    enableBranchAutoDeletion:
      output.enableBranchAutoDeletion !== undefined && output.enableBranchAutoDeletion !== null
        ? output.enableBranchAutoDeletion
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    iamServiceRoleArn:
      output.iamServiceRoleArn !== undefined && output.iamServiceRoleArn !== null
        ? output.iamServiceRoleArn
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
    productionBranch:
      output.productionBranch !== undefined && output.productionBranch !== null
        ? deserializeAws_restJson1ProductionBranch(output.productionBranch, context)
        : undefined,
    repository: output.repository !== undefined && output.repository !== null ? output.repository : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1Apps = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1App(entry, context);
    });
};
const deserializeAws_restJson1Artifact = (output, context) => {
  return {
    artifactFileName:
      output.artifactFileName !== undefined && output.artifactFileName !== null ? output.artifactFileName : undefined,
    artifactId: output.artifactId !== undefined && output.artifactId !== null ? output.artifactId : undefined,
  };
};
const deserializeAws_restJson1Artifacts = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Artifact(entry, context);
    });
};
const deserializeAws_restJson1AssociatedResources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1AutoBranchCreationConfig = (output, context) => {
  return {
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined && output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    buildSpec: output.buildSpec !== undefined && output.buildSpec !== null ? output.buildSpec : undefined,
    enableAutoBuild:
      output.enableAutoBuild !== undefined && output.enableAutoBuild !== null ? output.enableAutoBuild : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null ? output.enableBasicAuth : undefined,
    enablePerformanceMode:
      output.enablePerformanceMode !== undefined && output.enablePerformanceMode !== null
        ? output.enablePerformanceMode
        : undefined,
    enablePullRequestPreview:
      output.enablePullRequestPreview !== undefined && output.enablePullRequestPreview !== null
        ? output.enablePullRequestPreview
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    framework: output.framework !== undefined && output.framework !== null ? output.framework : undefined,
    pullRequestEnvironmentName:
      output.pullRequestEnvironmentName !== undefined && output.pullRequestEnvironmentName !== null
        ? output.pullRequestEnvironmentName
        : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  };
};
const deserializeAws_restJson1AutoBranchCreationPatterns = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1AutoSubDomainCreationPatterns = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1BackendEnvironment = (output, context) => {
  return {
    backendEnvironmentArn:
      output.backendEnvironmentArn !== undefined && output.backendEnvironmentArn !== null
        ? output.backendEnvironmentArn
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    deploymentArtifacts:
      output.deploymentArtifacts !== undefined && output.deploymentArtifacts !== null
        ? output.deploymentArtifacts
        : undefined,
    environmentName:
      output.environmentName !== undefined && output.environmentName !== null ? output.environmentName : undefined,
    stackName: output.stackName !== undefined && output.stackName !== null ? output.stackName : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1BackendEnvironments = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackendEnvironment(entry, context);
    });
};
const deserializeAws_restJson1Branch = (output, context) => {
  return {
    activeJobId: output.activeJobId !== undefined && output.activeJobId !== null ? output.activeJobId : undefined,
    associatedResources:
      output.associatedResources !== undefined && output.associatedResources !== null
        ? deserializeAws_restJson1AssociatedResources(output.associatedResources, context)
        : undefined,
    backendEnvironmentArn:
      output.backendEnvironmentArn !== undefined && output.backendEnvironmentArn !== null
        ? output.backendEnvironmentArn
        : undefined,
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined && output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    branchArn: output.branchArn !== undefined && output.branchArn !== null ? output.branchArn : undefined,
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    buildSpec: output.buildSpec !== undefined && output.buildSpec !== null ? output.buildSpec : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    customDomains:
      output.customDomains !== undefined && output.customDomains !== null
        ? deserializeAws_restJson1CustomDomains(output.customDomains, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    destinationBranch:
      output.destinationBranch !== undefined && output.destinationBranch !== null
        ? output.destinationBranch
        : undefined,
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    enableAutoBuild:
      output.enableAutoBuild !== undefined && output.enableAutoBuild !== null ? output.enableAutoBuild : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null ? output.enableBasicAuth : undefined,
    enableNotification:
      output.enableNotification !== undefined && output.enableNotification !== null
        ? output.enableNotification
        : undefined,
    enablePerformanceMode:
      output.enablePerformanceMode !== undefined && output.enablePerformanceMode !== null
        ? output.enablePerformanceMode
        : undefined,
    enablePullRequestPreview:
      output.enablePullRequestPreview !== undefined && output.enablePullRequestPreview !== null
        ? output.enablePullRequestPreview
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(output.environmentVariables, context)
        : undefined,
    framework: output.framework !== undefined && output.framework !== null ? output.framework : undefined,
    pullRequestEnvironmentName:
      output.pullRequestEnvironmentName !== undefined && output.pullRequestEnvironmentName !== null
        ? output.pullRequestEnvironmentName
        : undefined,
    sourceBranch: output.sourceBranch !== undefined && output.sourceBranch !== null ? output.sourceBranch : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    thumbnailUrl: output.thumbnailUrl !== undefined && output.thumbnailUrl !== null ? output.thumbnailUrl : undefined,
    totalNumberOfJobs:
      output.totalNumberOfJobs !== undefined && output.totalNumberOfJobs !== null
        ? output.totalNumberOfJobs
        : undefined,
    ttl: output.ttl !== undefined && output.ttl !== null ? output.ttl : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1Branches = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Branch(entry, context);
    });
};
const deserializeAws_restJson1CustomDomains = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1CustomRule = (output, context) => {
  return {
    condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
    source: output.source !== undefined && output.source !== null ? output.source : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    target: output.target !== undefined && output.target !== null ? output.target : undefined,
  };
};
const deserializeAws_restJson1CustomRules = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1CustomRule(entry, context);
    });
};
const deserializeAws_restJson1DomainAssociation = (output, context) => {
  return {
    autoSubDomainCreationPatterns:
      output.autoSubDomainCreationPatterns !== undefined && output.autoSubDomainCreationPatterns !== null
        ? deserializeAws_restJson1AutoSubDomainCreationPatterns(output.autoSubDomainCreationPatterns, context)
        : undefined,
    autoSubDomainIAMRole:
      output.autoSubDomainIAMRole !== undefined && output.autoSubDomainIAMRole !== null
        ? output.autoSubDomainIAMRole
        : undefined,
    certificateVerificationDNSRecord:
      output.certificateVerificationDNSRecord !== undefined && output.certificateVerificationDNSRecord !== null
        ? output.certificateVerificationDNSRecord
        : undefined,
    domainAssociationArn:
      output.domainAssociationArn !== undefined && output.domainAssociationArn !== null
        ? output.domainAssociationArn
        : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainStatus: output.domainStatus !== undefined && output.domainStatus !== null ? output.domainStatus : undefined,
    enableAutoSubDomain:
      output.enableAutoSubDomain !== undefined && output.enableAutoSubDomain !== null
        ? output.enableAutoSubDomain
        : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    subDomains:
      output.subDomains !== undefined && output.subDomains !== null
        ? deserializeAws_restJson1SubDomains(output.subDomains, context)
        : undefined,
  };
};
const deserializeAws_restJson1DomainAssociations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainAssociation(entry, context);
    });
};
const deserializeAws_restJson1EnvironmentVariables = (output, context) => {
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
const deserializeAws_restJson1FileUploadUrls = (output, context) => {
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
const deserializeAws_restJson1Job = (output, context) => {
  return {
    steps:
      output.steps !== undefined && output.steps !== null
        ? deserializeAws_restJson1Steps(output.steps, context)
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_restJson1JobSummary(output.summary, context)
        : undefined,
  };
};
const deserializeAws_restJson1JobSummaries = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1JobSummary(entry, context);
    });
};
const deserializeAws_restJson1JobSummary = (output, context) => {
  return {
    commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
    commitMessage:
      output.commitMessage !== undefined && output.commitMessage !== null ? output.commitMessage : undefined,
    commitTime:
      output.commitTime !== undefined && output.commitTime !== null
        ? new Date(Math.round(output.commitTime * 1000))
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
    jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    jobType: output.jobType !== undefined && output.jobType !== null ? output.jobType : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
const deserializeAws_restJson1ProductionBranch = (output, context) => {
  return {
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    lastDeployTime:
      output.lastDeployTime !== undefined && output.lastDeployTime !== null
        ? new Date(Math.round(output.lastDeployTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    thumbnailUrl: output.thumbnailUrl !== undefined && output.thumbnailUrl !== null ? output.thumbnailUrl : undefined,
  };
};
const deserializeAws_restJson1Screenshots = (output, context) => {
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
const deserializeAws_restJson1Step = (output, context) => {
  return {
    artifactsUrl: output.artifactsUrl !== undefined && output.artifactsUrl !== null ? output.artifactsUrl : undefined,
    context: output.context !== undefined && output.context !== null ? output.context : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    logUrl: output.logUrl !== undefined && output.logUrl !== null ? output.logUrl : undefined,
    screenshots:
      output.screenshots !== undefined && output.screenshots !== null
        ? deserializeAws_restJson1Screenshots(output.screenshots, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
    stepName: output.stepName !== undefined && output.stepName !== null ? output.stepName : undefined,
    testArtifactsUrl:
      output.testArtifactsUrl !== undefined && output.testArtifactsUrl !== null ? output.testArtifactsUrl : undefined,
    testConfigUrl:
      output.testConfigUrl !== undefined && output.testConfigUrl !== null ? output.testConfigUrl : undefined,
  };
};
const deserializeAws_restJson1Steps = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Step(entry, context);
    });
};
const deserializeAws_restJson1SubDomain = (output, context) => {
  return {
    dnsRecord: output.dnsRecord !== undefined && output.dnsRecord !== null ? output.dnsRecord : undefined,
    subDomainSetting:
      output.subDomainSetting !== undefined && output.subDomainSetting !== null
        ? deserializeAws_restJson1SubDomainSetting(output.subDomainSetting, context)
        : undefined,
    verified: output.verified !== undefined && output.verified !== null ? output.verified : undefined,
  };
};
const deserializeAws_restJson1SubDomains = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1SubDomain(entry, context);
    });
};
const deserializeAws_restJson1SubDomainSetting = (output, context) => {
  return {
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
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
const deserializeAws_restJson1Webhook = (output, context) => {
  return {
    branchName: output.branchName !== undefined && output.branchName !== null ? output.branchName : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
    webhookArn: output.webhookArn !== undefined && output.webhookArn !== null ? output.webhookArn : undefined,
    webhookId: output.webhookId !== undefined && output.webhookId !== null ? output.webhookId : undefined,
    webhookUrl: output.webhookUrl !== undefined && output.webhookUrl !== null ? output.webhookUrl : undefined,
  };
};
const deserializeAws_restJson1Webhooks = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Webhook(entry, context);
    });
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
