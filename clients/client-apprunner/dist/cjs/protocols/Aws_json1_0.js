"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_0UpdateServiceCommand =
  exports.deserializeAws_json1_0UntagResourceCommand =
  exports.deserializeAws_json1_0TagResourceCommand =
  exports.deserializeAws_json1_0StartDeploymentCommand =
  exports.deserializeAws_json1_0ResumeServiceCommand =
  exports.deserializeAws_json1_0PauseServiceCommand =
  exports.deserializeAws_json1_0ListTagsForResourceCommand =
  exports.deserializeAws_json1_0ListServicesCommand =
  exports.deserializeAws_json1_0ListOperationsCommand =
  exports.deserializeAws_json1_0ListConnectionsCommand =
  exports.deserializeAws_json1_0ListAutoScalingConfigurationsCommand =
  exports.deserializeAws_json1_0DisassociateCustomDomainCommand =
  exports.deserializeAws_json1_0DescribeServiceCommand =
  exports.deserializeAws_json1_0DescribeCustomDomainsCommand =
  exports.deserializeAws_json1_0DescribeAutoScalingConfigurationCommand =
  exports.deserializeAws_json1_0DeleteServiceCommand =
  exports.deserializeAws_json1_0DeleteConnectionCommand =
  exports.deserializeAws_json1_0DeleteAutoScalingConfigurationCommand =
  exports.deserializeAws_json1_0CreateServiceCommand =
  exports.deserializeAws_json1_0CreateConnectionCommand =
  exports.deserializeAws_json1_0CreateAutoScalingConfigurationCommand =
  exports.deserializeAws_json1_0AssociateCustomDomainCommand =
  exports.serializeAws_json1_0UpdateServiceCommand =
  exports.serializeAws_json1_0UntagResourceCommand =
  exports.serializeAws_json1_0TagResourceCommand =
  exports.serializeAws_json1_0StartDeploymentCommand =
  exports.serializeAws_json1_0ResumeServiceCommand =
  exports.serializeAws_json1_0PauseServiceCommand =
  exports.serializeAws_json1_0ListTagsForResourceCommand =
  exports.serializeAws_json1_0ListServicesCommand =
  exports.serializeAws_json1_0ListOperationsCommand =
  exports.serializeAws_json1_0ListConnectionsCommand =
  exports.serializeAws_json1_0ListAutoScalingConfigurationsCommand =
  exports.serializeAws_json1_0DisassociateCustomDomainCommand =
  exports.serializeAws_json1_0DescribeServiceCommand =
  exports.serializeAws_json1_0DescribeCustomDomainsCommand =
  exports.serializeAws_json1_0DescribeAutoScalingConfigurationCommand =
  exports.serializeAws_json1_0DeleteServiceCommand =
  exports.serializeAws_json1_0DeleteConnectionCommand =
  exports.serializeAws_json1_0DeleteAutoScalingConfigurationCommand =
  exports.serializeAws_json1_0CreateServiceCommand =
  exports.serializeAws_json1_0CreateConnectionCommand =
  exports.serializeAws_json1_0CreateAutoScalingConfigurationCommand =
  exports.serializeAws_json1_0AssociateCustomDomainCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_0AssociateCustomDomainCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.AssociateCustomDomain",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0AssociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0AssociateCustomDomainCommand = serializeAws_json1_0AssociateCustomDomainCommand;
const serializeAws_json1_0CreateAutoScalingConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateAutoScalingConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0CreateAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateAutoScalingConfigurationCommand =
  serializeAws_json1_0CreateAutoScalingConfigurationCommand;
const serializeAws_json1_0CreateConnectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateConnection",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateConnectionCommand = serializeAws_json1_0CreateConnectionCommand;
const serializeAws_json1_0CreateServiceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateService",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0CreateServiceCommand = serializeAws_json1_0CreateServiceCommand;
const serializeAws_json1_0DeleteAutoScalingConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteAutoScalingConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DeleteAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteAutoScalingConfigurationCommand =
  serializeAws_json1_0DeleteAutoScalingConfigurationCommand;
const serializeAws_json1_0DeleteConnectionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteConnection",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteConnectionCommand = serializeAws_json1_0DeleteConnectionCommand;
const serializeAws_json1_0DeleteServiceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteService",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DeleteServiceCommand = serializeAws_json1_0DeleteServiceCommand;
const serializeAws_json1_0DescribeAutoScalingConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeAutoScalingConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DescribeAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeAutoScalingConfigurationCommand =
  serializeAws_json1_0DescribeAutoScalingConfigurationCommand;
const serializeAws_json1_0DescribeCustomDomainsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeCustomDomains",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DescribeCustomDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeCustomDomainsCommand = serializeAws_json1_0DescribeCustomDomainsCommand;
const serializeAws_json1_0DescribeServiceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeService",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DescribeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DescribeServiceCommand = serializeAws_json1_0DescribeServiceCommand;
const serializeAws_json1_0DisassociateCustomDomainCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DisassociateCustomDomain",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0DisassociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0DisassociateCustomDomainCommand = serializeAws_json1_0DisassociateCustomDomainCommand;
const serializeAws_json1_0ListAutoScalingConfigurationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListAutoScalingConfigurations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0ListAutoScalingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListAutoScalingConfigurationsCommand =
  serializeAws_json1_0ListAutoScalingConfigurationsCommand;
const serializeAws_json1_0ListConnectionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListConnections",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0ListConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListConnectionsCommand = serializeAws_json1_0ListConnectionsCommand;
const serializeAws_json1_0ListOperationsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListOperations",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListOperationsCommand = serializeAws_json1_0ListOperationsCommand;
const serializeAws_json1_0ListServicesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListServices",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListServicesCommand = serializeAws_json1_0ListServicesCommand;
const serializeAws_json1_0ListTagsForResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListTagsForResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ListTagsForResourceCommand = serializeAws_json1_0ListTagsForResourceCommand;
const serializeAws_json1_0PauseServiceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.PauseService",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0PauseServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0PauseServiceCommand = serializeAws_json1_0PauseServiceCommand;
const serializeAws_json1_0ResumeServiceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ResumeService",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0ResumeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0ResumeServiceCommand = serializeAws_json1_0ResumeServiceCommand;
const serializeAws_json1_0StartDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.StartDeployment",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0StartDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0StartDeploymentCommand = serializeAws_json1_0StartDeploymentCommand;
const serializeAws_json1_0TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.TagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0TagResourceCommand = serializeAws_json1_0TagResourceCommand;
const serializeAws_json1_0UntagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UntagResource",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UntagResourceCommand = serializeAws_json1_0UntagResourceCommand;
const serializeAws_json1_0UpdateServiceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UpdateService",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_0UpdateServiceCommand = serializeAws_json1_0UpdateServiceCommand;
const deserializeAws_json1_0AssociateCustomDomainCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateCustomDomainCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0AssociateCustomDomainResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0AssociateCustomDomainCommand = deserializeAws_json1_0AssociateCustomDomainCommand;
const deserializeAws_json1_0AssociateCustomDomainCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CreateAutoScalingConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateAutoScalingConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0CreateAutoScalingConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateAutoScalingConfigurationCommand =
  deserializeAws_json1_0CreateAutoScalingConfigurationCommand;
const deserializeAws_json1_0CreateAutoScalingConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CreateConnectionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateConnectionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0CreateConnectionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateConnectionCommand = deserializeAws_json1_0CreateConnectionCommand;
const deserializeAws_json1_0CreateConnectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0CreateServiceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateServiceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0CreateServiceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0CreateServiceCommand = deserializeAws_json1_0CreateServiceCommand;
const deserializeAws_json1_0CreateServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeleteAutoScalingConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DeleteAutoScalingConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteAutoScalingConfigurationCommand =
  deserializeAws_json1_0DeleteAutoScalingConfigurationCommand;
const deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeleteConnectionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DeleteConnectionResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteConnectionCommand = deserializeAws_json1_0DeleteConnectionCommand;
const deserializeAws_json1_0DeleteConnectionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DeleteServiceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteServiceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DeleteServiceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DeleteServiceCommand = deserializeAws_json1_0DeleteServiceCommand;
const deserializeAws_json1_0DeleteServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeAutoScalingConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DescribeAutoScalingConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeAutoScalingConfigurationCommand =
  deserializeAws_json1_0DescribeAutoScalingConfigurationCommand;
const deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeCustomDomainsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeCustomDomainsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DescribeCustomDomainsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeCustomDomainsCommand = deserializeAws_json1_0DescribeCustomDomainsCommand;
const deserializeAws_json1_0DescribeCustomDomainsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DescribeServiceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeServiceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DescribeServiceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DescribeServiceCommand = deserializeAws_json1_0DescribeServiceCommand;
const deserializeAws_json1_0DescribeServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0DisassociateCustomDomainCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateCustomDomainCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0DisassociateCustomDomainResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0DisassociateCustomDomainCommand = deserializeAws_json1_0DisassociateCustomDomainCommand;
const deserializeAws_json1_0DisassociateCustomDomainCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListAutoScalingConfigurationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListAutoScalingConfigurationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0ListAutoScalingConfigurationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListAutoScalingConfigurationsCommand =
  deserializeAws_json1_0ListAutoScalingConfigurationsCommand;
const deserializeAws_json1_0ListAutoScalingConfigurationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListConnectionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListConnectionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0ListConnectionsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListConnectionsCommand = deserializeAws_json1_0ListConnectionsCommand;
const deserializeAws_json1_0ListConnectionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListOperationsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListOperationsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0ListOperationsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListOperationsCommand = deserializeAws_json1_0ListOperationsCommand;
const deserializeAws_json1_0ListOperationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListServicesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServicesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0ListServicesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListServicesCommand = deserializeAws_json1_0ListServicesCommand;
const deserializeAws_json1_0ListServicesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ListTagsForResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0ListTagsForResourceCommand = deserializeAws_json1_0ListTagsForResourceCommand;
const deserializeAws_json1_0ListTagsForResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0PauseServiceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PauseServiceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0PauseServiceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0PauseServiceCommand = deserializeAws_json1_0PauseServiceCommand;
const deserializeAws_json1_0PauseServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0ResumeServiceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ResumeServiceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0ResumeServiceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0ResumeServiceCommand = deserializeAws_json1_0ResumeServiceCommand;
const deserializeAws_json1_0ResumeServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0StartDeploymentCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartDeploymentCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0StartDeploymentResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0StartDeploymentCommand = deserializeAws_json1_0StartDeploymentCommand;
const deserializeAws_json1_0StartDeploymentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0TagResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0TagResourceCommand = deserializeAws_json1_0TagResourceCommand;
const deserializeAws_json1_0TagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UntagResourceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0UntagResourceCommand = deserializeAws_json1_0UntagResourceCommand;
const deserializeAws_json1_0UntagResourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0UpdateServiceCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_0UpdateServiceResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_0UpdateServiceCommand = deserializeAws_json1_0UpdateServiceCommand;
const deserializeAws_json1_0UpdateServiceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_0InternalServiceErrorExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_0InternalServiceErrorException(body, context);
  const contents = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_0InvalidRequestExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_0InvalidRequestException(body, context);
  const contents = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_0InvalidStateExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_0InvalidStateException(body, context);
  const contents = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const contents = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_0AssociateCustomDomainRequest = (input, context) => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.EnableWWWSubdomain !== undefined &&
      input.EnableWWWSubdomain !== null && { EnableWWWSubdomain: input.EnableWWWSubdomain }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0AuthenticationConfiguration = (input, context) => {
  return {
    ...(input.AccessRoleArn !== undefined && input.AccessRoleArn !== null && { AccessRoleArn: input.AccessRoleArn }),
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
  };
};
const serializeAws_json1_0CodeConfiguration = (input, context) => {
  return {
    ...(input.CodeConfigurationValues !== undefined &&
      input.CodeConfigurationValues !== null && {
        CodeConfigurationValues: serializeAws_json1_0CodeConfigurationValues(input.CodeConfigurationValues, context),
      }),
    ...(input.ConfigurationSource !== undefined &&
      input.ConfigurationSource !== null && { ConfigurationSource: input.ConfigurationSource }),
  };
};
const serializeAws_json1_0CodeConfigurationValues = (input, context) => {
  return {
    ...(input.BuildCommand !== undefined && input.BuildCommand !== null && { BuildCommand: input.BuildCommand }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime }),
    ...(input.RuntimeEnvironmentVariables !== undefined &&
      input.RuntimeEnvironmentVariables !== null && {
        RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
          input.RuntimeEnvironmentVariables,
          context
        ),
      }),
    ...(input.StartCommand !== undefined && input.StartCommand !== null && { StartCommand: input.StartCommand }),
  };
};
const serializeAws_json1_0CodeRepository = (input, context) => {
  return {
    ...(input.CodeConfiguration !== undefined &&
      input.CodeConfiguration !== null && {
        CodeConfiguration: serializeAws_json1_0CodeConfiguration(input.CodeConfiguration, context),
      }),
    ...(input.RepositoryUrl !== undefined && input.RepositoryUrl !== null && { RepositoryUrl: input.RepositoryUrl }),
    ...(input.SourceCodeVersion !== undefined &&
      input.SourceCodeVersion !== null && {
        SourceCodeVersion: serializeAws_json1_0SourceCodeVersion(input.SourceCodeVersion, context),
      }),
  };
};
const serializeAws_json1_0CreateAutoScalingConfigurationRequest = (input, context) => {
  return {
    ...(input.AutoScalingConfigurationName !== undefined &&
      input.AutoScalingConfigurationName !== null && {
        AutoScalingConfigurationName: input.AutoScalingConfigurationName,
      }),
    ...(input.MaxConcurrency !== undefined &&
      input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }),
    ...(input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_0CreateConnectionRequest = (input, context) => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_0CreateServiceRequest = (input, context) => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.HealthCheckConfiguration !== undefined &&
      input.HealthCheckConfiguration !== null && {
        HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(input.HealthCheckConfiguration, context),
      }),
    ...(input.InstanceConfiguration !== undefined &&
      input.InstanceConfiguration !== null && {
        InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
      }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    ...(input.SourceConfiguration !== undefined &&
      input.SourceConfiguration !== null && {
        SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_0DeleteAutoScalingConfigurationRequest = (input, context) => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
  };
};
const serializeAws_json1_0DeleteConnectionRequest = (input, context) => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
  };
};
const serializeAws_json1_0DeleteServiceRequest = (input, context) => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0DescribeAutoScalingConfigurationRequest = (input, context) => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
  };
};
const serializeAws_json1_0DescribeCustomDomainsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0DescribeServiceRequest = (input, context) => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0DisassociateCustomDomainRequest = (input, context) => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0EncryptionConfiguration = (input, context) => {
  return {
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
  };
};
const serializeAws_json1_0HealthCheckConfiguration = (input, context) => {
  return {
    ...(input.HealthyThreshold !== undefined &&
      input.HealthyThreshold !== null && { HealthyThreshold: input.HealthyThreshold }),
    ...(input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
    ...(input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }),
    ...(input.UnhealthyThreshold !== undefined &&
      input.UnhealthyThreshold !== null && { UnhealthyThreshold: input.UnhealthyThreshold }),
  };
};
const serializeAws_json1_0ImageConfiguration = (input, context) => {
  return {
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.RuntimeEnvironmentVariables !== undefined &&
      input.RuntimeEnvironmentVariables !== null && {
        RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
          input.RuntimeEnvironmentVariables,
          context
        ),
      }),
    ...(input.StartCommand !== undefined && input.StartCommand !== null && { StartCommand: input.StartCommand }),
  };
};
const serializeAws_json1_0ImageRepository = (input, context) => {
  return {
    ...(input.ImageConfiguration !== undefined &&
      input.ImageConfiguration !== null && {
        ImageConfiguration: serializeAws_json1_0ImageConfiguration(input.ImageConfiguration, context),
      }),
    ...(input.ImageIdentifier !== undefined &&
      input.ImageIdentifier !== null && { ImageIdentifier: input.ImageIdentifier }),
    ...(input.ImageRepositoryType !== undefined &&
      input.ImageRepositoryType !== null && { ImageRepositoryType: input.ImageRepositoryType }),
  };
};
const serializeAws_json1_0InstanceConfiguration = (input, context) => {
  return {
    ...(input.Cpu !== undefined && input.Cpu !== null && { Cpu: input.Cpu }),
    ...(input.InstanceRoleArn !== undefined &&
      input.InstanceRoleArn !== null && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Memory !== undefined && input.Memory !== null && { Memory: input.Memory }),
  };
};
const serializeAws_json1_0ListAutoScalingConfigurationsRequest = (input, context) => {
  return {
    ...(input.AutoScalingConfigurationName !== undefined &&
      input.AutoScalingConfigurationName !== null && {
        AutoScalingConfigurationName: input.AutoScalingConfigurationName,
      }),
    ...(input.LatestOnly !== undefined && input.LatestOnly !== null && { LatestOnly: input.LatestOnly }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_0ListConnectionsRequest = (input, context) => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_0ListOperationsRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0ListServicesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_0ListTagsForResourceRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};
const serializeAws_json1_0PauseServiceRequest = (input, context) => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0ResumeServiceRequest = (input, context) => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0RuntimeEnvironmentVariables = (input, context) => {
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
const serializeAws_json1_0SourceCodeVersion = (input, context) => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_0SourceConfiguration = (input, context) => {
  return {
    ...(input.AuthenticationConfiguration !== undefined &&
      input.AuthenticationConfiguration !== null && {
        AuthenticationConfiguration: serializeAws_json1_0AuthenticationConfiguration(
          input.AuthenticationConfiguration,
          context
        ),
      }),
    ...(input.AutoDeploymentsEnabled !== undefined &&
      input.AutoDeploymentsEnabled !== null && { AutoDeploymentsEnabled: input.AutoDeploymentsEnabled }),
    ...(input.CodeRepository !== undefined &&
      input.CodeRepository !== null && {
        CodeRepository: serializeAws_json1_0CodeRepository(input.CodeRepository, context),
      }),
    ...(input.ImageRepository !== undefined &&
      input.ImageRepository !== null && {
        ImageRepository: serializeAws_json1_0ImageRepository(input.ImageRepository, context),
      }),
  };
};
const serializeAws_json1_0StartDeploymentRequest = (input, context) => {
  return {
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
  };
};
const serializeAws_json1_0Tag = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_0TagKeyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_0TagList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};
const serializeAws_json1_0TagResourceRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_0UntagResourceRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};
const serializeAws_json1_0UpdateServiceRequest = (input, context) => {
  return {
    ...(input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }),
    ...(input.HealthCheckConfiguration !== undefined &&
      input.HealthCheckConfiguration !== null && {
        HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(input.HealthCheckConfiguration, context),
      }),
    ...(input.InstanceConfiguration !== undefined &&
      input.InstanceConfiguration !== null && {
        InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
      }),
    ...(input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }),
    ...(input.SourceConfiguration !== undefined &&
      input.SourceConfiguration !== null && {
        SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
      }),
  };
};
const deserializeAws_json1_0AssociateCustomDomainResponse = (output, context) => {
  return {
    CustomDomain:
      output.CustomDomain !== undefined && output.CustomDomain !== null
        ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context)
        : undefined,
    DNSTarget: output.DNSTarget !== undefined && output.DNSTarget !== null ? output.DNSTarget : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
  };
};
const deserializeAws_json1_0AuthenticationConfiguration = (output, context) => {
  return {
    AccessRoleArn:
      output.AccessRoleArn !== undefined && output.AccessRoleArn !== null ? output.AccessRoleArn : undefined,
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
  };
};
const deserializeAws_json1_0AutoScalingConfiguration = (output, context) => {
  return {
    AutoScalingConfigurationArn:
      output.AutoScalingConfigurationArn !== undefined && output.AutoScalingConfigurationArn !== null
        ? output.AutoScalingConfigurationArn
        : undefined,
    AutoScalingConfigurationName:
      output.AutoScalingConfigurationName !== undefined && output.AutoScalingConfigurationName !== null
        ? output.AutoScalingConfigurationName
        : undefined,
    AutoScalingConfigurationRevision:
      output.AutoScalingConfigurationRevision !== undefined && output.AutoScalingConfigurationRevision !== null
        ? output.AutoScalingConfigurationRevision
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DeletedAt:
      output.DeletedAt !== undefined && output.DeletedAt !== null
        ? new Date(Math.round(output.DeletedAt * 1000))
        : undefined,
    Latest: output.Latest !== undefined && output.Latest !== null ? output.Latest : undefined,
    MaxConcurrency:
      output.MaxConcurrency !== undefined && output.MaxConcurrency !== null ? output.MaxConcurrency : undefined,
    MaxSize: output.MaxSize !== undefined && output.MaxSize !== null ? output.MaxSize : undefined,
    MinSize: output.MinSize !== undefined && output.MinSize !== null ? output.MinSize : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_json1_0AutoScalingConfigurationSummary = (output, context) => {
  return {
    AutoScalingConfigurationArn:
      output.AutoScalingConfigurationArn !== undefined && output.AutoScalingConfigurationArn !== null
        ? output.AutoScalingConfigurationArn
        : undefined,
    AutoScalingConfigurationName:
      output.AutoScalingConfigurationName !== undefined && output.AutoScalingConfigurationName !== null
        ? output.AutoScalingConfigurationName
        : undefined,
    AutoScalingConfigurationRevision:
      output.AutoScalingConfigurationRevision !== undefined && output.AutoScalingConfigurationRevision !== null
        ? output.AutoScalingConfigurationRevision
        : undefined,
  };
};
const deserializeAws_json1_0AutoScalingConfigurationSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0AutoScalingConfigurationSummary(entry, context);
    });
};
const deserializeAws_json1_0CertificateValidationRecord = (output, context) => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_0CertificateValidationRecordList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0CertificateValidationRecord(entry, context);
    });
};
const deserializeAws_json1_0CodeConfiguration = (output, context) => {
  return {
    CodeConfigurationValues:
      output.CodeConfigurationValues !== undefined && output.CodeConfigurationValues !== null
        ? deserializeAws_json1_0CodeConfigurationValues(output.CodeConfigurationValues, context)
        : undefined,
    ConfigurationSource:
      output.ConfigurationSource !== undefined && output.ConfigurationSource !== null
        ? output.ConfigurationSource
        : undefined,
  };
};
const deserializeAws_json1_0CodeConfigurationValues = (output, context) => {
  return {
    BuildCommand: output.BuildCommand !== undefined && output.BuildCommand !== null ? output.BuildCommand : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    Runtime: output.Runtime !== undefined && output.Runtime !== null ? output.Runtime : undefined,
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables !== undefined && output.RuntimeEnvironmentVariables !== null
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: output.StartCommand !== undefined && output.StartCommand !== null ? output.StartCommand : undefined,
  };
};
const deserializeAws_json1_0CodeRepository = (output, context) => {
  return {
    CodeConfiguration:
      output.CodeConfiguration !== undefined && output.CodeConfiguration !== null
        ? deserializeAws_json1_0CodeConfiguration(output.CodeConfiguration, context)
        : undefined,
    RepositoryUrl:
      output.RepositoryUrl !== undefined && output.RepositoryUrl !== null ? output.RepositoryUrl : undefined,
    SourceCodeVersion:
      output.SourceCodeVersion !== undefined && output.SourceCodeVersion !== null
        ? deserializeAws_json1_0SourceCodeVersion(output.SourceCodeVersion, context)
        : undefined,
  };
};
const deserializeAws_json1_0Connection = (output, context) => {
  return {
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
    ConnectionName:
      output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_json1_0ConnectionSummary = (output, context) => {
  return {
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
    ConnectionName:
      output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_json1_0ConnectionSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ConnectionSummary(entry, context);
    });
};
const deserializeAws_json1_0CreateAutoScalingConfigurationResponse = (output, context) => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  };
};
const deserializeAws_json1_0CreateConnectionResponse = (output, context) => {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  };
};
const deserializeAws_json1_0CreateServiceResponse = (output, context) => {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
const deserializeAws_json1_0CustomDomain = (output, context) => {
  return {
    CertificateValidationRecords:
      output.CertificateValidationRecords !== undefined && output.CertificateValidationRecords !== null
        ? deserializeAws_json1_0CertificateValidationRecordList(output.CertificateValidationRecords, context)
        : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    EnableWWWSubdomain:
      output.EnableWWWSubdomain !== undefined && output.EnableWWWSubdomain !== null
        ? output.EnableWWWSubdomain
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  };
};
const deserializeAws_json1_0CustomDomainList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0CustomDomain(entry, context);
    });
};
const deserializeAws_json1_0DeleteAutoScalingConfigurationResponse = (output, context) => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  };
};
const deserializeAws_json1_0DeleteConnectionResponse = (output, context) => {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  };
};
const deserializeAws_json1_0DeleteServiceResponse = (output, context) => {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
const deserializeAws_json1_0DescribeAutoScalingConfigurationResponse = (output, context) => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  };
};
const deserializeAws_json1_0DescribeCustomDomainsResponse = (output, context) => {
  return {
    CustomDomains:
      output.CustomDomains !== undefined && output.CustomDomains !== null
        ? deserializeAws_json1_0CustomDomainList(output.CustomDomains, context)
        : undefined,
    DNSTarget: output.DNSTarget !== undefined && output.DNSTarget !== null ? output.DNSTarget : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
  };
};
const deserializeAws_json1_0DescribeServiceResponse = (output, context) => {
  return {
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
const deserializeAws_json1_0DisassociateCustomDomainResponse = (output, context) => {
  return {
    CustomDomain:
      output.CustomDomain !== undefined && output.CustomDomain !== null
        ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context)
        : undefined,
    DNSTarget: output.DNSTarget !== undefined && output.DNSTarget !== null ? output.DNSTarget : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
  };
};
const deserializeAws_json1_0EncryptionConfiguration = (output, context) => {
  return {
    KmsKey: output.KmsKey !== undefined && output.KmsKey !== null ? output.KmsKey : undefined,
  };
};
const deserializeAws_json1_0HealthCheckConfiguration = (output, context) => {
  return {
    HealthyThreshold:
      output.HealthyThreshold !== undefined && output.HealthyThreshold !== null ? output.HealthyThreshold : undefined,
    Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    UnhealthyThreshold:
      output.UnhealthyThreshold !== undefined && output.UnhealthyThreshold !== null
        ? output.UnhealthyThreshold
        : undefined,
  };
};
const deserializeAws_json1_0ImageConfiguration = (output, context) => {
  return {
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables !== undefined && output.RuntimeEnvironmentVariables !== null
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: output.StartCommand !== undefined && output.StartCommand !== null ? output.StartCommand : undefined,
  };
};
const deserializeAws_json1_0ImageRepository = (output, context) => {
  return {
    ImageConfiguration:
      output.ImageConfiguration !== undefined && output.ImageConfiguration !== null
        ? deserializeAws_json1_0ImageConfiguration(output.ImageConfiguration, context)
        : undefined,
    ImageIdentifier:
      output.ImageIdentifier !== undefined && output.ImageIdentifier !== null ? output.ImageIdentifier : undefined,
    ImageRepositoryType:
      output.ImageRepositoryType !== undefined && output.ImageRepositoryType !== null
        ? output.ImageRepositoryType
        : undefined,
  };
};
const deserializeAws_json1_0InstanceConfiguration = (output, context) => {
  return {
    Cpu: output.Cpu !== undefined && output.Cpu !== null ? output.Cpu : undefined,
    InstanceRoleArn:
      output.InstanceRoleArn !== undefined && output.InstanceRoleArn !== null ? output.InstanceRoleArn : undefined,
    Memory: output.Memory !== undefined && output.Memory !== null ? output.Memory : undefined,
  };
};
const deserializeAws_json1_0InternalServiceErrorException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_0InvalidRequestException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_0InvalidStateException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_0ListAutoScalingConfigurationsResponse = (output, context) => {
  return {
    AutoScalingConfigurationSummaryList:
      output.AutoScalingConfigurationSummaryList !== undefined && output.AutoScalingConfigurationSummaryList !== null
        ? deserializeAws_json1_0AutoScalingConfigurationSummaryList(output.AutoScalingConfigurationSummaryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_0ListConnectionsResponse = (output, context) => {
  return {
    ConnectionSummaryList:
      output.ConnectionSummaryList !== undefined && output.ConnectionSummaryList !== null
        ? deserializeAws_json1_0ConnectionSummaryList(output.ConnectionSummaryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_0ListOperationsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    OperationSummaryList:
      output.OperationSummaryList !== undefined && output.OperationSummaryList !== null
        ? deserializeAws_json1_0OperationSummaryList(output.OperationSummaryList, context)
        : undefined,
  };
};
const deserializeAws_json1_0ListServicesResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ServiceSummaryList:
      output.ServiceSummaryList !== undefined && output.ServiceSummaryList !== null
        ? deserializeAws_json1_0ServiceSummaryList(output.ServiceSummaryList, context)
        : undefined,
  };
};
const deserializeAws_json1_0ListTagsForResourceResponse = (output, context) => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined,
  };
};
const deserializeAws_json1_0OperationSummary = (output, context) => {
  return {
    EndedAt:
      output.EndedAt !== undefined && output.EndedAt !== null ? new Date(Math.round(output.EndedAt * 1000)) : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    StartedAt:
      output.StartedAt !== undefined && output.StartedAt !== null
        ? new Date(Math.round(output.StartedAt * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    TargetArn: output.TargetArn !== undefined && output.TargetArn !== null ? output.TargetArn : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  };
};
const deserializeAws_json1_0OperationSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0OperationSummary(entry, context);
    });
};
const deserializeAws_json1_0PauseServiceResponse = (output, context) => {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_0ResumeServiceResponse = (output, context) => {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
const deserializeAws_json1_0RuntimeEnvironmentVariables = (output, context) => {
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
const deserializeAws_json1_0Service = (output, context) => {
  return {
    AutoScalingConfigurationSummary:
      output.AutoScalingConfigurationSummary !== undefined && output.AutoScalingConfigurationSummary !== null
        ? deserializeAws_json1_0AutoScalingConfigurationSummary(output.AutoScalingConfigurationSummary, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DeletedAt:
      output.DeletedAt !== undefined && output.DeletedAt !== null
        ? new Date(Math.round(output.DeletedAt * 1000))
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    HealthCheckConfiguration:
      output.HealthCheckConfiguration !== undefined && output.HealthCheckConfiguration !== null
        ? deserializeAws_json1_0HealthCheckConfiguration(output.HealthCheckConfiguration, context)
        : undefined,
    InstanceConfiguration:
      output.InstanceConfiguration !== undefined && output.InstanceConfiguration !== null
        ? deserializeAws_json1_0InstanceConfiguration(output.InstanceConfiguration, context)
        : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
    ServiceId: output.ServiceId !== undefined && output.ServiceId !== null ? output.ServiceId : undefined,
    ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    ServiceUrl: output.ServiceUrl !== undefined && output.ServiceUrl !== null ? output.ServiceUrl : undefined,
    SourceConfiguration:
      output.SourceConfiguration !== undefined && output.SourceConfiguration !== null
        ? deserializeAws_json1_0SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  };
};
const deserializeAws_json1_0ServiceQuotaExceededException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_0ServiceSummary = (output, context) => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
    ServiceId: output.ServiceId !== undefined && output.ServiceId !== null ? output.ServiceId : undefined,
    ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    ServiceUrl: output.ServiceUrl !== undefined && output.ServiceUrl !== null ? output.ServiceUrl : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  };
};
const deserializeAws_json1_0ServiceSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ServiceSummary(entry, context);
    });
};
const deserializeAws_json1_0SourceCodeVersion = (output, context) => {
  return {
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_0SourceConfiguration = (output, context) => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration !== undefined && output.AuthenticationConfiguration !== null
        ? deserializeAws_json1_0AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    AutoDeploymentsEnabled:
      output.AutoDeploymentsEnabled !== undefined && output.AutoDeploymentsEnabled !== null
        ? output.AutoDeploymentsEnabled
        : undefined,
    CodeRepository:
      output.CodeRepository !== undefined && output.CodeRepository !== null
        ? deserializeAws_json1_0CodeRepository(output.CodeRepository, context)
        : undefined,
    ImageRepository:
      output.ImageRepository !== undefined && output.ImageRepository !== null
        ? deserializeAws_json1_0ImageRepository(output.ImageRepository, context)
        : undefined,
  };
};
const deserializeAws_json1_0StartDeploymentResponse = (output, context) => {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
  };
};
const deserializeAws_json1_0Tag = (output, context) => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_0TagList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
};
const deserializeAws_json1_0TagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_0UntagResourceResponse = (output, context) => {
  return {};
};
const deserializeAws_json1_0UpdateServiceResponse = (output, context) => {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
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
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new protocol_http_1.HttpRequest(contents);
};
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
//# sourceMappingURL=Aws_json1_0.js.map
