"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateReportDefinitionCommand =
  exports.deserializeAws_restJson1PutReportDefinitionCommand =
  exports.deserializeAws_restJson1ListReportDefinitionsCommand =
  exports.deserializeAws_restJson1ImportApplicationUsageCommand =
  exports.deserializeAws_restJson1GetReportDefinitionCommand =
  exports.deserializeAws_restJson1DeleteReportDefinitionCommand =
  exports.serializeAws_restJson1UpdateReportDefinitionCommand =
  exports.serializeAws_restJson1PutReportDefinitionCommand =
  exports.serializeAws_restJson1ListReportDefinitionsCommand =
  exports.serializeAws_restJson1ImportApplicationUsageCommand =
  exports.serializeAws_restJson1GetReportDefinitionCommand =
  exports.serializeAws_restJson1DeleteReportDefinitionCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1DeleteReportDefinitionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/reportDefinition/{reportId}";
  if (input.reportId !== undefined) {
    const labelValue = input.reportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: reportId.");
    }
    resolvedPath = resolvedPath.replace("{reportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: reportId.");
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
exports.serializeAws_restJson1DeleteReportDefinitionCommand = serializeAws_restJson1DeleteReportDefinitionCommand;
const serializeAws_restJson1GetReportDefinitionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/reportDefinition/{reportId}";
  if (input.reportId !== undefined) {
    const labelValue = input.reportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: reportId.");
    }
    resolvedPath = resolvedPath.replace("{reportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: reportId.");
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
exports.serializeAws_restJson1GetReportDefinitionCommand = serializeAws_restJson1GetReportDefinitionCommand;
const serializeAws_restJson1ImportApplicationUsageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/importApplicationUsage";
  let body;
  body = JSON.stringify({
    ...(input.sourceS3Location !== undefined &&
      input.sourceS3Location !== null && {
        sourceS3Location: serializeAws_restJson1SourceS3Location(input.sourceS3Location, context),
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
exports.serializeAws_restJson1ImportApplicationUsageCommand = serializeAws_restJson1ImportApplicationUsageCommand;
const serializeAws_restJson1ListReportDefinitionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/reportDefinition";
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
exports.serializeAws_restJson1ListReportDefinitionsCommand = serializeAws_restJson1ListReportDefinitionsCommand;
const serializeAws_restJson1PutReportDefinitionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/reportDefinition";
  let body;
  body = JSON.stringify({
    ...(input.destinationS3Location !== undefined &&
      input.destinationS3Location !== null && {
        destinationS3Location: serializeAws_restJson1S3Location(input.destinationS3Location, context),
      }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
    ...(input.reportDescription !== undefined &&
      input.reportDescription !== null && { reportDescription: input.reportDescription }),
    ...(input.reportFrequency !== undefined &&
      input.reportFrequency !== null && { reportFrequency: input.reportFrequency }),
    ...(input.reportId !== undefined && input.reportId !== null && { reportId: input.reportId }),
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
exports.serializeAws_restJson1PutReportDefinitionCommand = serializeAws_restJson1PutReportDefinitionCommand;
const serializeAws_restJson1UpdateReportDefinitionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/reportDefinition/{reportId}";
  if (input.reportId !== undefined) {
    const labelValue = input.reportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: reportId.");
    }
    resolvedPath = resolvedPath.replace("{reportId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: reportId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.destinationS3Location !== undefined &&
      input.destinationS3Location !== null && {
        destinationS3Location: serializeAws_restJson1S3Location(input.destinationS3Location, context),
      }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
    ...(input.reportDescription !== undefined &&
      input.reportDescription !== null && { reportDescription: input.reportDescription }),
    ...(input.reportFrequency !== undefined &&
      input.reportFrequency !== null && { reportFrequency: input.reportFrequency }),
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
exports.serializeAws_restJson1UpdateReportDefinitionCommand = serializeAws_restJson1UpdateReportDefinitionCommand;
const deserializeAws_restJson1DeleteReportDefinitionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReportDefinitionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    reportId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.reportId !== undefined && data.reportId !== null) {
    contents.reportId = data.reportId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteReportDefinitionCommand = deserializeAws_restJson1DeleteReportDefinitionCommand;
const deserializeAws_restJson1DeleteReportDefinitionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationcostprofiler#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationcostprofiler#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.applicationcostprofiler#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationcostprofiler#ValidationException":
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
const deserializeAws_restJson1GetReportDefinitionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReportDefinitionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    destinationS3Location: undefined,
    format: undefined,
    lastUpdated: undefined,
    reportDescription: undefined,
    reportFrequency: undefined,
    reportId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.destinationS3Location !== undefined && data.destinationS3Location !== null) {
    contents.destinationS3Location = deserializeAws_restJson1S3Location(data.destinationS3Location, context);
  }
  if (data.format !== undefined && data.format !== null) {
    contents.format = data.format;
  }
  if (data.lastUpdated !== undefined && data.lastUpdated !== null) {
    contents.lastUpdated = new Date(Math.round(data.lastUpdated * 1000));
  }
  if (data.reportDescription !== undefined && data.reportDescription !== null) {
    contents.reportDescription = data.reportDescription;
  }
  if (data.reportFrequency !== undefined && data.reportFrequency !== null) {
    contents.reportFrequency = data.reportFrequency;
  }
  if (data.reportId !== undefined && data.reportId !== null) {
    contents.reportId = data.reportId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetReportDefinitionCommand = deserializeAws_restJson1GetReportDefinitionCommand;
const deserializeAws_restJson1GetReportDefinitionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationcostprofiler#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationcostprofiler#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.applicationcostprofiler#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationcostprofiler#ValidationException":
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
const deserializeAws_restJson1ImportApplicationUsageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportApplicationUsageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    importId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = data.importId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ImportApplicationUsageCommand = deserializeAws_restJson1ImportApplicationUsageCommand;
const deserializeAws_restJson1ImportApplicationUsageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationcostprofiler#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationcostprofiler#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.applicationcostprofiler#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationcostprofiler#ValidationException":
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
const deserializeAws_restJson1ListReportDefinitionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReportDefinitionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    reportDefinitions: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.reportDefinitions !== undefined && data.reportDefinitions !== null) {
    contents.reportDefinitions = deserializeAws_restJson1ReportDefinitionList(data.reportDefinitions, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListReportDefinitionsCommand = deserializeAws_restJson1ListReportDefinitionsCommand;
const deserializeAws_restJson1ListReportDefinitionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationcostprofiler#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationcostprofiler#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.applicationcostprofiler#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationcostprofiler#ValidationException":
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
const deserializeAws_restJson1PutReportDefinitionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutReportDefinitionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    reportId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.reportId !== undefined && data.reportId !== null) {
    contents.reportId = data.reportId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutReportDefinitionCommand = deserializeAws_restJson1PutReportDefinitionCommand;
const deserializeAws_restJson1PutReportDefinitionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationcostprofiler#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationcostprofiler#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.applicationcostprofiler#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.applicationcostprofiler#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationcostprofiler#ValidationException":
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
const deserializeAws_restJson1UpdateReportDefinitionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReportDefinitionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    reportId: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.reportId !== undefined && data.reportId !== null) {
    contents.reportId = data.reportId;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateReportDefinitionCommand = deserializeAws_restJson1UpdateReportDefinitionCommand;
const deserializeAws_restJson1UpdateReportDefinitionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationcostprofiler#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.applicationcostprofiler#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.applicationcostprofiler#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationcostprofiler#ValidationException":
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
const serializeAws_restJson1S3Location = (input, context) => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};
const serializeAws_restJson1SourceS3Location = (input, context) => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.region !== undefined && input.region !== null && { region: input.region }),
  };
};
const deserializeAws_restJson1ReportDefinition = (output, context) => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    destinationS3Location:
      output.destinationS3Location !== undefined && output.destinationS3Location !== null
        ? deserializeAws_restJson1S3Location(output.destinationS3Location, context)
        : undefined,
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    reportDescription:
      output.reportDescription !== undefined && output.reportDescription !== null
        ? output.reportDescription
        : undefined,
    reportFrequency:
      output.reportFrequency !== undefined && output.reportFrequency !== null ? output.reportFrequency : undefined,
    reportId: output.reportId !== undefined && output.reportId !== null ? output.reportId : undefined,
  };
};
const deserializeAws_restJson1ReportDefinitionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ReportDefinition(entry, context);
    });
};
const deserializeAws_restJson1S3Location = (output, context) => {
  return {
    bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
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
