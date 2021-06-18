"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1SearchQuantumTasksCommand =
  exports.deserializeAws_restJson1SearchDevicesCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1GetQuantumTaskCommand =
  exports.deserializeAws_restJson1GetDeviceCommand =
  exports.deserializeAws_restJson1CreateQuantumTaskCommand =
  exports.deserializeAws_restJson1CancelQuantumTaskCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1SearchQuantumTasksCommand =
  exports.serializeAws_restJson1SearchDevicesCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1GetQuantumTaskCommand =
  exports.serializeAws_restJson1GetDeviceCommand =
  exports.serializeAws_restJson1CreateQuantumTaskCommand =
  exports.serializeAws_restJson1CancelQuantumTaskCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CancelQuantumTaskCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/quantum-task/{quantumTaskArn}/cancel";
  if (input.quantumTaskArn !== undefined) {
    const labelValue = input.quantumTaskArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: quantumTaskArn.");
    }
    resolvedPath = resolvedPath.replace("{quantumTaskArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: quantumTaskArn.");
  }
  let body;
  body = JSON.stringify({
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
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
exports.serializeAws_restJson1CancelQuantumTaskCommand = serializeAws_restJson1CancelQuantumTaskCommand;
const serializeAws_restJson1CreateQuantumTaskCommand = async (input, context) => {
  var _a;
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/quantum-task";
  let body;
  body = JSON.stringify({
    ...(input.action !== undefined &&
      input.action !== null && { action: smithy_client_1.LazyJsonString.fromObject(input.action) }),
    clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
    ...(input.deviceArn !== undefined && input.deviceArn !== null && { deviceArn: input.deviceArn }),
    ...(input.deviceParameters !== undefined &&
      input.deviceParameters !== null && {
        deviceParameters: smithy_client_1.LazyJsonString.fromObject(input.deviceParameters),
      }),
    ...(input.outputS3Bucket !== undefined &&
      input.outputS3Bucket !== null && { outputS3Bucket: input.outputS3Bucket }),
    ...(input.outputS3KeyPrefix !== undefined &&
      input.outputS3KeyPrefix !== null && { outputS3KeyPrefix: input.outputS3KeyPrefix }),
    ...(input.shots !== undefined && input.shots !== null && { shots: input.shots }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateQuantumTaskCommand = serializeAws_restJson1CreateQuantumTaskCommand;
const serializeAws_restJson1GetDeviceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/device/{deviceArn}";
  if (input.deviceArn !== undefined) {
    const labelValue = input.deviceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deviceArn.");
    }
    resolvedPath = resolvedPath.replace("{deviceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deviceArn.");
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
exports.serializeAws_restJson1GetDeviceCommand = serializeAws_restJson1GetDeviceCommand;
const serializeAws_restJson1GetQuantumTaskCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/quantum-task/{quantumTaskArn}";
  if (input.quantumTaskArn !== undefined) {
    const labelValue = input.quantumTaskArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: quantumTaskArn.");
    }
    resolvedPath = resolvedPath.replace("{quantumTaskArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: quantumTaskArn.");
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
exports.serializeAws_restJson1GetQuantumTaskCommand = serializeAws_restJson1GetQuantumTaskCommand;
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
const serializeAws_restJson1SearchDevicesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/devices";
  let body;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1SearchDevicesFilterList(input.filters, context) }),
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
exports.serializeAws_restJson1SearchDevicesCommand = serializeAws_restJson1SearchDevicesCommand;
const serializeAws_restJson1SearchQuantumTasksCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/quantum-tasks";
  let body;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && {
        filters: serializeAws_restJson1SearchQuantumTasksFilterList(input.filters, context),
      }),
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
exports.serializeAws_restJson1SearchQuantumTasksCommand = serializeAws_restJson1SearchQuantumTasksCommand;
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
      input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
const deserializeAws_restJson1CancelQuantumTaskCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelQuantumTaskCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    cancellationStatus: undefined,
    quantumTaskArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.cancellationStatus !== undefined && data.cancellationStatus !== null) {
    contents.cancellationStatus = data.cancellationStatus;
  }
  if (data.quantumTaskArn !== undefined && data.quantumTaskArn !== null) {
    contents.quantumTaskArn = data.quantumTaskArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelQuantumTaskCommand = deserializeAws_restJson1CancelQuantumTaskCommand;
const deserializeAws_restJson1CancelQuantumTaskCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.braket#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
const deserializeAws_restJson1CreateQuantumTaskCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateQuantumTaskCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    quantumTaskArn: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.quantumTaskArn !== undefined && data.quantumTaskArn !== null) {
    contents.quantumTaskArn = data.quantumTaskArn;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateQuantumTaskCommand = deserializeAws_restJson1CreateQuantumTaskCommand;
const deserializeAws_restJson1CreateQuantumTaskCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceOfflineException":
    case "com.amazonaws.braket#DeviceOfflineException":
      response = {
        ...(await deserializeAws_restJson1DeviceOfflineExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.braket#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
const deserializeAws_restJson1GetDeviceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    deviceArn: undefined,
    deviceCapabilities: undefined,
    deviceName: undefined,
    deviceStatus: undefined,
    deviceType: undefined,
    providerName: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.deviceArn !== undefined && data.deviceArn !== null) {
    contents.deviceArn = data.deviceArn;
  }
  if (data.deviceCapabilities !== undefined && data.deviceCapabilities !== null) {
    contents.deviceCapabilities = new smithy_client_1.LazyJsonString(data.deviceCapabilities);
  }
  if (data.deviceName !== undefined && data.deviceName !== null) {
    contents.deviceName = data.deviceName;
  }
  if (data.deviceStatus !== undefined && data.deviceStatus !== null) {
    contents.deviceStatus = data.deviceStatus;
  }
  if (data.deviceType !== undefined && data.deviceType !== null) {
    contents.deviceType = data.deviceType;
  }
  if (data.providerName !== undefined && data.providerName !== null) {
    contents.providerName = data.providerName;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeviceCommand = deserializeAws_restJson1GetDeviceCommand;
const deserializeAws_restJson1GetDeviceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceOfflineException":
    case "com.amazonaws.braket#DeviceOfflineException":
      response = {
        ...(await deserializeAws_restJson1DeviceOfflineExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeviceRetiredException":
    case "com.amazonaws.braket#DeviceRetiredException":
      response = {
        ...(await deserializeAws_restJson1DeviceRetiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
const deserializeAws_restJson1GetQuantumTaskCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetQuantumTaskCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    deviceArn: undefined,
    deviceParameters: undefined,
    endedAt: undefined,
    failureReason: undefined,
    outputS3Bucket: undefined,
    outputS3Directory: undefined,
    quantumTaskArn: undefined,
    shots: undefined,
    status: undefined,
    tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.deviceArn !== undefined && data.deviceArn !== null) {
    contents.deviceArn = data.deviceArn;
  }
  if (data.deviceParameters !== undefined && data.deviceParameters !== null) {
    contents.deviceParameters = new smithy_client_1.LazyJsonString(data.deviceParameters);
  }
  if (data.endedAt !== undefined && data.endedAt !== null) {
    contents.endedAt = new Date(Math.round(data.endedAt * 1000));
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.outputS3Bucket !== undefined && data.outputS3Bucket !== null) {
    contents.outputS3Bucket = data.outputS3Bucket;
  }
  if (data.outputS3Directory !== undefined && data.outputS3Directory !== null) {
    contents.outputS3Directory = data.outputS3Directory;
  }
  if (data.quantumTaskArn !== undefined && data.quantumTaskArn !== null) {
    contents.quantumTaskArn = data.quantumTaskArn;
  }
  if (data.shots !== undefined && data.shots !== null) {
    contents.shots = data.shots;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetQuantumTaskCommand = deserializeAws_restJson1GetQuantumTaskCommand;
const deserializeAws_restJson1GetQuantumTaskCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
const deserializeAws_restJson1SearchDevicesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDevicesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    devices: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.devices !== undefined && data.devices !== null) {
    contents.devices = deserializeAws_restJson1DeviceSummaryList(data.devices, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchDevicesCommand = deserializeAws_restJson1SearchDevicesCommand;
const deserializeAws_restJson1SearchDevicesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
const deserializeAws_restJson1SearchQuantumTasksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchQuantumTasksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    quantumTasks: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.quantumTasks !== undefined && data.quantumTasks !== null) {
    contents.quantumTasks = deserializeAws_restJson1QuantumTaskSummaryList(data.quantumTasks, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchQuantumTasksCommand = deserializeAws_restJson1SearchQuantumTasksCommand;
const deserializeAws_restJson1SearchQuantumTasksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.braket#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.braket#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
    case "InternalServiceException":
    case "com.amazonaws.braket#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.braket#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.braket#ValidationException":
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
const deserializeAws_restJson1DeviceOfflineExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DeviceOfflineException",
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
const deserializeAws_restJson1DeviceRetiredExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "DeviceRetiredException",
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
const deserializeAws_restJson1InternalServiceExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "InternalServiceException",
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
const serializeAws_restJson1SearchDevicesFilter = (input, context) => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1String256List(input.values, context) }),
  };
};
const serializeAws_restJson1SearchDevicesFilterList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1SearchDevicesFilter(entry, context);
    });
};
const serializeAws_restJson1SearchQuantumTasksFilter = (input, context) => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1String256List(input.values, context) }),
  };
};
const serializeAws_restJson1SearchQuantumTasksFilterList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1SearchQuantumTasksFilter(entry, context);
    });
};
const serializeAws_restJson1String256List = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1TagsMap = (input, context) => {
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
const deserializeAws_restJson1DeviceSummary = (output, context) => {
  return {
    deviceArn: output.deviceArn !== undefined && output.deviceArn !== null ? output.deviceArn : undefined,
    deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
    deviceStatus: output.deviceStatus !== undefined && output.deviceStatus !== null ? output.deviceStatus : undefined,
    deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
    providerName: output.providerName !== undefined && output.providerName !== null ? output.providerName : undefined,
  };
};
const deserializeAws_restJson1DeviceSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DeviceSummary(entry, context);
    });
};
const deserializeAws_restJson1QuantumTaskSummary = (output, context) => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    deviceArn: output.deviceArn !== undefined && output.deviceArn !== null ? output.deviceArn : undefined,
    endedAt:
      output.endedAt !== undefined && output.endedAt !== null ? new Date(Math.round(output.endedAt * 1000)) : undefined,
    outputS3Bucket:
      output.outputS3Bucket !== undefined && output.outputS3Bucket !== null ? output.outputS3Bucket : undefined,
    outputS3Directory:
      output.outputS3Directory !== undefined && output.outputS3Directory !== null
        ? output.outputS3Directory
        : undefined,
    quantumTaskArn:
      output.quantumTaskArn !== undefined && output.quantumTaskArn !== null ? output.quantumTaskArn : undefined,
    shots: output.shots !== undefined && output.shots !== null ? output.shots : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagsMap(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1QuantumTaskSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1QuantumTaskSummary(entry, context);
    });
};
const deserializeAws_restJson1TagsMap = (output, context) => {
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
