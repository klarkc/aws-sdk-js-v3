"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateFlowCommand =
  exports.deserializeAws_restJson1UpdateConnectorProfileCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1StopFlowCommand =
  exports.deserializeAws_restJson1StartFlowCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListFlowsCommand =
  exports.deserializeAws_restJson1ListConnectorEntitiesCommand =
  exports.deserializeAws_restJson1DescribeFlowExecutionRecordsCommand =
  exports.deserializeAws_restJson1DescribeFlowCommand =
  exports.deserializeAws_restJson1DescribeConnectorsCommand =
  exports.deserializeAws_restJson1DescribeConnectorProfilesCommand =
  exports.deserializeAws_restJson1DescribeConnectorEntityCommand =
  exports.deserializeAws_restJson1DeleteFlowCommand =
  exports.deserializeAws_restJson1DeleteConnectorProfileCommand =
  exports.deserializeAws_restJson1CreateFlowCommand =
  exports.deserializeAws_restJson1CreateConnectorProfileCommand =
  exports.serializeAws_restJson1UpdateFlowCommand =
  exports.serializeAws_restJson1UpdateConnectorProfileCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1StopFlowCommand =
  exports.serializeAws_restJson1StartFlowCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListFlowsCommand =
  exports.serializeAws_restJson1ListConnectorEntitiesCommand =
  exports.serializeAws_restJson1DescribeFlowExecutionRecordsCommand =
  exports.serializeAws_restJson1DescribeFlowCommand =
  exports.serializeAws_restJson1DescribeConnectorsCommand =
  exports.serializeAws_restJson1DescribeConnectorProfilesCommand =
  exports.serializeAws_restJson1DescribeConnectorEntityCommand =
  exports.serializeAws_restJson1DeleteFlowCommand =
  exports.serializeAws_restJson1DeleteConnectorProfileCommand =
  exports.serializeAws_restJson1CreateFlowCommand =
  exports.serializeAws_restJson1CreateConnectorProfileCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateConnectorProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/create-connector-profile";
  let body;
  body = JSON.stringify({
    ...(input.connectionMode !== undefined &&
      input.connectionMode !== null && { connectionMode: input.connectionMode }),
    ...(input.connectorProfileConfig !== undefined &&
      input.connectorProfileConfig !== null && {
        connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(input.connectorProfileConfig, context),
      }),
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.kmsArn !== undefined && input.kmsArn !== null && { kmsArn: input.kmsArn }),
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
exports.serializeAws_restJson1CreateConnectorProfileCommand = serializeAws_restJson1CreateConnectorProfileCommand;
const serializeAws_restJson1CreateFlowCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/create-flow";
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.destinationFlowConfigList !== undefined &&
      input.destinationFlowConfigList !== null && {
        destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
          input.destinationFlowConfigList,
          context
        ),
      }),
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.kmsArn !== undefined && input.kmsArn !== null && { kmsArn: input.kmsArn }),
    ...(input.sourceFlowConfig !== undefined &&
      input.sourceFlowConfig !== null && {
        sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.tasks !== undefined &&
      input.tasks !== null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }),
    ...(input.triggerConfig !== undefined &&
      input.triggerConfig !== null && {
        triggerConfig: serializeAws_restJson1TriggerConfig(input.triggerConfig, context),
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
exports.serializeAws_restJson1CreateFlowCommand = serializeAws_restJson1CreateFlowCommand;
const serializeAws_restJson1DeleteConnectorProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/delete-connector-profile";
  let body;
  body = JSON.stringify({
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.forceDelete !== undefined && input.forceDelete !== null && { forceDelete: input.forceDelete }),
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
exports.serializeAws_restJson1DeleteConnectorProfileCommand = serializeAws_restJson1DeleteConnectorProfileCommand;
const serializeAws_restJson1DeleteFlowCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/delete-flow";
  let body;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.forceDelete !== undefined && input.forceDelete !== null && { forceDelete: input.forceDelete }),
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
exports.serializeAws_restJson1DeleteFlowCommand = serializeAws_restJson1DeleteFlowCommand;
const serializeAws_restJson1DescribeConnectorEntityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describe-connector-entity";
  let body;
  body = JSON.stringify({
    ...(input.connectorEntityName !== undefined &&
      input.connectorEntityName !== null && { connectorEntityName: input.connectorEntityName }),
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
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
exports.serializeAws_restJson1DescribeConnectorEntityCommand = serializeAws_restJson1DescribeConnectorEntityCommand;
const serializeAws_restJson1DescribeConnectorProfilesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describe-connector-profiles";
  let body;
  body = JSON.stringify({
    ...(input.connectorProfileNames !== undefined &&
      input.connectorProfileNames !== null && {
        connectorProfileNames: serializeAws_restJson1ConnectorProfileNameList(input.connectorProfileNames, context),
      }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1DescribeConnectorProfilesCommand = serializeAws_restJson1DescribeConnectorProfilesCommand;
const serializeAws_restJson1DescribeConnectorsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describe-connectors";
  let body;
  body = JSON.stringify({
    ...(input.connectorTypes !== undefined &&
      input.connectorTypes !== null && {
        connectorTypes: serializeAws_restJson1ConnectorTypeList(input.connectorTypes, context),
      }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1DescribeConnectorsCommand = serializeAws_restJson1DescribeConnectorsCommand;
const serializeAws_restJson1DescribeFlowCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describe-flow";
  let body;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
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
exports.serializeAws_restJson1DescribeFlowCommand = serializeAws_restJson1DescribeFlowCommand;
const serializeAws_restJson1DescribeFlowExecutionRecordsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describe-flow-execution-records";
  let body;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1DescribeFlowExecutionRecordsCommand =
  serializeAws_restJson1DescribeFlowExecutionRecordsCommand;
const serializeAws_restJson1ListConnectorEntitiesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/list-connector-entities";
  let body;
  body = JSON.stringify({
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.entitiesPath !== undefined && input.entitiesPath !== null && { entitiesPath: input.entitiesPath }),
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
exports.serializeAws_restJson1ListConnectorEntitiesCommand = serializeAws_restJson1ListConnectorEntitiesCommand;
const serializeAws_restJson1ListFlowsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/list-flows";
  let body;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListFlowsCommand = serializeAws_restJson1ListFlowsCommand;
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
const serializeAws_restJson1StartFlowCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/start-flow";
  let body;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
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
exports.serializeAws_restJson1StartFlowCommand = serializeAws_restJson1StartFlowCommand;
const serializeAws_restJson1StopFlowCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/stop-flow";
  let body;
  body = JSON.stringify({
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
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
exports.serializeAws_restJson1StopFlowCommand = serializeAws_restJson1StopFlowCommand;
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
const serializeAws_restJson1UpdateConnectorProfileCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/update-connector-profile";
  let body;
  body = JSON.stringify({
    ...(input.connectionMode !== undefined &&
      input.connectionMode !== null && { connectionMode: input.connectionMode }),
    ...(input.connectorProfileConfig !== undefined &&
      input.connectorProfileConfig !== null && {
        connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(input.connectorProfileConfig, context),
      }),
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
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
exports.serializeAws_restJson1UpdateConnectorProfileCommand = serializeAws_restJson1UpdateConnectorProfileCommand;
const serializeAws_restJson1UpdateFlowCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/update-flow";
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.destinationFlowConfigList !== undefined &&
      input.destinationFlowConfigList !== null && {
        destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
          input.destinationFlowConfigList,
          context
        ),
      }),
    ...(input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
    ...(input.sourceFlowConfig !== undefined &&
      input.sourceFlowConfig !== null && {
        sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
      }),
    ...(input.tasks !== undefined &&
      input.tasks !== null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }),
    ...(input.triggerConfig !== undefined &&
      input.triggerConfig !== null && {
        triggerConfig: serializeAws_restJson1TriggerConfig(input.triggerConfig, context),
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
exports.serializeAws_restJson1UpdateFlowCommand = serializeAws_restJson1UpdateFlowCommand;
const deserializeAws_restJson1CreateConnectorProfileCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConnectorProfileCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    connectorProfileArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectorProfileArn !== undefined && data.connectorProfileArn !== null) {
    contents.connectorProfileArn = data.connectorProfileArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConnectorProfileCommand = deserializeAws_restJson1CreateConnectorProfileCommand;
const deserializeAws_restJson1CreateConnectorProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1CreateFlowCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFlowCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    flowArn: undefined,
    flowStatus: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = data.flowArn;
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = data.flowStatus;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFlowCommand = deserializeAws_restJson1CreateFlowCommand;
const deserializeAws_restJson1CreateFlowCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1DeleteConnectorProfileCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectorProfileCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConnectorProfileCommand = deserializeAws_restJson1DeleteConnectorProfileCommand;
const deserializeAws_restJson1DeleteConnectorProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
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
const deserializeAws_restJson1DeleteFlowCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFlowCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFlowCommand = deserializeAws_restJson1DeleteFlowCommand;
const deserializeAws_restJson1DeleteFlowCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
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
const deserializeAws_restJson1DescribeConnectorEntityCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorEntityCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    connectorEntityFields: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectorEntityFields !== undefined && data.connectorEntityFields !== null) {
    contents.connectorEntityFields = deserializeAws_restJson1ConnectorEntityFieldList(
      data.connectorEntityFields,
      context
    );
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeConnectorEntityCommand = deserializeAws_restJson1DescribeConnectorEntityCommand;
const deserializeAws_restJson1DescribeConnectorEntityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1DescribeConnectorProfilesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorProfilesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    connectorProfileDetails: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectorProfileDetails !== undefined && data.connectorProfileDetails !== null) {
    contents.connectorProfileDetails = deserializeAws_restJson1ConnectorProfileDetailList(
      data.connectorProfileDetails,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeConnectorProfilesCommand =
  deserializeAws_restJson1DescribeConnectorProfilesCommand;
const deserializeAws_restJson1DescribeConnectorProfilesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1DescribeConnectorsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConnectorsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    connectorConfigurations: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectorConfigurations !== undefined && data.connectorConfigurations !== null) {
    contents.connectorConfigurations = deserializeAws_restJson1ConnectorConfigurationsMap(
      data.connectorConfigurations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeConnectorsCommand = deserializeAws_restJson1DescribeConnectorsCommand;
const deserializeAws_restJson1DescribeConnectorsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1DescribeFlowCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    createdBy: undefined,
    description: undefined,
    destinationFlowConfigList: undefined,
    flowArn: undefined,
    flowName: undefined,
    flowStatus: undefined,
    flowStatusMessage: undefined,
    kmsArn: undefined,
    lastRunExecutionDetails: undefined,
    lastUpdatedAt: undefined,
    lastUpdatedBy: undefined,
    sourceFlowConfig: undefined,
    tags: undefined,
    tasks: undefined,
    triggerConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.createdBy !== undefined && data.createdBy !== null) {
    contents.createdBy = data.createdBy;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.destinationFlowConfigList !== undefined && data.destinationFlowConfigList !== null) {
    contents.destinationFlowConfigList = deserializeAws_restJson1DestinationFlowConfigList(
      data.destinationFlowConfigList,
      context
    );
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = data.flowArn;
  }
  if (data.flowName !== undefined && data.flowName !== null) {
    contents.flowName = data.flowName;
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = data.flowStatus;
  }
  if (data.flowStatusMessage !== undefined && data.flowStatusMessage !== null) {
    contents.flowStatusMessage = data.flowStatusMessage;
  }
  if (data.kmsArn !== undefined && data.kmsArn !== null) {
    contents.kmsArn = data.kmsArn;
  }
  if (data.lastRunExecutionDetails !== undefined && data.lastRunExecutionDetails !== null) {
    contents.lastRunExecutionDetails = deserializeAws_restJson1ExecutionDetails(data.lastRunExecutionDetails, context);
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.lastUpdatedBy !== undefined && data.lastUpdatedBy !== null) {
    contents.lastUpdatedBy = data.lastUpdatedBy;
  }
  if (data.sourceFlowConfig !== undefined && data.sourceFlowConfig !== null) {
    contents.sourceFlowConfig = deserializeAws_restJson1SourceFlowConfig(data.sourceFlowConfig, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.tasks !== undefined && data.tasks !== null) {
    contents.tasks = deserializeAws_restJson1Tasks(data.tasks, context);
  }
  if (data.triggerConfig !== undefined && data.triggerConfig !== null) {
    contents.triggerConfig = deserializeAws_restJson1TriggerConfig(data.triggerConfig, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFlowCommand = deserializeAws_restJson1DescribeFlowCommand;
const deserializeAws_restJson1DescribeFlowCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
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
const deserializeAws_restJson1DescribeFlowExecutionRecordsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    flowExecutions: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.flowExecutions !== undefined && data.flowExecutions !== null) {
    contents.flowExecutions = deserializeAws_restJson1FlowExecutionList(data.flowExecutions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFlowExecutionRecordsCommand =
  deserializeAws_restJson1DescribeFlowExecutionRecordsCommand;
const deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1ListConnectorEntitiesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConnectorEntitiesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    connectorEntityMap: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectorEntityMap !== undefined && data.connectorEntityMap !== null) {
    contents.connectorEntityMap = deserializeAws_restJson1ConnectorEntityMap(data.connectorEntityMap, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConnectorEntitiesCommand = deserializeAws_restJson1ListConnectorEntitiesCommand;
const deserializeAws_restJson1ListConnectorEntitiesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1ListFlowsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFlowsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    flows: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.flows !== undefined && data.flows !== null) {
    contents.flows = deserializeAws_restJson1FlowList(data.flows, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFlowsCommand = deserializeAws_restJson1ListFlowsCommand;
const deserializeAws_restJson1ListFlowsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1StartFlowCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFlowCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    executionId: undefined,
    flowArn: undefined,
    flowStatus: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.executionId !== undefined && data.executionId !== null) {
    contents.executionId = data.executionId;
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = data.flowArn;
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = data.flowStatus;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartFlowCommand = deserializeAws_restJson1StartFlowCommand;
const deserializeAws_restJson1StartFlowCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1StopFlowCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopFlowCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    flowArn: undefined,
    flowStatus: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.flowArn = data.flowArn;
  }
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = data.flowStatus;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopFlowCommand = deserializeAws_restJson1StopFlowCommand;
const deserializeAws_restJson1StopFlowCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.appflow#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
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
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1UpdateConnectorProfileCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectorProfileCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    connectorProfileArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectorProfileArn !== undefined && data.connectorProfileArn !== null) {
    contents.connectorProfileArn = data.connectorProfileArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConnectorProfileCommand = deserializeAws_restJson1UpdateConnectorProfileCommand;
const deserializeAws_restJson1UpdateConnectorProfileCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1UpdateFlowCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFlowCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    flowStatus: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.flowStatus !== undefined && data.flowStatus !== null) {
    contents.flowStatus = data.flowStatus;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFlowCommand = deserializeAws_restJson1UpdateFlowCommand;
const deserializeAws_restJson1UpdateFlowCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.appflow#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorAuthenticationException":
    case "com.amazonaws.appflow#ConnectorAuthenticationException":
      response = {
        ...(await deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConnectorServerException":
    case "com.amazonaws.appflow#ConnectorServerException":
      response = {
        ...(await deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appflow#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appflow#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appflow#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.appflow#ValidationException":
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
const deserializeAws_restJson1ConnectorAuthenticationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ConnectorAuthenticationException",
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
const deserializeAws_restJson1ConnectorServerExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ConnectorServerException",
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InternalServerException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ServiceQuotaExceededException",
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
const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "UnsupportedOperationException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ValidationException",
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
const serializeAws_restJson1AggregationConfig = (input, context) => {
  return {
    ...(input.aggregationType !== undefined &&
      input.aggregationType !== null && { aggregationType: input.aggregationType }),
  };
};
const serializeAws_restJson1AmplitudeConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
    ...(input.secretKey !== undefined && input.secretKey !== null && { secretKey: input.secretKey }),
  };
};
const serializeAws_restJson1AmplitudeConnectorProfileProperties = (input, context) => {
  return {};
};
const serializeAws_restJson1AmplitudeSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1ConnectorOAuthRequest = (input, context) => {
  return {
    ...(input.authCode !== undefined && input.authCode !== null && { authCode: input.authCode }),
    ...(input.redirectUri !== undefined && input.redirectUri !== null && { redirectUri: input.redirectUri }),
  };
};
const serializeAws_restJson1ConnectorOperator = (input, context) => {
  return {
    ...(input.Amplitude !== undefined && input.Amplitude !== null && { Amplitude: input.Amplitude }),
    ...(input.Datadog !== undefined && input.Datadog !== null && { Datadog: input.Datadog }),
    ...(input.Dynatrace !== undefined && input.Dynatrace !== null && { Dynatrace: input.Dynatrace }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && { GoogleAnalytics: input.GoogleAnalytics }),
    ...(input.InforNexus !== undefined && input.InforNexus !== null && { InforNexus: input.InforNexus }),
    ...(input.Marketo !== undefined && input.Marketo !== null && { Marketo: input.Marketo }),
    ...(input.S3 !== undefined && input.S3 !== null && { S3: input.S3 }),
    ...(input.Salesforce !== undefined && input.Salesforce !== null && { Salesforce: input.Salesforce }),
    ...(input.ServiceNow !== undefined && input.ServiceNow !== null && { ServiceNow: input.ServiceNow }),
    ...(input.Singular !== undefined && input.Singular !== null && { Singular: input.Singular }),
    ...(input.Slack !== undefined && input.Slack !== null && { Slack: input.Slack }),
    ...(input.Trendmicro !== undefined && input.Trendmicro !== null && { Trendmicro: input.Trendmicro }),
    ...(input.Veeva !== undefined && input.Veeva !== null && { Veeva: input.Veeva }),
    ...(input.Zendesk !== undefined && input.Zendesk !== null && { Zendesk: input.Zendesk }),
  };
};
const serializeAws_restJson1ConnectorProfileConfig = (input, context) => {
  return {
    ...(input.connectorProfileCredentials !== undefined &&
      input.connectorProfileCredentials !== null && {
        connectorProfileCredentials: serializeAws_restJson1ConnectorProfileCredentials(
          input.connectorProfileCredentials,
          context
        ),
      }),
    ...(input.connectorProfileProperties !== undefined &&
      input.connectorProfileProperties !== null && {
        connectorProfileProperties: serializeAws_restJson1ConnectorProfileProperties(
          input.connectorProfileProperties,
          context
        ),
      }),
  };
};
const serializeAws_restJson1ConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.Amplitude !== undefined &&
      input.Amplitude !== null && {
        Amplitude: serializeAws_restJson1AmplitudeConnectorProfileCredentials(input.Amplitude, context),
      }),
    ...(input.Datadog !== undefined &&
      input.Datadog !== null && {
        Datadog: serializeAws_restJson1DatadogConnectorProfileCredentials(input.Datadog, context),
      }),
    ...(input.Dynatrace !== undefined &&
      input.Dynatrace !== null && {
        Dynatrace: serializeAws_restJson1DynatraceConnectorProfileCredentials(input.Dynatrace, context),
      }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && {
        GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials(
          input.GoogleAnalytics,
          context
        ),
      }),
    ...(input.Honeycode !== undefined &&
      input.Honeycode !== null && {
        Honeycode: serializeAws_restJson1HoneycodeConnectorProfileCredentials(input.Honeycode, context),
      }),
    ...(input.InforNexus !== undefined &&
      input.InforNexus !== null && {
        InforNexus: serializeAws_restJson1InforNexusConnectorProfileCredentials(input.InforNexus, context),
      }),
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && {
        Marketo: serializeAws_restJson1MarketoConnectorProfileCredentials(input.Marketo, context),
      }),
    ...(input.Redshift !== undefined &&
      input.Redshift !== null && {
        Redshift: serializeAws_restJson1RedshiftConnectorProfileCredentials(input.Redshift, context),
      }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceConnectorProfileCredentials(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileCredentials(input.ServiceNow, context),
      }),
    ...(input.Singular !== undefined &&
      input.Singular !== null && {
        Singular: serializeAws_restJson1SingularConnectorProfileCredentials(input.Singular, context),
      }),
    ...(input.Slack !== undefined &&
      input.Slack !== null && { Slack: serializeAws_restJson1SlackConnectorProfileCredentials(input.Slack, context) }),
    ...(input.Snowflake !== undefined &&
      input.Snowflake !== null && {
        Snowflake: serializeAws_restJson1SnowflakeConnectorProfileCredentials(input.Snowflake, context),
      }),
    ...(input.Trendmicro !== undefined &&
      input.Trendmicro !== null && {
        Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileCredentials(input.Trendmicro, context),
      }),
    ...(input.Veeva !== undefined &&
      input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaConnectorProfileCredentials(input.Veeva, context) }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskConnectorProfileCredentials(input.Zendesk, context),
      }),
  };
};
const serializeAws_restJson1ConnectorProfileNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1ConnectorProfileProperties = (input, context) => {
  return {
    ...(input.Amplitude !== undefined &&
      input.Amplitude !== null && {
        Amplitude: serializeAws_restJson1AmplitudeConnectorProfileProperties(input.Amplitude, context),
      }),
    ...(input.Datadog !== undefined &&
      input.Datadog !== null && {
        Datadog: serializeAws_restJson1DatadogConnectorProfileProperties(input.Datadog, context),
      }),
    ...(input.Dynatrace !== undefined &&
      input.Dynatrace !== null && {
        Dynatrace: serializeAws_restJson1DynatraceConnectorProfileProperties(input.Dynatrace, context),
      }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && {
        GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(
          input.GoogleAnalytics,
          context
        ),
      }),
    ...(input.Honeycode !== undefined &&
      input.Honeycode !== null && {
        Honeycode: serializeAws_restJson1HoneycodeConnectorProfileProperties(input.Honeycode, context),
      }),
    ...(input.InforNexus !== undefined &&
      input.InforNexus !== null && {
        InforNexus: serializeAws_restJson1InforNexusConnectorProfileProperties(input.InforNexus, context),
      }),
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && {
        Marketo: serializeAws_restJson1MarketoConnectorProfileProperties(input.Marketo, context),
      }),
    ...(input.Redshift !== undefined &&
      input.Redshift !== null && {
        Redshift: serializeAws_restJson1RedshiftConnectorProfileProperties(input.Redshift, context),
      }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceConnectorProfileProperties(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileProperties(input.ServiceNow, context),
      }),
    ...(input.Singular !== undefined &&
      input.Singular !== null && {
        Singular: serializeAws_restJson1SingularConnectorProfileProperties(input.Singular, context),
      }),
    ...(input.Slack !== undefined &&
      input.Slack !== null && { Slack: serializeAws_restJson1SlackConnectorProfileProperties(input.Slack, context) }),
    ...(input.Snowflake !== undefined &&
      input.Snowflake !== null && {
        Snowflake: serializeAws_restJson1SnowflakeConnectorProfileProperties(input.Snowflake, context),
      }),
    ...(input.Trendmicro !== undefined &&
      input.Trendmicro !== null && {
        Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileProperties(input.Trendmicro, context),
      }),
    ...(input.Veeva !== undefined &&
      input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaConnectorProfileProperties(input.Veeva, context) }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskConnectorProfileProperties(input.Zendesk, context),
      }),
  };
};
const serializeAws_restJson1ConnectorTypeList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1CustomerProfilesDestinationProperties = (input, context) => {
  return {
    ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    ...(input.objectTypeName !== undefined &&
      input.objectTypeName !== null && { objectTypeName: input.objectTypeName }),
  };
};
const serializeAws_restJson1DatadogConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
    ...(input.applicationKey !== undefined &&
      input.applicationKey !== null && { applicationKey: input.applicationKey }),
  };
};
const serializeAws_restJson1DatadogConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1DatadogSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1DestinationConnectorProperties = (input, context) => {
  return {
    ...(input.CustomerProfiles !== undefined &&
      input.CustomerProfiles !== null && {
        CustomerProfiles: serializeAws_restJson1CustomerProfilesDestinationProperties(input.CustomerProfiles, context),
      }),
    ...(input.EventBridge !== undefined &&
      input.EventBridge !== null && {
        EventBridge: serializeAws_restJson1EventBridgeDestinationProperties(input.EventBridge, context),
      }),
    ...(input.Honeycode !== undefined &&
      input.Honeycode !== null && {
        Honeycode: serializeAws_restJson1HoneycodeDestinationProperties(input.Honeycode, context),
      }),
    ...(input.LookoutMetrics !== undefined &&
      input.LookoutMetrics !== null && {
        LookoutMetrics: serializeAws_restJson1LookoutMetricsDestinationProperties(input.LookoutMetrics, context),
      }),
    ...(input.Redshift !== undefined &&
      input.Redshift !== null && {
        Redshift: serializeAws_restJson1RedshiftDestinationProperties(input.Redshift, context),
      }),
    ...(input.S3 !== undefined &&
      input.S3 !== null && { S3: serializeAws_restJson1S3DestinationProperties(input.S3, context) }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceDestinationProperties(input.Salesforce, context),
      }),
    ...(input.Snowflake !== undefined &&
      input.Snowflake !== null && {
        Snowflake: serializeAws_restJson1SnowflakeDestinationProperties(input.Snowflake, context),
      }),
    ...(input.Upsolver !== undefined &&
      input.Upsolver !== null && {
        Upsolver: serializeAws_restJson1UpsolverDestinationProperties(input.Upsolver, context),
      }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskDestinationProperties(input.Zendesk, context),
      }),
  };
};
const serializeAws_restJson1DestinationFlowConfig = (input, context) => {
  return {
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.destinationConnectorProperties !== undefined &&
      input.destinationConnectorProperties !== null && {
        destinationConnectorProperties: serializeAws_restJson1DestinationConnectorProperties(
          input.destinationConnectorProperties,
          context
        ),
      }),
  };
};
const serializeAws_restJson1DestinationFlowConfigList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1DestinationFlowConfig(entry, context);
    });
};
const serializeAws_restJson1DynatraceConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.apiToken !== undefined && input.apiToken !== null && { apiToken: input.apiToken }),
  };
};
const serializeAws_restJson1DynatraceConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1DynatraceSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1ErrorHandlingConfig = (input, context) => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.failOnFirstDestinationError !== undefined &&
      input.failOnFirstDestinationError !== null && { failOnFirstDestinationError: input.failOnFirstDestinationError }),
  };
};
const serializeAws_restJson1EventBridgeDestinationProperties = (input, context) => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
  };
};
const serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties = (input, context) => {
  return {};
};
const serializeAws_restJson1GoogleAnalyticsSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1HoneycodeConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
  };
};
const serializeAws_restJson1HoneycodeConnectorProfileProperties = (input, context) => {
  return {};
};
const serializeAws_restJson1HoneycodeDestinationProperties = (input, context) => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1IdFieldNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1IncrementalPullConfig = (input, context) => {
  return {
    ...(input.datetimeTypeFieldName !== undefined &&
      input.datetimeTypeFieldName !== null && { datetimeTypeFieldName: input.datetimeTypeFieldName }),
  };
};
const serializeAws_restJson1InforNexusConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessKeyId !== undefined && input.accessKeyId !== null && { accessKeyId: input.accessKeyId }),
    ...(input.datakey !== undefined && input.datakey !== null && { datakey: input.datakey }),
    ...(input.secretAccessKey !== undefined &&
      input.secretAccessKey !== null && { secretAccessKey: input.secretAccessKey }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  };
};
const serializeAws_restJson1InforNexusConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1InforNexusSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1LookoutMetricsDestinationProperties = (input, context) => {
  return {};
};
const serializeAws_restJson1MarketoConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
  };
};
const serializeAws_restJson1MarketoConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1MarketoSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1PrefixConfig = (input, context) => {
  return {
    ...(input.prefixFormat !== undefined && input.prefixFormat !== null && { prefixFormat: input.prefixFormat }),
    ...(input.prefixType !== undefined && input.prefixType !== null && { prefixType: input.prefixType }),
  };
};
const serializeAws_restJson1RedshiftConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};
const serializeAws_restJson1RedshiftConnectorProfileProperties = (input, context) => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.databaseUrl !== undefined && input.databaseUrl !== null && { databaseUrl: input.databaseUrl }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};
const serializeAws_restJson1RedshiftDestinationProperties = (input, context) => {
  return {
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.intermediateBucketName !== undefined &&
      input.intermediateBucketName !== null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1S3DestinationProperties = (input, context) => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig !== undefined &&
      input.s3OutputFormatConfig !== null && {
        s3OutputFormatConfig: serializeAws_restJson1S3OutputFormatConfig(input.s3OutputFormatConfig, context),
      }),
  };
};
const serializeAws_restJson1S3OutputFormatConfig = (input, context) => {
  return {
    ...(input.aggregationConfig !== undefined &&
      input.aggregationConfig !== null && {
        aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
      }),
    ...(input.fileType !== undefined && input.fileType !== null && { fileType: input.fileType }),
    ...(input.prefixConfig !== undefined &&
      input.prefixConfig !== null && { prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context) }),
  };
};
const serializeAws_restJson1S3SourceProperties = (input, context) => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
  };
};
const serializeAws_restJson1SalesforceConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientCredentialsArn !== undefined &&
      input.clientCredentialsArn !== null && { clientCredentialsArn: input.clientCredentialsArn }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
    ...(input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }),
  };
};
const serializeAws_restJson1SalesforceConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
    ...(input.isSandboxEnvironment !== undefined &&
      input.isSandboxEnvironment !== null && { isSandboxEnvironment: input.isSandboxEnvironment }),
  };
};
const serializeAws_restJson1SalesforceDestinationProperties = (input, context) => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.idFieldNames !== undefined &&
      input.idFieldNames !== null && {
        idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
    ...(input.writeOperationType !== undefined &&
      input.writeOperationType !== null && { writeOperationType: input.writeOperationType }),
  };
};
const serializeAws_restJson1SalesforceSourceProperties = (input, context) => {
  return {
    ...(input.enableDynamicFieldUpdate !== undefined &&
      input.enableDynamicFieldUpdate !== null && { enableDynamicFieldUpdate: input.enableDynamicFieldUpdate }),
    ...(input.includeDeletedRecords !== undefined &&
      input.includeDeletedRecords !== null && { includeDeletedRecords: input.includeDeletedRecords }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1ScheduledTriggerProperties = (input, context) => {
  return {
    ...(input.dataPullMode !== undefined && input.dataPullMode !== null && { dataPullMode: input.dataPullMode }),
    ...(input.firstExecutionFrom !== undefined &&
      input.firstExecutionFrom !== null && {
        firstExecutionFrom: Math.round(input.firstExecutionFrom.getTime() / 1000),
      }),
    ...(input.scheduleEndTime !== undefined &&
      input.scheduleEndTime !== null && { scheduleEndTime: Math.round(input.scheduleEndTime.getTime() / 1000) }),
    ...(input.scheduleExpression !== undefined &&
      input.scheduleExpression !== null && { scheduleExpression: input.scheduleExpression }),
    ...(input.scheduleOffset !== undefined &&
      input.scheduleOffset !== null && { scheduleOffset: input.scheduleOffset }),
    ...(input.scheduleStartTime !== undefined &&
      input.scheduleStartTime !== null && { scheduleStartTime: Math.round(input.scheduleStartTime.getTime() / 1000) }),
    ...(input.timezone !== undefined && input.timezone !== null && { timezone: input.timezone }),
  };
};
const serializeAws_restJson1ServiceNowConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};
const serializeAws_restJson1ServiceNowConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1ServiceNowSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1SingularConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
  };
};
const serializeAws_restJson1SingularConnectorProfileProperties = (input, context) => {
  return {};
};
const serializeAws_restJson1SingularSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1SlackConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
  };
};
const serializeAws_restJson1SlackConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1SlackSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1SnowflakeConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};
const serializeAws_restJson1SnowflakeConnectorProfileProperties = (input, context) => {
  return {
    ...(input.accountName !== undefined && input.accountName !== null && { accountName: input.accountName }),
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.privateLinkServiceName !== undefined &&
      input.privateLinkServiceName !== null && { privateLinkServiceName: input.privateLinkServiceName }),
    ...(input.region !== undefined && input.region !== null && { region: input.region }),
    ...(input.stage !== undefined && input.stage !== null && { stage: input.stage }),
    ...(input.warehouse !== undefined && input.warehouse !== null && { warehouse: input.warehouse }),
  };
};
const serializeAws_restJson1SnowflakeDestinationProperties = (input, context) => {
  return {
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.intermediateBucketName !== undefined &&
      input.intermediateBucketName !== null && { intermediateBucketName: input.intermediateBucketName }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1SourceConnectorProperties = (input, context) => {
  return {
    ...(input.Amplitude !== undefined &&
      input.Amplitude !== null && {
        Amplitude: serializeAws_restJson1AmplitudeSourceProperties(input.Amplitude, context),
      }),
    ...(input.Datadog !== undefined &&
      input.Datadog !== null && { Datadog: serializeAws_restJson1DatadogSourceProperties(input.Datadog, context) }),
    ...(input.Dynatrace !== undefined &&
      input.Dynatrace !== null && {
        Dynatrace: serializeAws_restJson1DynatraceSourceProperties(input.Dynatrace, context),
      }),
    ...(input.GoogleAnalytics !== undefined &&
      input.GoogleAnalytics !== null && {
        GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsSourceProperties(input.GoogleAnalytics, context),
      }),
    ...(input.InforNexus !== undefined &&
      input.InforNexus !== null && {
        InforNexus: serializeAws_restJson1InforNexusSourceProperties(input.InforNexus, context),
      }),
    ...(input.Marketo !== undefined &&
      input.Marketo !== null && { Marketo: serializeAws_restJson1MarketoSourceProperties(input.Marketo, context) }),
    ...(input.S3 !== undefined &&
      input.S3 !== null && { S3: serializeAws_restJson1S3SourceProperties(input.S3, context) }),
    ...(input.Salesforce !== undefined &&
      input.Salesforce !== null && {
        Salesforce: serializeAws_restJson1SalesforceSourceProperties(input.Salesforce, context),
      }),
    ...(input.ServiceNow !== undefined &&
      input.ServiceNow !== null && {
        ServiceNow: serializeAws_restJson1ServiceNowSourceProperties(input.ServiceNow, context),
      }),
    ...(input.Singular !== undefined &&
      input.Singular !== null && { Singular: serializeAws_restJson1SingularSourceProperties(input.Singular, context) }),
    ...(input.Slack !== undefined &&
      input.Slack !== null && { Slack: serializeAws_restJson1SlackSourceProperties(input.Slack, context) }),
    ...(input.Trendmicro !== undefined &&
      input.Trendmicro !== null && {
        Trendmicro: serializeAws_restJson1TrendmicroSourceProperties(input.Trendmicro, context),
      }),
    ...(input.Veeva !== undefined &&
      input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaSourceProperties(input.Veeva, context) }),
    ...(input.Zendesk !== undefined &&
      input.Zendesk !== null && { Zendesk: serializeAws_restJson1ZendeskSourceProperties(input.Zendesk, context) }),
  };
};
const serializeAws_restJson1SourceFields = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1SourceFlowConfig = (input, context) => {
  return {
    ...(input.connectorProfileName !== undefined &&
      input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }),
    ...(input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }),
    ...(input.incrementalPullConfig !== undefined &&
      input.incrementalPullConfig !== null && {
        incrementalPullConfig: serializeAws_restJson1IncrementalPullConfig(input.incrementalPullConfig, context),
      }),
    ...(input.sourceConnectorProperties !== undefined &&
      input.sourceConnectorProperties !== null && {
        sourceConnectorProperties: serializeAws_restJson1SourceConnectorProperties(
          input.sourceConnectorProperties,
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
const serializeAws_restJson1Task = (input, context) => {
  return {
    ...(input.connectorOperator !== undefined &&
      input.connectorOperator !== null && {
        connectorOperator: serializeAws_restJson1ConnectorOperator(input.connectorOperator, context),
      }),
    ...(input.destinationField !== undefined &&
      input.destinationField !== null && { destinationField: input.destinationField }),
    ...(input.sourceFields !== undefined &&
      input.sourceFields !== null && { sourceFields: serializeAws_restJson1SourceFields(input.sourceFields, context) }),
    ...(input.taskProperties !== undefined &&
      input.taskProperties !== null && {
        taskProperties: serializeAws_restJson1TaskPropertiesMap(input.taskProperties, context),
      }),
    ...(input.taskType !== undefined && input.taskType !== null && { taskType: input.taskType }),
  };
};
const serializeAws_restJson1TaskPropertiesMap = (input, context) => {
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
const serializeAws_restJson1Tasks = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Task(entry, context);
    });
};
const serializeAws_restJson1TrendmicroConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.apiSecretKey !== undefined && input.apiSecretKey !== null && { apiSecretKey: input.apiSecretKey }),
  };
};
const serializeAws_restJson1TrendmicroConnectorProfileProperties = (input, context) => {
  return {};
};
const serializeAws_restJson1TrendmicroSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1TriggerConfig = (input, context) => {
  return {
    ...(input.triggerProperties !== undefined &&
      input.triggerProperties !== null && {
        triggerProperties: serializeAws_restJson1TriggerProperties(input.triggerProperties, context),
      }),
    ...(input.triggerType !== undefined && input.triggerType !== null && { triggerType: input.triggerType }),
  };
};
const serializeAws_restJson1TriggerProperties = (input, context) => {
  return {
    ...(input.Scheduled !== undefined &&
      input.Scheduled !== null && {
        Scheduled: serializeAws_restJson1ScheduledTriggerProperties(input.Scheduled, context),
      }),
  };
};
const serializeAws_restJson1UpsolverDestinationProperties = (input, context) => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }),
    ...(input.s3OutputFormatConfig !== undefined &&
      input.s3OutputFormatConfig !== null && {
        s3OutputFormatConfig: serializeAws_restJson1UpsolverS3OutputFormatConfig(input.s3OutputFormatConfig, context),
      }),
  };
};
const serializeAws_restJson1UpsolverS3OutputFormatConfig = (input, context) => {
  return {
    ...(input.aggregationConfig !== undefined &&
      input.aggregationConfig !== null && {
        aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
      }),
    ...(input.fileType !== undefined && input.fileType !== null && { fileType: input.fileType }),
    ...(input.prefixConfig !== undefined &&
      input.prefixConfig !== null && { prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context) }),
  };
};
const serializeAws_restJson1VeevaConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.password !== undefined && input.password !== null && { password: input.password }),
    ...(input.username !== undefined && input.username !== null && { username: input.username }),
  };
};
const serializeAws_restJson1VeevaConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1VeevaSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const serializeAws_restJson1ZendeskConnectorProfileCredentials = (input, context) => {
  return {
    ...(input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }),
    ...(input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }),
  };
};
const serializeAws_restJson1ZendeskConnectorProfileProperties = (input, context) => {
  return {
    ...(input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
  };
};
const serializeAws_restJson1ZendeskDestinationProperties = (input, context) => {
  return {
    ...(input.errorHandlingConfig !== undefined &&
      input.errorHandlingConfig !== null && {
        errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
      }),
    ...(input.idFieldNames !== undefined &&
      input.idFieldNames !== null && {
        idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
      }),
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
    ...(input.writeOperationType !== undefined &&
      input.writeOperationType !== null && { writeOperationType: input.writeOperationType }),
  };
};
const serializeAws_restJson1ZendeskSourceProperties = (input, context) => {
  return {
    ...(input.object !== undefined && input.object !== null && { object: input.object }),
  };
};
const deserializeAws_restJson1AggregationConfig = (output, context) => {
  return {
    aggregationType:
      output.aggregationType !== undefined && output.aggregationType !== null ? output.aggregationType : undefined,
  };
};
const deserializeAws_restJson1AmplitudeConnectorProfileProperties = (output, context) => {
  return {};
};
const deserializeAws_restJson1AmplitudeMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1AmplitudeSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1ConnectorConfiguration = (output, context) => {
  return {
    canUseAsDestination:
      output.canUseAsDestination !== undefined && output.canUseAsDestination !== null
        ? output.canUseAsDestination
        : undefined,
    canUseAsSource:
      output.canUseAsSource !== undefined && output.canUseAsSource !== null ? output.canUseAsSource : undefined,
    connectorMetadata:
      output.connectorMetadata !== undefined && output.connectorMetadata !== null
        ? deserializeAws_restJson1ConnectorMetadata(output.connectorMetadata, context)
        : undefined,
    isPrivateLinkEnabled:
      output.isPrivateLinkEnabled !== undefined && output.isPrivateLinkEnabled !== null
        ? output.isPrivateLinkEnabled
        : undefined,
    isPrivateLinkEndpointUrlRequired:
      output.isPrivateLinkEndpointUrlRequired !== undefined && output.isPrivateLinkEndpointUrlRequired !== null
        ? output.isPrivateLinkEndpointUrlRequired
        : undefined,
    supportedDestinationConnectors:
      output.supportedDestinationConnectors !== undefined && output.supportedDestinationConnectors !== null
        ? deserializeAws_restJson1ConnectorTypeList(output.supportedDestinationConnectors, context)
        : undefined,
    supportedSchedulingFrequencies:
      output.supportedSchedulingFrequencies !== undefined && output.supportedSchedulingFrequencies !== null
        ? deserializeAws_restJson1SchedulingFrequencyTypeList(output.supportedSchedulingFrequencies, context)
        : undefined,
    supportedTriggerTypes:
      output.supportedTriggerTypes !== undefined && output.supportedTriggerTypes !== null
        ? deserializeAws_restJson1TriggerTypeList(output.supportedTriggerTypes, context)
        : undefined,
  };
};
const deserializeAws_restJson1ConnectorConfigurationsMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ConnectorConfiguration(value, context),
    };
  }, {});
};
const deserializeAws_restJson1ConnectorEntity = (output, context) => {
  return {
    hasNestedEntities:
      output.hasNestedEntities !== undefined && output.hasNestedEntities !== null
        ? output.hasNestedEntities
        : undefined,
    label: output.label !== undefined && output.label !== null ? output.label : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1ConnectorEntityField = (output, context) => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    destinationProperties:
      output.destinationProperties !== undefined && output.destinationProperties !== null
        ? deserializeAws_restJson1DestinationFieldProperties(output.destinationProperties, context)
        : undefined,
    identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
    label: output.label !== undefined && output.label !== null ? output.label : undefined,
    sourceProperties:
      output.sourceProperties !== undefined && output.sourceProperties !== null
        ? deserializeAws_restJson1SourceFieldProperties(output.sourceProperties, context)
        : undefined,
    supportedFieldTypeDetails:
      output.supportedFieldTypeDetails !== undefined && output.supportedFieldTypeDetails !== null
        ? deserializeAws_restJson1SupportedFieldTypeDetails(output.supportedFieldTypeDetails, context)
        : undefined,
  };
};
const deserializeAws_restJson1ConnectorEntityFieldList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConnectorEntityField(entry, context);
    });
};
const deserializeAws_restJson1ConnectorEntityList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConnectorEntity(entry, context);
    });
};
const deserializeAws_restJson1ConnectorEntityMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ConnectorEntityList(value, context),
    };
  }, {});
};
const deserializeAws_restJson1ConnectorMetadata = (output, context) => {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeMetadata(output.Amplitude, context)
        : undefined,
    CustomerProfiles:
      output.CustomerProfiles !== undefined && output.CustomerProfiles !== null
        ? deserializeAws_restJson1CustomerProfilesMetadata(output.CustomerProfiles, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogMetadata(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceMetadata(output.Dynatrace, context)
        : undefined,
    EventBridge:
      output.EventBridge !== undefined && output.EventBridge !== null
        ? deserializeAws_restJson1EventBridgeMetadata(output.EventBridge, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsMetadata(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeMetadata(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusMetadata(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoMetadata(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftMetadata(output.Redshift, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3Metadata(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceMetadata(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowMetadata(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularMetadata(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackMetadata(output.Slack, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeMetadata(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroMetadata(output.Trendmicro, context)
        : undefined,
    Upsolver:
      output.Upsolver !== undefined && output.Upsolver !== null
        ? deserializeAws_restJson1UpsolverMetadata(output.Upsolver, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaMetadata(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskMetadata(output.Zendesk, context)
        : undefined,
  };
};
const deserializeAws_restJson1ConnectorOperator = (output, context) => {
  return {
    Amplitude: output.Amplitude !== undefined && output.Amplitude !== null ? output.Amplitude : undefined,
    Datadog: output.Datadog !== undefined && output.Datadog !== null ? output.Datadog : undefined,
    Dynatrace: output.Dynatrace !== undefined && output.Dynatrace !== null ? output.Dynatrace : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null ? output.GoogleAnalytics : undefined,
    InforNexus: output.InforNexus !== undefined && output.InforNexus !== null ? output.InforNexus : undefined,
    Marketo: output.Marketo !== undefined && output.Marketo !== null ? output.Marketo : undefined,
    S3: output.S3 !== undefined && output.S3 !== null ? output.S3 : undefined,
    Salesforce: output.Salesforce !== undefined && output.Salesforce !== null ? output.Salesforce : undefined,
    ServiceNow: output.ServiceNow !== undefined && output.ServiceNow !== null ? output.ServiceNow : undefined,
    Singular: output.Singular !== undefined && output.Singular !== null ? output.Singular : undefined,
    Slack: output.Slack !== undefined && output.Slack !== null ? output.Slack : undefined,
    Trendmicro: output.Trendmicro !== undefined && output.Trendmicro !== null ? output.Trendmicro : undefined,
    Veeva: output.Veeva !== undefined && output.Veeva !== null ? output.Veeva : undefined,
    Zendesk: output.Zendesk !== undefined && output.Zendesk !== null ? output.Zendesk : undefined,
  };
};
const deserializeAws_restJson1ConnectorProfile = (output, context) => {
  return {
    connectionMode:
      output.connectionMode !== undefined && output.connectionMode !== null ? output.connectionMode : undefined,
    connectorProfileArn:
      output.connectorProfileArn !== undefined && output.connectorProfileArn !== null
        ? output.connectorProfileArn
        : undefined,
    connectorProfileName:
      output.connectorProfileName !== undefined && output.connectorProfileName !== null
        ? output.connectorProfileName
        : undefined,
    connectorProfileProperties:
      output.connectorProfileProperties !== undefined && output.connectorProfileProperties !== null
        ? deserializeAws_restJson1ConnectorProfileProperties(output.connectorProfileProperties, context)
        : undefined,
    connectorType:
      output.connectorType !== undefined && output.connectorType !== null ? output.connectorType : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    credentialsArn:
      output.credentialsArn !== undefined && output.credentialsArn !== null ? output.credentialsArn : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1ConnectorProfileDetailList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConnectorProfile(entry, context);
    });
};
const deserializeAws_restJson1ConnectorProfileProperties = (output, context) => {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeConnectorProfileProperties(output.Amplitude, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogConnectorProfileProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceConnectorProfileProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeConnectorProfileProperties(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusConnectorProfileProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoConnectorProfileProperties(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftConnectorProfileProperties(output.Redshift, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceConnectorProfileProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowConnectorProfileProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularConnectorProfileProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackConnectorProfileProperties(output.Slack, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeConnectorProfileProperties(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroConnectorProfileProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaConnectorProfileProperties(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskConnectorProfileProperties(output.Zendesk, context)
        : undefined,
  };
};
const deserializeAws_restJson1ConnectorTypeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1CustomerProfilesDestinationProperties = (output, context) => {
  return {
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    objectTypeName:
      output.objectTypeName !== undefined && output.objectTypeName !== null ? output.objectTypeName : undefined,
  };
};
const deserializeAws_restJson1CustomerProfilesMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1DatadogConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1DatadogMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1DatadogSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1DestinationConnectorProperties = (output, context) => {
  return {
    CustomerProfiles:
      output.CustomerProfiles !== undefined && output.CustomerProfiles !== null
        ? deserializeAws_restJson1CustomerProfilesDestinationProperties(output.CustomerProfiles, context)
        : undefined,
    EventBridge:
      output.EventBridge !== undefined && output.EventBridge !== null
        ? deserializeAws_restJson1EventBridgeDestinationProperties(output.EventBridge, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeDestinationProperties(output.Honeycode, context)
        : undefined,
    LookoutMetrics:
      output.LookoutMetrics !== undefined && output.LookoutMetrics !== null
        ? deserializeAws_restJson1LookoutMetricsDestinationProperties(output.LookoutMetrics, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftDestinationProperties(output.Redshift, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3DestinationProperties(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceDestinationProperties(output.Salesforce, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeDestinationProperties(output.Snowflake, context)
        : undefined,
    Upsolver:
      output.Upsolver !== undefined && output.Upsolver !== null
        ? deserializeAws_restJson1UpsolverDestinationProperties(output.Upsolver, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskDestinationProperties(output.Zendesk, context)
        : undefined,
  };
};
const deserializeAws_restJson1DestinationFieldProperties = (output, context) => {
  return {
    isCreatable: output.isCreatable !== undefined && output.isCreatable !== null ? output.isCreatable : undefined,
    isNullable: output.isNullable !== undefined && output.isNullable !== null ? output.isNullable : undefined,
    isUpdatable: output.isUpdatable !== undefined && output.isUpdatable !== null ? output.isUpdatable : undefined,
    isUpsertable: output.isUpsertable !== undefined && output.isUpsertable !== null ? output.isUpsertable : undefined,
    supportedWriteOperations:
      output.supportedWriteOperations !== undefined && output.supportedWriteOperations !== null
        ? deserializeAws_restJson1SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  };
};
const deserializeAws_restJson1DestinationFlowConfig = (output, context) => {
  return {
    connectorProfileName:
      output.connectorProfileName !== undefined && output.connectorProfileName !== null
        ? output.connectorProfileName
        : undefined,
    connectorType:
      output.connectorType !== undefined && output.connectorType !== null ? output.connectorType : undefined,
    destinationConnectorProperties:
      output.destinationConnectorProperties !== undefined && output.destinationConnectorProperties !== null
        ? deserializeAws_restJson1DestinationConnectorProperties(output.destinationConnectorProperties, context)
        : undefined,
  };
};
const deserializeAws_restJson1DestinationFlowConfigList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DestinationFlowConfig(entry, context);
    });
};
const deserializeAws_restJson1DynatraceConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1DynatraceMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1DynatraceSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1ErrorHandlingConfig = (output, context) => {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    failOnFirstDestinationError:
      output.failOnFirstDestinationError !== undefined && output.failOnFirstDestinationError !== null
        ? output.failOnFirstDestinationError
        : undefined,
  };
};
const deserializeAws_restJson1ErrorInfo = (output, context) => {
  return {
    executionMessage:
      output.executionMessage !== undefined && output.executionMessage !== null ? output.executionMessage : undefined,
    putFailuresCount:
      output.putFailuresCount !== undefined && output.putFailuresCount !== null ? output.putFailuresCount : undefined,
  };
};
const deserializeAws_restJson1EventBridgeDestinationProperties = (output, context) => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1EventBridgeMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1ExecutionDetails = (output, context) => {
  return {
    mostRecentExecutionMessage:
      output.mostRecentExecutionMessage !== undefined && output.mostRecentExecutionMessage !== null
        ? output.mostRecentExecutionMessage
        : undefined,
    mostRecentExecutionStatus:
      output.mostRecentExecutionStatus !== undefined && output.mostRecentExecutionStatus !== null
        ? output.mostRecentExecutionStatus
        : undefined,
    mostRecentExecutionTime:
      output.mostRecentExecutionTime !== undefined && output.mostRecentExecutionTime !== null
        ? new Date(Math.round(output.mostRecentExecutionTime * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1ExecutionRecord = (output, context) => {
  return {
    dataPullEndTime:
      output.dataPullEndTime !== undefined && output.dataPullEndTime !== null
        ? new Date(Math.round(output.dataPullEndTime * 1000))
        : undefined,
    dataPullStartTime:
      output.dataPullStartTime !== undefined && output.dataPullStartTime !== null
        ? new Date(Math.round(output.dataPullStartTime * 1000))
        : undefined,
    executionId: output.executionId !== undefined && output.executionId !== null ? output.executionId : undefined,
    executionResult:
      output.executionResult !== undefined && output.executionResult !== null
        ? deserializeAws_restJson1ExecutionResult(output.executionResult, context)
        : undefined,
    executionStatus:
      output.executionStatus !== undefined && output.executionStatus !== null ? output.executionStatus : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? new Date(Math.round(output.startedAt * 1000))
        : undefined,
  };
};
const deserializeAws_restJson1ExecutionResult = (output, context) => {
  return {
    bytesProcessed:
      output.bytesProcessed !== undefined && output.bytesProcessed !== null ? output.bytesProcessed : undefined,
    bytesWritten: output.bytesWritten !== undefined && output.bytesWritten !== null ? output.bytesWritten : undefined,
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
        : undefined,
    recordsProcessed:
      output.recordsProcessed !== undefined && output.recordsProcessed !== null ? output.recordsProcessed : undefined,
  };
};
const deserializeAws_restJson1FieldTypeDetails = (output, context) => {
  return {
    fieldType: output.fieldType !== undefined && output.fieldType !== null ? output.fieldType : undefined,
    filterOperators:
      output.filterOperators !== undefined && output.filterOperators !== null
        ? deserializeAws_restJson1FilterOperatorList(output.filterOperators, context)
        : undefined,
    supportedValues:
      output.supportedValues !== undefined && output.supportedValues !== null
        ? deserializeAws_restJson1SupportedValueList(output.supportedValues, context)
        : undefined,
  };
};
const deserializeAws_restJson1FilterOperatorList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1FlowDefinition = (output, context) => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    destinationConnectorType:
      output.destinationConnectorType !== undefined && output.destinationConnectorType !== null
        ? output.destinationConnectorType
        : undefined,
    flowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
    flowName: output.flowName !== undefined && output.flowName !== null ? output.flowName : undefined,
    flowStatus: output.flowStatus !== undefined && output.flowStatus !== null ? output.flowStatus : undefined,
    lastRunExecutionDetails:
      output.lastRunExecutionDetails !== undefined && output.lastRunExecutionDetails !== null
        ? deserializeAws_restJson1ExecutionDetails(output.lastRunExecutionDetails, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
    sourceConnectorType:
      output.sourceConnectorType !== undefined && output.sourceConnectorType !== null
        ? output.sourceConnectorType
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
  };
};
const deserializeAws_restJson1FlowExecutionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ExecutionRecord(entry, context);
    });
};
const deserializeAws_restJson1FlowList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FlowDefinition(entry, context);
    });
};
const deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties = (output, context) => {
  return {};
};
const deserializeAws_restJson1GoogleAnalyticsMetadata = (output, context) => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
const deserializeAws_restJson1GoogleAnalyticsSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1HoneycodeConnectorProfileProperties = (output, context) => {
  return {};
};
const deserializeAws_restJson1HoneycodeDestinationProperties = (output, context) => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1HoneycodeMetadata = (output, context) => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
const deserializeAws_restJson1IdFieldNameList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1IncrementalPullConfig = (output, context) => {
  return {
    datetimeTypeFieldName:
      output.datetimeTypeFieldName !== undefined && output.datetimeTypeFieldName !== null
        ? output.datetimeTypeFieldName
        : undefined,
  };
};
const deserializeAws_restJson1InforNexusConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1InforNexusMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1InforNexusSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1LookoutMetricsDestinationProperties = (output, context) => {
  return {};
};
const deserializeAws_restJson1MarketoConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1MarketoMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1MarketoSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1OAuthScopeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1PrefixConfig = (output, context) => {
  return {
    prefixFormat: output.prefixFormat !== undefined && output.prefixFormat !== null ? output.prefixFormat : undefined,
    prefixType: output.prefixType !== undefined && output.prefixType !== null ? output.prefixType : undefined,
  };
};
const deserializeAws_restJson1RedshiftConnectorProfileProperties = (output, context) => {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    databaseUrl: output.databaseUrl !== undefined && output.databaseUrl !== null ? output.databaseUrl : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
  };
};
const deserializeAws_restJson1RedshiftDestinationProperties = (output, context) => {
  return {
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName:
      output.intermediateBucketName !== undefined && output.intermediateBucketName !== null
        ? output.intermediateBucketName
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1RedshiftMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1RegionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1S3DestinationProperties = (output, context) => {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    s3OutputFormatConfig:
      output.s3OutputFormatConfig !== undefined && output.s3OutputFormatConfig !== null
        ? deserializeAws_restJson1S3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1S3Metadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1S3OutputFormatConfig = (output, context) => {
  return {
    aggregationConfig:
      output.aggregationConfig !== undefined && output.aggregationConfig !== null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: output.fileType !== undefined && output.fileType !== null ? output.fileType : undefined,
    prefixConfig:
      output.prefixConfig !== undefined && output.prefixConfig !== null
        ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1S3SourceProperties = (output, context) => {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
  };
};
const deserializeAws_restJson1SalesforceConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
    isSandboxEnvironment:
      output.isSandboxEnvironment !== undefined && output.isSandboxEnvironment !== null
        ? output.isSandboxEnvironment
        : undefined,
  };
};
const deserializeAws_restJson1SalesforceDestinationProperties = (output, context) => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames !== undefined && output.idFieldNames !== null
        ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
    writeOperationType:
      output.writeOperationType !== undefined && output.writeOperationType !== null
        ? output.writeOperationType
        : undefined,
  };
};
const deserializeAws_restJson1SalesforceMetadata = (output, context) => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
const deserializeAws_restJson1SalesforceSourceProperties = (output, context) => {
  return {
    enableDynamicFieldUpdate:
      output.enableDynamicFieldUpdate !== undefined && output.enableDynamicFieldUpdate !== null
        ? output.enableDynamicFieldUpdate
        : undefined,
    includeDeletedRecords:
      output.includeDeletedRecords !== undefined && output.includeDeletedRecords !== null
        ? output.includeDeletedRecords
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1ScheduledTriggerProperties = (output, context) => {
  return {
    dataPullMode: output.dataPullMode !== undefined && output.dataPullMode !== null ? output.dataPullMode : undefined,
    firstExecutionFrom:
      output.firstExecutionFrom !== undefined && output.firstExecutionFrom !== null
        ? new Date(Math.round(output.firstExecutionFrom * 1000))
        : undefined,
    scheduleEndTime:
      output.scheduleEndTime !== undefined && output.scheduleEndTime !== null
        ? new Date(Math.round(output.scheduleEndTime * 1000))
        : undefined,
    scheduleExpression:
      output.scheduleExpression !== undefined && output.scheduleExpression !== null
        ? output.scheduleExpression
        : undefined,
    scheduleOffset:
      output.scheduleOffset !== undefined && output.scheduleOffset !== null ? output.scheduleOffset : undefined,
    scheduleStartTime:
      output.scheduleStartTime !== undefined && output.scheduleStartTime !== null
        ? new Date(Math.round(output.scheduleStartTime * 1000))
        : undefined,
    timezone: output.timezone !== undefined && output.timezone !== null ? output.timezone : undefined,
  };
};
const deserializeAws_restJson1SchedulingFrequencyTypeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1ServiceNowConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1ServiceNowMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1ServiceNowSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1SingularConnectorProfileProperties = (output, context) => {
  return {};
};
const deserializeAws_restJson1SingularMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1SingularSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1SlackConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1SlackMetadata = (output, context) => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
const deserializeAws_restJson1SlackSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1SnowflakeConnectorProfileProperties = (output, context) => {
  return {
    accountName: output.accountName !== undefined && output.accountName !== null ? output.accountName : undefined,
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    privateLinkServiceName:
      output.privateLinkServiceName !== undefined && output.privateLinkServiceName !== null
        ? output.privateLinkServiceName
        : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
    warehouse: output.warehouse !== undefined && output.warehouse !== null ? output.warehouse : undefined,
  };
};
const deserializeAws_restJson1SnowflakeDestinationProperties = (output, context) => {
  return {
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName:
      output.intermediateBucketName !== undefined && output.intermediateBucketName !== null
        ? output.intermediateBucketName
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1SnowflakeMetadata = (output, context) => {
  return {
    supportedRegions:
      output.supportedRegions !== undefined && output.supportedRegions !== null
        ? deserializeAws_restJson1RegionList(output.supportedRegions, context)
        : undefined,
  };
};
const deserializeAws_restJson1SourceConnectorProperties = (output, context) => {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeSourceProperties(output.Amplitude, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogSourceProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceSourceProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsSourceProperties(output.GoogleAnalytics, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusSourceProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoSourceProperties(output.Marketo, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3SourceProperties(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceSourceProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowSourceProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularSourceProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackSourceProperties(output.Slack, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroSourceProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaSourceProperties(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskSourceProperties(output.Zendesk, context)
        : undefined,
  };
};
const deserializeAws_restJson1SourceFieldProperties = (output, context) => {
  return {
    isQueryable: output.isQueryable !== undefined && output.isQueryable !== null ? output.isQueryable : undefined,
    isRetrievable:
      output.isRetrievable !== undefined && output.isRetrievable !== null ? output.isRetrievable : undefined,
  };
};
const deserializeAws_restJson1SourceFields = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1SourceFlowConfig = (output, context) => {
  return {
    connectorProfileName:
      output.connectorProfileName !== undefined && output.connectorProfileName !== null
        ? output.connectorProfileName
        : undefined,
    connectorType:
      output.connectorType !== undefined && output.connectorType !== null ? output.connectorType : undefined,
    incrementalPullConfig:
      output.incrementalPullConfig !== undefined && output.incrementalPullConfig !== null
        ? deserializeAws_restJson1IncrementalPullConfig(output.incrementalPullConfig, context)
        : undefined,
    sourceConnectorProperties:
      output.sourceConnectorProperties !== undefined && output.sourceConnectorProperties !== null
        ? deserializeAws_restJson1SourceConnectorProperties(output.sourceConnectorProperties, context)
        : undefined,
  };
};
const deserializeAws_restJson1SupportedFieldTypeDetails = (output, context) => {
  return {
    v1:
      output.v1 !== undefined && output.v1 !== null
        ? deserializeAws_restJson1FieldTypeDetails(output.v1, context)
        : undefined,
  };
};
const deserializeAws_restJson1SupportedValueList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1SupportedWriteOperationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
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
const deserializeAws_restJson1Task = (output, context) => {
  return {
    connectorOperator:
      output.connectorOperator !== undefined && output.connectorOperator !== null
        ? deserializeAws_restJson1ConnectorOperator(output.connectorOperator, context)
        : undefined,
    destinationField:
      output.destinationField !== undefined && output.destinationField !== null ? output.destinationField : undefined,
    sourceFields:
      output.sourceFields !== undefined && output.sourceFields !== null
        ? deserializeAws_restJson1SourceFields(output.sourceFields, context)
        : undefined,
    taskProperties:
      output.taskProperties !== undefined && output.taskProperties !== null
        ? deserializeAws_restJson1TaskPropertiesMap(output.taskProperties, context)
        : undefined,
    taskType: output.taskType !== undefined && output.taskType !== null ? output.taskType : undefined,
  };
};
const deserializeAws_restJson1TaskPropertiesMap = (output, context) => {
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
const deserializeAws_restJson1Tasks = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Task(entry, context);
    });
};
const deserializeAws_restJson1TrendmicroConnectorProfileProperties = (output, context) => {
  return {};
};
const deserializeAws_restJson1TrendmicroMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1TrendmicroSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1TriggerConfig = (output, context) => {
  return {
    triggerProperties:
      output.triggerProperties !== undefined && output.triggerProperties !== null
        ? deserializeAws_restJson1TriggerProperties(output.triggerProperties, context)
        : undefined,
    triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
  };
};
const deserializeAws_restJson1TriggerProperties = (output, context) => {
  return {
    Scheduled:
      output.Scheduled !== undefined && output.Scheduled !== null
        ? deserializeAws_restJson1ScheduledTriggerProperties(output.Scheduled, context)
        : undefined,
  };
};
const deserializeAws_restJson1TriggerTypeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1UpsolverDestinationProperties = (output, context) => {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    s3OutputFormatConfig:
      output.s3OutputFormatConfig !== undefined && output.s3OutputFormatConfig !== null
        ? deserializeAws_restJson1UpsolverS3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1UpsolverMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1UpsolverS3OutputFormatConfig = (output, context) => {
  return {
    aggregationConfig:
      output.aggregationConfig !== undefined && output.aggregationConfig !== null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: output.fileType !== undefined && output.fileType !== null ? output.fileType : undefined,
    prefixConfig:
      output.prefixConfig !== undefined && output.prefixConfig !== null
        ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1VeevaConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1VeevaMetadata = (output, context) => {
  return {};
};
const deserializeAws_restJson1VeevaSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
const deserializeAws_restJson1ZendeskConnectorProfileProperties = (output, context) => {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
const deserializeAws_restJson1ZendeskDestinationProperties = (output, context) => {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames !== undefined && output.idFieldNames !== null
        ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
    writeOperationType:
      output.writeOperationType !== undefined && output.writeOperationType !== null
        ? output.writeOperationType
        : undefined,
  };
};
const deserializeAws_restJson1ZendeskMetadata = (output, context) => {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
const deserializeAws_restJson1ZendeskSourceProperties = (output, context) => {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
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
