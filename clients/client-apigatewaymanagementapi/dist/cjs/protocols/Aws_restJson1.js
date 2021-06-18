"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PostToConnectionCommand =
  exports.deserializeAws_restJson1GetConnectionCommand =
  exports.deserializeAws_restJson1DeleteConnectionCommand =
  exports.serializeAws_restJson1PostToConnectionCommand =
  exports.serializeAws_restJson1GetConnectionCommand =
  exports.serializeAws_restJson1DeleteConnectionCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DeleteConnectionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
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
exports.serializeAws_restJson1DeleteConnectionCommand = serializeAws_restJson1DeleteConnectionCommand;
const serializeAws_restJson1GetConnectionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
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
exports.serializeAws_restJson1GetConnectionCommand = serializeAws_restJson1GetConnectionCommand;
const serializeAws_restJson1PostToConnectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath = "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{ConnectionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
  let body;
  if (input.Data !== undefined) {
    body = input.Data;
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
exports.serializeAws_restJson1PostToConnectionCommand = serializeAws_restJson1PostToConnectionCommand;
const deserializeAws_restJson1DeleteConnectionCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConnectionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConnectionCommand = deserializeAws_restJson1DeleteConnectionCommand;
const deserializeAws_restJson1DeleteConnectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetConnectionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ConnectedAt: undefined,
    Identity: undefined,
    LastActiveAt: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.connectedAt !== undefined && data.connectedAt !== null) {
    contents.ConnectedAt = new Date(data.connectedAt);
  }
  if (data.identity !== undefined && data.identity !== null) {
    contents.Identity = deserializeAws_restJson1Identity(data.identity, context);
  }
  if (data.lastActiveAt !== undefined && data.lastActiveAt !== null) {
    contents.LastActiveAt = new Date(data.lastActiveAt);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConnectionCommand = deserializeAws_restJson1GetConnectionCommand;
const deserializeAws_restJson1GetConnectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PostToConnectionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PostToConnectionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PostToConnectionCommand = deserializeAws_restJson1PostToConnectionCommand;
const deserializeAws_restJson1PostToConnectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.apigatewaymanagementapi#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data = parsedOutput.body;
  return contents;
};
const deserializeAws_restJson1GoneExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "GoneException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data = parsedOutput.body;
  return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data = parsedOutput.body;
  return contents;
};
const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "PayloadTooLargeException",
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
const deserializeAws_restJson1Identity = (output, context) => {
  return {
    SourceIp: output.sourceIp !== undefined && output.sourceIp !== null ? output.sourceIp : undefined,
    UserAgent: output.userAgent !== undefined && output.userAgent !== null ? output.userAgent : undefined,
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
