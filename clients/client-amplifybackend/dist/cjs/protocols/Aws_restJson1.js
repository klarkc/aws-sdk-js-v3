"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateBackendJobCommand =
  exports.deserializeAws_restJson1UpdateBackendConfigCommand =
  exports.deserializeAws_restJson1UpdateBackendAuthCommand =
  exports.deserializeAws_restJson1UpdateBackendAPICommand =
  exports.deserializeAws_restJson1RemoveBackendConfigCommand =
  exports.deserializeAws_restJson1RemoveAllBackendsCommand =
  exports.deserializeAws_restJson1ListBackendJobsCommand =
  exports.deserializeAws_restJson1GetTokenCommand =
  exports.deserializeAws_restJson1GetBackendJobCommand =
  exports.deserializeAws_restJson1GetBackendAuthCommand =
  exports.deserializeAws_restJson1GetBackendAPIModelsCommand =
  exports.deserializeAws_restJson1GetBackendAPICommand =
  exports.deserializeAws_restJson1GetBackendCommand =
  exports.deserializeAws_restJson1GenerateBackendAPIModelsCommand =
  exports.deserializeAws_restJson1DeleteTokenCommand =
  exports.deserializeAws_restJson1DeleteBackendAuthCommand =
  exports.deserializeAws_restJson1DeleteBackendAPICommand =
  exports.deserializeAws_restJson1DeleteBackendCommand =
  exports.deserializeAws_restJson1CreateTokenCommand =
  exports.deserializeAws_restJson1CreateBackendConfigCommand =
  exports.deserializeAws_restJson1CreateBackendAuthCommand =
  exports.deserializeAws_restJson1CreateBackendAPICommand =
  exports.deserializeAws_restJson1CreateBackendCommand =
  exports.deserializeAws_restJson1CloneBackendCommand =
  exports.serializeAws_restJson1UpdateBackendJobCommand =
  exports.serializeAws_restJson1UpdateBackendConfigCommand =
  exports.serializeAws_restJson1UpdateBackendAuthCommand =
  exports.serializeAws_restJson1UpdateBackendAPICommand =
  exports.serializeAws_restJson1RemoveBackendConfigCommand =
  exports.serializeAws_restJson1RemoveAllBackendsCommand =
  exports.serializeAws_restJson1ListBackendJobsCommand =
  exports.serializeAws_restJson1GetTokenCommand =
  exports.serializeAws_restJson1GetBackendJobCommand =
  exports.serializeAws_restJson1GetBackendAuthCommand =
  exports.serializeAws_restJson1GetBackendAPIModelsCommand =
  exports.serializeAws_restJson1GetBackendAPICommand =
  exports.serializeAws_restJson1GetBackendCommand =
  exports.serializeAws_restJson1GenerateBackendAPIModelsCommand =
  exports.serializeAws_restJson1DeleteTokenCommand =
  exports.serializeAws_restJson1DeleteBackendAuthCommand =
  exports.serializeAws_restJson1DeleteBackendAPICommand =
  exports.serializeAws_restJson1DeleteBackendCommand =
  exports.serializeAws_restJson1CreateTokenCommand =
  exports.serializeAws_restJson1CreateBackendConfigCommand =
  exports.serializeAws_restJson1CreateBackendAuthCommand =
  exports.serializeAws_restJson1CreateBackendAPICommand =
  exports.serializeAws_restJson1CreateBackendCommand =
  exports.serializeAws_restJson1CloneBackendCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CloneBackendCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/environments/{BackendEnvironmentName}/clone";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.TargetEnvironmentName !== undefined &&
      input.TargetEnvironmentName !== null && { targetEnvironmentName: input.TargetEnvironmentName }),
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
exports.serializeAws_restJson1CloneBackendCommand = serializeAws_restJson1CloneBackendCommand;
const serializeAws_restJson1CreateBackendCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend";
  let body;
  body = JSON.stringify({
    ...(input.AppId !== undefined && input.AppId !== null && { appId: input.AppId }),
    ...(input.AppName !== undefined && input.AppName !== null && { appName: input.AppName }),
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1ResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1CreateBackendCommand = serializeAws_restJson1CreateBackendCommand;
const serializeAws_restJson1CreateBackendAPICommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/api";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1CreateBackendAPICommand = serializeAws_restJson1CreateBackendAPICommand;
const serializeAws_restJson1CreateBackendAuthCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/auth";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1CreateBackendAuthResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1CreateBackendAuthCommand = serializeAws_restJson1CreateBackendAuthCommand;
const serializeAws_restJson1CreateBackendConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/config";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackendManagerAppId !== undefined &&
      input.BackendManagerAppId !== null && { backendManagerAppId: input.BackendManagerAppId }),
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
exports.serializeAws_restJson1CreateBackendConfigCommand = serializeAws_restJson1CreateBackendConfigCommand;
const serializeAws_restJson1CreateTokenCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backend/{AppId}/challenge";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
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
exports.serializeAws_restJson1CreateTokenCommand = serializeAws_restJson1CreateTokenCommand;
const serializeAws_restJson1DeleteBackendCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backend/{AppId}/environments/{BackendEnvironmentName}/remove";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
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
exports.serializeAws_restJson1DeleteBackendCommand = serializeAws_restJson1DeleteBackendCommand;
const serializeAws_restJson1DeleteBackendAPICommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/remove";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1DeleteBackendAPICommand = serializeAws_restJson1DeleteBackendAPICommand;
const serializeAws_restJson1DeleteBackendAuthCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/auth/{BackendEnvironmentName}/remove";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1DeleteBackendAuthCommand = serializeAws_restJson1DeleteBackendAuthCommand;
const serializeAws_restJson1DeleteTokenCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backend/{AppId}/challenge/{SessionId}/remove";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.SessionId !== undefined) {
    const labelValue = input.SessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SessionId.");
    }
    resolvedPath = resolvedPath.replace("{SessionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SessionId.");
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
exports.serializeAws_restJson1DeleteTokenCommand = serializeAws_restJson1DeleteTokenCommand;
const serializeAws_restJson1GenerateBackendAPIModelsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/generateModels";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1GenerateBackendAPIModelsCommand = serializeAws_restJson1GenerateBackendAPIModelsCommand;
const serializeAws_restJson1GetBackendCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/details";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.BackendEnvironmentName !== undefined &&
      input.BackendEnvironmentName !== null && { backendEnvironmentName: input.BackendEnvironmentName }),
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
exports.serializeAws_restJson1GetBackendCommand = serializeAws_restJson1GetBackendCommand;
const serializeAws_restJson1GetBackendAPICommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/details";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1GetBackendAPICommand = serializeAws_restJson1GetBackendAPICommand;
const serializeAws_restJson1GetBackendAPIModelsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}/getModels";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1GetBackendAPIModelsCommand = serializeAws_restJson1GetBackendAPIModelsCommand;
const serializeAws_restJson1GetBackendAuthCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/auth/{BackendEnvironmentName}/details";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1GetBackendAuthCommand = serializeAws_restJson1GetBackendAuthCommand;
const serializeAws_restJson1GetBackendJobCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  if (input.JobId !== undefined) {
    const labelValue = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
exports.serializeAws_restJson1GetBackendJobCommand = serializeAws_restJson1GetBackendJobCommand;
const serializeAws_restJson1GetTokenCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backend/{AppId}/challenge/{SessionId}";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.SessionId !== undefined) {
    const labelValue = input.SessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SessionId.");
    }
    resolvedPath = resolvedPath.replace("{SessionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SessionId.");
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
exports.serializeAws_restJson1GetTokenCommand = serializeAws_restJson1GetTokenCommand;
const serializeAws_restJson1ListBackendJobsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/job/{BackendEnvironmentName}";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.JobId !== undefined && input.JobId !== null && { jobId: input.JobId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
    ...(input.Operation !== undefined && input.Operation !== null && { operation: input.Operation }),
    ...(input.Status !== undefined && input.Status !== null && { status: input.Status }),
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
exports.serializeAws_restJson1ListBackendJobsCommand = serializeAws_restJson1ListBackendJobsCommand;
const serializeAws_restJson1RemoveAllBackendsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/remove";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.CleanAmplifyApp !== undefined &&
      input.CleanAmplifyApp !== null && { cleanAmplifyApp: input.CleanAmplifyApp }),
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
exports.serializeAws_restJson1RemoveAllBackendsCommand = serializeAws_restJson1RemoveAllBackendsCommand;
const serializeAws_restJson1RemoveBackendConfigCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/backend/{AppId}/config/remove";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
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
exports.serializeAws_restJson1RemoveBackendConfigCommand = serializeAws_restJson1RemoveBackendConfigCommand;
const serializeAws_restJson1UpdateBackendAPICommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/api/{BackendEnvironmentName}";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1BackendAPIResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1UpdateBackendAPICommand = serializeAws_restJson1UpdateBackendAPICommand;
const serializeAws_restJson1UpdateBackendAuthCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/auth/{BackendEnvironmentName}";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ResourceConfig !== undefined &&
      input.ResourceConfig !== null && {
        resourceConfig: serializeAws_restJson1UpdateBackendAuthResourceConfig(input.ResourceConfig, context),
      }),
    ...(input.ResourceName !== undefined && input.ResourceName !== null && { resourceName: input.ResourceName }),
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
exports.serializeAws_restJson1UpdateBackendAuthCommand = serializeAws_restJson1UpdateBackendAuthCommand;
const serializeAws_restJson1UpdateBackendConfigCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/config/update";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.LoginAuthConfig !== undefined &&
      input.LoginAuthConfig !== null && {
        loginAuthConfig: serializeAws_restJson1LoginAuthConfigReqObj(input.LoginAuthConfig, context),
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
exports.serializeAws_restJson1UpdateBackendConfigCommand = serializeAws_restJson1UpdateBackendConfigCommand;
const serializeAws_restJson1UpdateBackendJobCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}";
  if (input.AppId !== undefined) {
    const labelValue = input.AppId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppId.");
    }
    resolvedPath = resolvedPath.replace("{AppId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppId.");
  }
  if (input.BackendEnvironmentName !== undefined) {
    const labelValue = input.BackendEnvironmentName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackendEnvironmentName.");
    }
    resolvedPath = resolvedPath.replace(
      "{BackendEnvironmentName}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackendEnvironmentName.");
  }
  if (input.JobId !== undefined) {
    const labelValue = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Operation !== undefined && input.Operation !== null && { operation: input.Operation }),
    ...(input.Status !== undefined && input.Status !== null && { status: input.Status }),
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
exports.serializeAws_restJson1UpdateBackendJobCommand = serializeAws_restJson1UpdateBackendJobCommand;
const deserializeAws_restJson1CloneBackendCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CloneBackendCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CloneBackendCommand = deserializeAws_restJson1CloneBackendCommand;
const deserializeAws_restJson1CloneBackendCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1CreateBackendCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackendCommand = deserializeAws_restJson1CreateBackendCommand;
const deserializeAws_restJson1CreateBackendCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1CreateBackendAPICommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendAPICommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackendAPICommand = deserializeAws_restJson1CreateBackendAPICommand;
const deserializeAws_restJson1CreateBackendAPICommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1CreateBackendAuthCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendAuthCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackendAuthCommand = deserializeAws_restJson1CreateBackendAuthCommand;
const deserializeAws_restJson1CreateBackendAuthCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1CreateBackendConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackendConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    JobId: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateBackendConfigCommand = deserializeAws_restJson1CreateBackendConfigCommand;
const deserializeAws_restJson1CreateBackendConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1CreateTokenCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTokenCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    ChallengeCode: undefined,
    SessionId: undefined,
    Ttl: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.challengeCode !== undefined && data.challengeCode !== null) {
    contents.ChallengeCode = data.challengeCode;
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.SessionId = data.sessionId;
  }
  if (data.ttl !== undefined && data.ttl !== null) {
    contents.Ttl = data.ttl;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTokenCommand = deserializeAws_restJson1CreateTokenCommand;
const deserializeAws_restJson1CreateTokenCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteBackendCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackendCommand = deserializeAws_restJson1DeleteBackendCommand;
const deserializeAws_restJson1DeleteBackendCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteBackendAPICommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendAPICommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackendAPICommand = deserializeAws_restJson1DeleteBackendAPICommand;
const deserializeAws_restJson1DeleteBackendAPICommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteBackendAuthCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackendAuthCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBackendAuthCommand = deserializeAws_restJson1DeleteBackendAuthCommand;
const deserializeAws_restJson1DeleteBackendAuthCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteTokenCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTokenCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    IsSuccess: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.isSuccess !== undefined && data.isSuccess !== null) {
    contents.IsSuccess = data.isSuccess;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTokenCommand = deserializeAws_restJson1DeleteTokenCommand;
const deserializeAws_restJson1DeleteTokenCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GenerateBackendAPIModelsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GenerateBackendAPIModelsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GenerateBackendAPIModelsCommand =
  deserializeAws_restJson1GenerateBackendAPIModelsCommand;
const deserializeAws_restJson1GenerateBackendAPIModelsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GetBackendCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AmplifyMetaConfig: undefined,
    AppId: undefined,
    AppName: undefined,
    BackendEnvironmentList: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.amplifyMetaConfig !== undefined && data.amplifyMetaConfig !== null) {
    contents.AmplifyMetaConfig = data.amplifyMetaConfig;
  }
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.appName !== undefined && data.appName !== null) {
    contents.AppName = data.appName;
  }
  if (data.backendEnvironmentList !== undefined && data.backendEnvironmentList !== null) {
    contents.BackendEnvironmentList = deserializeAws_restJson1ListOf__string(data.backendEnvironmentList, context);
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackendCommand = deserializeAws_restJson1GetBackendCommand;
const deserializeAws_restJson1GetBackendCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GetBackendAPICommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendAPICommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    ResourceConfig: undefined,
    ResourceName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.resourceConfig !== undefined && data.resourceConfig !== null) {
    contents.ResourceConfig = deserializeAws_restJson1BackendAPIResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.ResourceName = data.resourceName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackendAPICommand = deserializeAws_restJson1GetBackendAPICommand;
const deserializeAws_restJson1GetBackendAPICommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GetBackendAPIModelsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendAPIModelsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Models: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.models !== undefined && data.models !== null) {
    contents.Models = data.models;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackendAPIModelsCommand = deserializeAws_restJson1GetBackendAPIModelsCommand;
const deserializeAws_restJson1GetBackendAPIModelsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GetBackendAuthCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendAuthCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    ResourceConfig: undefined,
    ResourceName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.resourceConfig !== undefined && data.resourceConfig !== null) {
    contents.ResourceConfig = deserializeAws_restJson1CreateBackendAuthResourceConfig(data.resourceConfig, context);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.ResourceName = data.resourceName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackendAuthCommand = deserializeAws_restJson1GetBackendAuthCommand;
const deserializeAws_restJson1GetBackendAuthCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GetBackendJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackendJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    CreateTime: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
    UpdateTime: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.CreateTime = data.createTime;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.updateTime !== undefined && data.updateTime !== null) {
    contents.UpdateTime = data.updateTime;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBackendJobCommand = deserializeAws_restJson1GetBackendJobCommand;
const deserializeAws_restJson1GetBackendJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GetTokenCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTokenCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    ChallengeCode: undefined,
    SessionId: undefined,
    Ttl: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.challengeCode !== undefined && data.challengeCode !== null) {
    contents.ChallengeCode = data.challengeCode;
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.SessionId = data.sessionId;
  }
  if (data.ttl !== undefined && data.ttl !== null) {
    contents.Ttl = data.ttl;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTokenCommand = deserializeAws_restJson1GetTokenCommand;
const deserializeAws_restJson1GetTokenCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1ListBackendJobsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackendJobsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.Jobs = deserializeAws_restJson1ListOfBackendJobRespObj(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListBackendJobsCommand = deserializeAws_restJson1ListBackendJobsCommand;
const deserializeAws_restJson1ListBackendJobsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1RemoveAllBackendsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveAllBackendsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveAllBackendsCommand = deserializeAws_restJson1RemoveAllBackendsCommand;
const deserializeAws_restJson1RemoveAllBackendsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1RemoveBackendConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveBackendConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Error: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveBackendConfigCommand = deserializeAws_restJson1RemoveBackendConfigCommand;
const deserializeAws_restJson1RemoveBackendConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateBackendAPICommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendAPICommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBackendAPICommand = deserializeAws_restJson1UpdateBackendAPICommand;
const deserializeAws_restJson1UpdateBackendAPICommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateBackendAuthCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendAuthCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBackendAuthCommand = deserializeAws_restJson1UpdateBackendAuthCommand;
const deserializeAws_restJson1UpdateBackendAuthCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateBackendConfigCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendConfigCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendManagerAppId: undefined,
    Error: undefined,
    LoginAuthConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendManagerAppId !== undefined && data.backendManagerAppId !== null) {
    contents.BackendManagerAppId = data.backendManagerAppId;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.loginAuthConfig !== undefined && data.loginAuthConfig !== null) {
    contents.LoginAuthConfig = deserializeAws_restJson1LoginAuthConfigReqObj(data.loginAuthConfig, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBackendConfigCommand = deserializeAws_restJson1UpdateBackendConfigCommand;
const deserializeAws_restJson1UpdateBackendConfigCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateBackendJobCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackendJobCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AppId: undefined,
    BackendEnvironmentName: undefined,
    CreateTime: undefined,
    Error: undefined,
    JobId: undefined,
    Operation: undefined,
    Status: undefined,
    UpdateTime: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.appId !== undefined && data.appId !== null) {
    contents.AppId = data.appId;
  }
  if (data.backendEnvironmentName !== undefined && data.backendEnvironmentName !== null) {
    contents.BackendEnvironmentName = data.backendEnvironmentName;
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.CreateTime = data.createTime;
  }
  if (data.error !== undefined && data.error !== null) {
    contents.Error = data.error;
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.JobId = data.jobId;
  }
  if (data.operation !== undefined && data.operation !== null) {
    contents.Operation = data.operation;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  if (data.updateTime !== undefined && data.updateTime !== null) {
    contents.UpdateTime = data.updateTime;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBackendJobCommand = deserializeAws_restJson1UpdateBackendJobCommand;
const deserializeAws_restJson1UpdateBackendJobCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplifybackend#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.amplifybackend#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplifybackend#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.amplifybackend#TooManyRequestsException":
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
const deserializeAws_restJson1GatewayTimeoutExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "GatewayTimeoutException",
    $fault: "server",
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
const serializeAws_restJson1BackendAPIAppSyncAuthSettings = (input, context) => {
  return {
    ...(input.CognitoUserPoolId !== undefined &&
      input.CognitoUserPoolId !== null && { cognitoUserPoolId: input.CognitoUserPoolId }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.ExpirationTime !== undefined &&
      input.ExpirationTime !== null && { expirationTime: input.ExpirationTime }),
    ...(input.OpenIDAuthTTL !== undefined && input.OpenIDAuthTTL !== null && { openIDAuthTTL: input.OpenIDAuthTTL }),
    ...(input.OpenIDClientId !== undefined &&
      input.OpenIDClientId !== null && { openIDClientId: input.OpenIDClientId }),
    ...(input.OpenIDIatTTL !== undefined && input.OpenIDIatTTL !== null && { openIDIatTTL: input.OpenIDIatTTL }),
    ...(input.OpenIDIssueURL !== undefined &&
      input.OpenIDIssueURL !== null && { openIDIssueURL: input.OpenIDIssueURL }),
    ...(input.OpenIDProviderName !== undefined &&
      input.OpenIDProviderName !== null && { openIDProviderName: input.OpenIDProviderName }),
  };
};
const serializeAws_restJson1BackendAPIAuthType = (input, context) => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && {
        settings: serializeAws_restJson1BackendAPIAppSyncAuthSettings(input.Settings, context),
      }),
  };
};
const serializeAws_restJson1BackendAPIConflictResolution = (input, context) => {
  return {
    ...(input.ResolutionStrategy !== undefined &&
      input.ResolutionStrategy !== null && { resolutionStrategy: input.ResolutionStrategy }),
  };
};
const serializeAws_restJson1BackendAPIResourceConfig = (input, context) => {
  return {
    ...(input.AdditionalAuthTypes !== undefined &&
      input.AdditionalAuthTypes !== null && {
        additionalAuthTypes: serializeAws_restJson1ListOfBackendAPIAuthType(input.AdditionalAuthTypes, context),
      }),
    ...(input.ApiName !== undefined && input.ApiName !== null && { apiName: input.ApiName }),
    ...(input.ConflictResolution !== undefined &&
      input.ConflictResolution !== null && {
        conflictResolution: serializeAws_restJson1BackendAPIConflictResolution(input.ConflictResolution, context),
      }),
    ...(input.DefaultAuthType !== undefined &&
      input.DefaultAuthType !== null && {
        defaultAuthType: serializeAws_restJson1BackendAPIAuthType(input.DefaultAuthType, context),
      }),
    ...(input.Service !== undefined && input.Service !== null && { service: input.Service }),
    ...(input.TransformSchema !== undefined &&
      input.TransformSchema !== null && { transformSchema: input.TransformSchema }),
  };
};
const serializeAws_restJson1BackendAuthSocialProviderConfig = (input, context) => {
  return {
    ...(input.ClientId !== undefined && input.ClientId !== null && { client_id: input.ClientId }),
    ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { client_secret: input.ClientSecret }),
  };
};
const serializeAws_restJson1CreateBackendAuthForgotPasswordConfig = (input, context) => {
  return {
    ...(input.DeliveryMethod !== undefined &&
      input.DeliveryMethod !== null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings !== undefined &&
      input.EmailSettings !== null && {
        emailSettings: serializeAws_restJson1EmailSettings(input.EmailSettings, context),
      }),
    ...(input.SmsSettings !== undefined &&
      input.SmsSettings !== null && { smsSettings: serializeAws_restJson1SmsSettings(input.SmsSettings, context) }),
  };
};
const serializeAws_restJson1CreateBackendAuthIdentityPoolConfig = (input, context) => {
  return {
    ...(input.IdentityPoolName !== undefined &&
      input.IdentityPoolName !== null && { identityPoolName: input.IdentityPoolName }),
    ...(input.UnauthenticatedLogin !== undefined &&
      input.UnauthenticatedLogin !== null && { unauthenticatedLogin: input.UnauthenticatedLogin }),
  };
};
const serializeAws_restJson1CreateBackendAuthMFAConfig = (input, context) => {
  return {
    ...(input.MFAMode !== undefined && input.MFAMode !== null && { MFAMode: input.MFAMode }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1Settings(input.Settings, context) }),
  };
};
const serializeAws_restJson1CreateBackendAuthOAuthConfig = (input, context) => {
  return {
    ...(input.DomainPrefix !== undefined && input.DomainPrefix !== null && { domainPrefix: input.DomainPrefix }),
    ...(input.OAuthGrantType !== undefined &&
      input.OAuthGrantType !== null && { oAuthGrantType: input.OAuthGrantType }),
    ...(input.OAuthScopes !== undefined &&
      input.OAuthScopes !== null && {
        oAuthScopes: serializeAws_restJson1ListOfOAuthScopesElement(input.OAuthScopes, context),
      }),
    ...(input.RedirectSignInURIs !== undefined &&
      input.RedirectSignInURIs !== null && {
        redirectSignInURIs: serializeAws_restJson1ListOf__string(input.RedirectSignInURIs, context),
      }),
    ...(input.RedirectSignOutURIs !== undefined &&
      input.RedirectSignOutURIs !== null && {
        redirectSignOutURIs: serializeAws_restJson1ListOf__string(input.RedirectSignOutURIs, context),
      }),
    ...(input.SocialProviderSettings !== undefined &&
      input.SocialProviderSettings !== null && {
        socialProviderSettings: serializeAws_restJson1SocialProviderSettings(input.SocialProviderSettings, context),
      }),
  };
};
const serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig = (input, context) => {
  return {
    ...(input.AdditionalConstraints !== undefined &&
      input.AdditionalConstraints !== null && {
        additionalConstraints: serializeAws_restJson1ListOfAdditionalConstraintsElement(
          input.AdditionalConstraints,
          context
        ),
      }),
    ...(input.MinimumLength !== undefined && input.MinimumLength !== null && { minimumLength: input.MinimumLength }),
  };
};
const serializeAws_restJson1CreateBackendAuthResourceConfig = (input, context) => {
  return {
    ...(input.AuthResources !== undefined && input.AuthResources !== null && { authResources: input.AuthResources }),
    ...(input.IdentityPoolConfigs !== undefined &&
      input.IdentityPoolConfigs !== null && {
        identityPoolConfigs: serializeAws_restJson1CreateBackendAuthIdentityPoolConfig(
          input.IdentityPoolConfigs,
          context
        ),
      }),
    ...(input.Service !== undefined && input.Service !== null && { service: input.Service }),
    ...(input.UserPoolConfigs !== undefined &&
      input.UserPoolConfigs !== null && {
        userPoolConfigs: serializeAws_restJson1CreateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
      }),
  };
};
const serializeAws_restJson1CreateBackendAuthUserPoolConfig = (input, context) => {
  return {
    ...(input.ForgotPassword !== undefined &&
      input.ForgotPassword !== null && {
        forgotPassword: serializeAws_restJson1CreateBackendAuthForgotPasswordConfig(input.ForgotPassword, context),
      }),
    ...(input.Mfa !== undefined &&
      input.Mfa !== null && { mfa: serializeAws_restJson1CreateBackendAuthMFAConfig(input.Mfa, context) }),
    ...(input.OAuth !== undefined &&
      input.OAuth !== null && { oAuth: serializeAws_restJson1CreateBackendAuthOAuthConfig(input.OAuth, context) }),
    ...(input.PasswordPolicy !== undefined &&
      input.PasswordPolicy !== null && {
        passwordPolicy: serializeAws_restJson1CreateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
      }),
    ...(input.RequiredSignUpAttributes !== undefined &&
      input.RequiredSignUpAttributes !== null && {
        requiredSignUpAttributes: serializeAws_restJson1ListOfRequiredSignUpAttributesElement(
          input.RequiredSignUpAttributes,
          context
        ),
      }),
    ...(input.SignInMethod !== undefined && input.SignInMethod !== null && { signInMethod: input.SignInMethod }),
    ...(input.UserPoolName !== undefined && input.UserPoolName !== null && { userPoolName: input.UserPoolName }),
  };
};
const serializeAws_restJson1EmailSettings = (input, context) => {
  return {
    ...(input.EmailMessage !== undefined && input.EmailMessage !== null && { emailMessage: input.EmailMessage }),
    ...(input.EmailSubject !== undefined && input.EmailSubject !== null && { emailSubject: input.EmailSubject }),
  };
};
const serializeAws_restJson1ListOf__string = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ListOfAdditionalConstraintsElement = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ListOfBackendAPIAuthType = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1BackendAPIAuthType(entry, context);
    });
};
const serializeAws_restJson1ListOfMfaTypesElement = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ListOfOAuthScopesElement = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ListOfRequiredSignUpAttributesElement = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1LoginAuthConfigReqObj = (input, context) => {
  return {
    ...(input.AwsCognitoIdentityPoolId !== undefined &&
      input.AwsCognitoIdentityPoolId !== null && { aws_cognito_identity_pool_id: input.AwsCognitoIdentityPoolId }),
    ...(input.AwsCognitoRegion !== undefined &&
      input.AwsCognitoRegion !== null && { aws_cognito_region: input.AwsCognitoRegion }),
    ...(input.AwsUserPoolsId !== undefined &&
      input.AwsUserPoolsId !== null && { aws_user_pools_id: input.AwsUserPoolsId }),
    ...(input.AwsUserPoolsWebClientId !== undefined &&
      input.AwsUserPoolsWebClientId !== null && { aws_user_pools_web_client_id: input.AwsUserPoolsWebClientId }),
  };
};
const serializeAws_restJson1ResourceConfig = (input, context) => {
  return {};
};
const serializeAws_restJson1Settings = (input, context) => {
  return {
    ...(input.MfaTypes !== undefined &&
      input.MfaTypes !== null && { mfaTypes: serializeAws_restJson1ListOfMfaTypesElement(input.MfaTypes, context) }),
    ...(input.SmsMessage !== undefined && input.SmsMessage !== null && { smsMessage: input.SmsMessage }),
  };
};
const serializeAws_restJson1SmsSettings = (input, context) => {
  return {
    ...(input.SmsMessage !== undefined && input.SmsMessage !== null && { smsMessage: input.SmsMessage }),
  };
};
const serializeAws_restJson1SocialProviderSettings = (input, context) => {
  return {
    ...(input.Facebook !== undefined &&
      input.Facebook !== null && {
        Facebook: serializeAws_restJson1BackendAuthSocialProviderConfig(input.Facebook, context),
      }),
    ...(input.Google !== undefined &&
      input.Google !== null && {
        Google: serializeAws_restJson1BackendAuthSocialProviderConfig(input.Google, context),
      }),
    ...(input.LoginWithAmazon !== undefined &&
      input.LoginWithAmazon !== null && {
        LoginWithAmazon: serializeAws_restJson1BackendAuthSocialProviderConfig(input.LoginWithAmazon, context),
      }),
  };
};
const serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig = (input, context) => {
  return {
    ...(input.DeliveryMethod !== undefined &&
      input.DeliveryMethod !== null && { deliveryMethod: input.DeliveryMethod }),
    ...(input.EmailSettings !== undefined &&
      input.EmailSettings !== null && {
        emailSettings: serializeAws_restJson1EmailSettings(input.EmailSettings, context),
      }),
    ...(input.SmsSettings !== undefined &&
      input.SmsSettings !== null && { smsSettings: serializeAws_restJson1SmsSettings(input.SmsSettings, context) }),
  };
};
const serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig = (input, context) => {
  return {
    ...(input.UnauthenticatedLogin !== undefined &&
      input.UnauthenticatedLogin !== null && { unauthenticatedLogin: input.UnauthenticatedLogin }),
  };
};
const serializeAws_restJson1UpdateBackendAuthMFAConfig = (input, context) => {
  return {
    ...(input.MFAMode !== undefined && input.MFAMode !== null && { MFAMode: input.MFAMode }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1Settings(input.Settings, context) }),
  };
};
const serializeAws_restJson1UpdateBackendAuthOAuthConfig = (input, context) => {
  return {
    ...(input.DomainPrefix !== undefined && input.DomainPrefix !== null && { domainPrefix: input.DomainPrefix }),
    ...(input.OAuthGrantType !== undefined &&
      input.OAuthGrantType !== null && { oAuthGrantType: input.OAuthGrantType }),
    ...(input.OAuthScopes !== undefined &&
      input.OAuthScopes !== null && {
        oAuthScopes: serializeAws_restJson1ListOfOAuthScopesElement(input.OAuthScopes, context),
      }),
    ...(input.RedirectSignInURIs !== undefined &&
      input.RedirectSignInURIs !== null && {
        redirectSignInURIs: serializeAws_restJson1ListOf__string(input.RedirectSignInURIs, context),
      }),
    ...(input.RedirectSignOutURIs !== undefined &&
      input.RedirectSignOutURIs !== null && {
        redirectSignOutURIs: serializeAws_restJson1ListOf__string(input.RedirectSignOutURIs, context),
      }),
    ...(input.SocialProviderSettings !== undefined &&
      input.SocialProviderSettings !== null && {
        socialProviderSettings: serializeAws_restJson1SocialProviderSettings(input.SocialProviderSettings, context),
      }),
  };
};
const serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig = (input, context) => {
  return {
    ...(input.AdditionalConstraints !== undefined &&
      input.AdditionalConstraints !== null && {
        additionalConstraints: serializeAws_restJson1ListOfAdditionalConstraintsElement(
          input.AdditionalConstraints,
          context
        ),
      }),
    ...(input.MinimumLength !== undefined && input.MinimumLength !== null && { minimumLength: input.MinimumLength }),
  };
};
const serializeAws_restJson1UpdateBackendAuthResourceConfig = (input, context) => {
  return {
    ...(input.AuthResources !== undefined && input.AuthResources !== null && { authResources: input.AuthResources }),
    ...(input.IdentityPoolConfigs !== undefined &&
      input.IdentityPoolConfigs !== null && {
        identityPoolConfigs: serializeAws_restJson1UpdateBackendAuthIdentityPoolConfig(
          input.IdentityPoolConfigs,
          context
        ),
      }),
    ...(input.Service !== undefined && input.Service !== null && { service: input.Service }),
    ...(input.UserPoolConfigs !== undefined &&
      input.UserPoolConfigs !== null && {
        userPoolConfigs: serializeAws_restJson1UpdateBackendAuthUserPoolConfig(input.UserPoolConfigs, context),
      }),
  };
};
const serializeAws_restJson1UpdateBackendAuthUserPoolConfig = (input, context) => {
  return {
    ...(input.ForgotPassword !== undefined &&
      input.ForgotPassword !== null && {
        forgotPassword: serializeAws_restJson1UpdateBackendAuthForgotPasswordConfig(input.ForgotPassword, context),
      }),
    ...(input.Mfa !== undefined &&
      input.Mfa !== null && { mfa: serializeAws_restJson1UpdateBackendAuthMFAConfig(input.Mfa, context) }),
    ...(input.OAuth !== undefined &&
      input.OAuth !== null && { oAuth: serializeAws_restJson1UpdateBackendAuthOAuthConfig(input.OAuth, context) }),
    ...(input.PasswordPolicy !== undefined &&
      input.PasswordPolicy !== null && {
        passwordPolicy: serializeAws_restJson1UpdateBackendAuthPasswordPolicyConfig(input.PasswordPolicy, context),
      }),
  };
};
const deserializeAws_restJson1BackendAPIAppSyncAuthSettings = (output, context) => {
  return {
    CognitoUserPoolId:
      output.cognitoUserPoolId !== undefined && output.cognitoUserPoolId !== null
        ? output.cognitoUserPoolId
        : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    ExpirationTime:
      output.expirationTime !== undefined && output.expirationTime !== null ? output.expirationTime : undefined,
    OpenIDAuthTTL:
      output.openIDAuthTTL !== undefined && output.openIDAuthTTL !== null ? output.openIDAuthTTL : undefined,
    OpenIDClientId:
      output.openIDClientId !== undefined && output.openIDClientId !== null ? output.openIDClientId : undefined,
    OpenIDIatTTL: output.openIDIatTTL !== undefined && output.openIDIatTTL !== null ? output.openIDIatTTL : undefined,
    OpenIDIssueURL:
      output.openIDIssueURL !== undefined && output.openIDIssueURL !== null ? output.openIDIssueURL : undefined,
    OpenIDProviderName:
      output.openIDProviderName !== undefined && output.openIDProviderName !== null
        ? output.openIDProviderName
        : undefined,
  };
};
const deserializeAws_restJson1BackendAPIAuthType = (output, context) => {
  return {
    Mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1BackendAPIAppSyncAuthSettings(output.settings, context)
        : undefined,
  };
};
const deserializeAws_restJson1BackendAPIConflictResolution = (output, context) => {
  return {
    ResolutionStrategy:
      output.resolutionStrategy !== undefined && output.resolutionStrategy !== null
        ? output.resolutionStrategy
        : undefined,
  };
};
const deserializeAws_restJson1BackendAPIResourceConfig = (output, context) => {
  return {
    AdditionalAuthTypes:
      output.additionalAuthTypes !== undefined && output.additionalAuthTypes !== null
        ? deserializeAws_restJson1ListOfBackendAPIAuthType(output.additionalAuthTypes, context)
        : undefined,
    ApiName: output.apiName !== undefined && output.apiName !== null ? output.apiName : undefined,
    ConflictResolution:
      output.conflictResolution !== undefined && output.conflictResolution !== null
        ? deserializeAws_restJson1BackendAPIConflictResolution(output.conflictResolution, context)
        : undefined,
    DefaultAuthType:
      output.defaultAuthType !== undefined && output.defaultAuthType !== null
        ? deserializeAws_restJson1BackendAPIAuthType(output.defaultAuthType, context)
        : undefined,
    Service: output.service !== undefined && output.service !== null ? output.service : undefined,
    TransformSchema:
      output.transformSchema !== undefined && output.transformSchema !== null ? output.transformSchema : undefined,
  };
};
const deserializeAws_restJson1BackendAuthSocialProviderConfig = (output, context) => {
  return {
    ClientId: output.client_id !== undefined && output.client_id !== null ? output.client_id : undefined,
    ClientSecret:
      output.client_secret !== undefined && output.client_secret !== null ? output.client_secret : undefined,
  };
};
const deserializeAws_restJson1BackendJobRespObj = (output, context) => {
  return {
    AppId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
    BackendEnvironmentName:
      output.backendEnvironmentName !== undefined && output.backendEnvironmentName !== null
        ? output.backendEnvironmentName
        : undefined,
    CreateTime: output.createTime !== undefined && output.createTime !== null ? output.createTime : undefined,
    Error: output.error !== undefined && output.error !== null ? output.error : undefined,
    JobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
    Operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
    Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    UpdateTime: output.updateTime !== undefined && output.updateTime !== null ? output.updateTime : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig = (output, context) => {
  return {
    DeliveryMethod:
      output.deliveryMethod !== undefined && output.deliveryMethod !== null ? output.deliveryMethod : undefined,
    EmailSettings:
      output.emailSettings !== undefined && output.emailSettings !== null
        ? deserializeAws_restJson1EmailSettings(output.emailSettings, context)
        : undefined,
    SmsSettings:
      output.smsSettings !== undefined && output.smsSettings !== null
        ? deserializeAws_restJson1SmsSettings(output.smsSettings, context)
        : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig = (output, context) => {
  return {
    IdentityPoolName:
      output.identityPoolName !== undefined && output.identityPoolName !== null ? output.identityPoolName : undefined,
    UnauthenticatedLogin:
      output.unauthenticatedLogin !== undefined && output.unauthenticatedLogin !== null
        ? output.unauthenticatedLogin
        : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthMFAConfig = (output, context) => {
  return {
    MFAMode: output.MFAMode !== undefined && output.MFAMode !== null ? output.MFAMode : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1Settings(output.settings, context)
        : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthOAuthConfig = (output, context) => {
  return {
    DomainPrefix: output.domainPrefix !== undefined && output.domainPrefix !== null ? output.domainPrefix : undefined,
    OAuthGrantType:
      output.oAuthGrantType !== undefined && output.oAuthGrantType !== null ? output.oAuthGrantType : undefined,
    OAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1ListOfOAuthScopesElement(output.oAuthScopes, context)
        : undefined,
    RedirectSignInURIs:
      output.redirectSignInURIs !== undefined && output.redirectSignInURIs !== null
        ? deserializeAws_restJson1ListOf__string(output.redirectSignInURIs, context)
        : undefined,
    RedirectSignOutURIs:
      output.redirectSignOutURIs !== undefined && output.redirectSignOutURIs !== null
        ? deserializeAws_restJson1ListOf__string(output.redirectSignOutURIs, context)
        : undefined,
    SocialProviderSettings:
      output.socialProviderSettings !== undefined && output.socialProviderSettings !== null
        ? deserializeAws_restJson1SocialProviderSettings(output.socialProviderSettings, context)
        : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig = (output, context) => {
  return {
    AdditionalConstraints:
      output.additionalConstraints !== undefined && output.additionalConstraints !== null
        ? deserializeAws_restJson1ListOfAdditionalConstraintsElement(output.additionalConstraints, context)
        : undefined,
    MinimumLength:
      output.minimumLength !== undefined && output.minimumLength !== null ? output.minimumLength : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthResourceConfig = (output, context) => {
  return {
    AuthResources:
      output.authResources !== undefined && output.authResources !== null ? output.authResources : undefined,
    IdentityPoolConfigs:
      output.identityPoolConfigs !== undefined && output.identityPoolConfigs !== null
        ? deserializeAws_restJson1CreateBackendAuthIdentityPoolConfig(output.identityPoolConfigs, context)
        : undefined,
    Service: output.service !== undefined && output.service !== null ? output.service : undefined,
    UserPoolConfigs:
      output.userPoolConfigs !== undefined && output.userPoolConfigs !== null
        ? deserializeAws_restJson1CreateBackendAuthUserPoolConfig(output.userPoolConfigs, context)
        : undefined,
  };
};
const deserializeAws_restJson1CreateBackendAuthUserPoolConfig = (output, context) => {
  return {
    ForgotPassword:
      output.forgotPassword !== undefined && output.forgotPassword !== null
        ? deserializeAws_restJson1CreateBackendAuthForgotPasswordConfig(output.forgotPassword, context)
        : undefined,
    Mfa:
      output.mfa !== undefined && output.mfa !== null
        ? deserializeAws_restJson1CreateBackendAuthMFAConfig(output.mfa, context)
        : undefined,
    OAuth:
      output.oAuth !== undefined && output.oAuth !== null
        ? deserializeAws_restJson1CreateBackendAuthOAuthConfig(output.oAuth, context)
        : undefined,
    PasswordPolicy:
      output.passwordPolicy !== undefined && output.passwordPolicy !== null
        ? deserializeAws_restJson1CreateBackendAuthPasswordPolicyConfig(output.passwordPolicy, context)
        : undefined,
    RequiredSignUpAttributes:
      output.requiredSignUpAttributes !== undefined && output.requiredSignUpAttributes !== null
        ? deserializeAws_restJson1ListOfRequiredSignUpAttributesElement(output.requiredSignUpAttributes, context)
        : undefined,
    SignInMethod: output.signInMethod !== undefined && output.signInMethod !== null ? output.signInMethod : undefined,
    UserPoolName: output.userPoolName !== undefined && output.userPoolName !== null ? output.userPoolName : undefined,
  };
};
const deserializeAws_restJson1EmailSettings = (output, context) => {
  return {
    EmailMessage: output.emailMessage !== undefined && output.emailMessage !== null ? output.emailMessage : undefined,
    EmailSubject: output.emailSubject !== undefined && output.emailSubject !== null ? output.emailSubject : undefined,
  };
};
const deserializeAws_restJson1ListOf__string = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfAdditionalConstraintsElement = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfBackendAPIAuthType = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackendAPIAuthType(entry, context);
    });
};
const deserializeAws_restJson1ListOfBackendJobRespObj = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1BackendJobRespObj(entry, context);
    });
};
const deserializeAws_restJson1ListOfMfaTypesElement = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfOAuthScopesElement = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ListOfRequiredSignUpAttributesElement = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1LoginAuthConfigReqObj = (output, context) => {
  return {
    AwsCognitoIdentityPoolId:
      output.aws_cognito_identity_pool_id !== undefined && output.aws_cognito_identity_pool_id !== null
        ? output.aws_cognito_identity_pool_id
        : undefined,
    AwsCognitoRegion:
      output.aws_cognito_region !== undefined && output.aws_cognito_region !== null
        ? output.aws_cognito_region
        : undefined,
    AwsUserPoolsId:
      output.aws_user_pools_id !== undefined && output.aws_user_pools_id !== null
        ? output.aws_user_pools_id
        : undefined,
    AwsUserPoolsWebClientId:
      output.aws_user_pools_web_client_id !== undefined && output.aws_user_pools_web_client_id !== null
        ? output.aws_user_pools_web_client_id
        : undefined,
  };
};
const deserializeAws_restJson1Settings = (output, context) => {
  return {
    MfaTypes:
      output.mfaTypes !== undefined && output.mfaTypes !== null
        ? deserializeAws_restJson1ListOfMfaTypesElement(output.mfaTypes, context)
        : undefined,
    SmsMessage: output.smsMessage !== undefined && output.smsMessage !== null ? output.smsMessage : undefined,
  };
};
const deserializeAws_restJson1SmsSettings = (output, context) => {
  return {
    SmsMessage: output.smsMessage !== undefined && output.smsMessage !== null ? output.smsMessage : undefined,
  };
};
const deserializeAws_restJson1SocialProviderSettings = (output, context) => {
  return {
    Facebook:
      output.Facebook !== undefined && output.Facebook !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.Facebook, context)
        : undefined,
    Google:
      output.Google !== undefined && output.Google !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.Google, context)
        : undefined,
    LoginWithAmazon:
      output.LoginWithAmazon !== undefined && output.LoginWithAmazon !== null
        ? deserializeAws_restJson1BackendAuthSocialProviderConfig(output.LoginWithAmazon, context)
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
