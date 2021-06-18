"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateCertificateOptionsCommand =
  exports.deserializeAws_json1_1ResendValidationEmailCommand =
  exports.deserializeAws_json1_1RequestCertificateCommand =
  exports.deserializeAws_json1_1RenewCertificateCommand =
  exports.deserializeAws_json1_1RemoveTagsFromCertificateCommand =
  exports.deserializeAws_json1_1PutAccountConfigurationCommand =
  exports.deserializeAws_json1_1ListTagsForCertificateCommand =
  exports.deserializeAws_json1_1ListCertificatesCommand =
  exports.deserializeAws_json1_1ImportCertificateCommand =
  exports.deserializeAws_json1_1GetCertificateCommand =
  exports.deserializeAws_json1_1GetAccountConfigurationCommand =
  exports.deserializeAws_json1_1ExportCertificateCommand =
  exports.deserializeAws_json1_1DescribeCertificateCommand =
  exports.deserializeAws_json1_1DeleteCertificateCommand =
  exports.deserializeAws_json1_1AddTagsToCertificateCommand =
  exports.serializeAws_json1_1UpdateCertificateOptionsCommand =
  exports.serializeAws_json1_1ResendValidationEmailCommand =
  exports.serializeAws_json1_1RequestCertificateCommand =
  exports.serializeAws_json1_1RenewCertificateCommand =
  exports.serializeAws_json1_1RemoveTagsFromCertificateCommand =
  exports.serializeAws_json1_1PutAccountConfigurationCommand =
  exports.serializeAws_json1_1ListTagsForCertificateCommand =
  exports.serializeAws_json1_1ListCertificatesCommand =
  exports.serializeAws_json1_1ImportCertificateCommand =
  exports.serializeAws_json1_1GetCertificateCommand =
  exports.serializeAws_json1_1GetAccountConfigurationCommand =
  exports.serializeAws_json1_1ExportCertificateCommand =
  exports.serializeAws_json1_1DescribeCertificateCommand =
  exports.serializeAws_json1_1DeleteCertificateCommand =
  exports.serializeAws_json1_1AddTagsToCertificateCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddTagsToCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.AddTagsToCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1AddTagsToCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToCertificateCommand = serializeAws_json1_1AddTagsToCertificateCommand;
const serializeAws_json1_1DeleteCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.DeleteCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCertificateCommand = serializeAws_json1_1DeleteCertificateCommand;
const serializeAws_json1_1DescribeCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.DescribeCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCertificateCommand = serializeAws_json1_1DescribeCertificateCommand;
const serializeAws_json1_1ExportCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ExportCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ExportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExportCertificateCommand = serializeAws_json1_1ExportCertificateCommand;
const serializeAws_json1_1GetAccountConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.GetAccountConfiguration",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAccountConfigurationCommand = serializeAws_json1_1GetAccountConfigurationCommand;
const serializeAws_json1_1GetCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.GetCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCertificateCommand = serializeAws_json1_1GetCertificateCommand;
const serializeAws_json1_1ImportCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ImportCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ImportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportCertificateCommand = serializeAws_json1_1ImportCertificateCommand;
const serializeAws_json1_1ListCertificatesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ListCertificates",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCertificatesCommand = serializeAws_json1_1ListCertificatesCommand;
const serializeAws_json1_1ListTagsForCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ListTagsForCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTagsForCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForCertificateCommand = serializeAws_json1_1ListTagsForCertificateCommand;
const serializeAws_json1_1PutAccountConfigurationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.PutAccountConfiguration",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutAccountConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAccountConfigurationCommand = serializeAws_json1_1PutAccountConfigurationCommand;
const serializeAws_json1_1RemoveTagsFromCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.RemoveTagsFromCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromCertificateCommand = serializeAws_json1_1RemoveTagsFromCertificateCommand;
const serializeAws_json1_1RenewCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.RenewCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RenewCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RenewCertificateCommand = serializeAws_json1_1RenewCertificateCommand;
const serializeAws_json1_1RequestCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.RequestCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RequestCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RequestCertificateCommand = serializeAws_json1_1RequestCertificateCommand;
const serializeAws_json1_1ResendValidationEmailCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ResendValidationEmail",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ResendValidationEmailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResendValidationEmailCommand = serializeAws_json1_1ResendValidationEmailCommand;
const serializeAws_json1_1UpdateCertificateOptionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.UpdateCertificateOptions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateCertificateOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCertificateOptionsCommand = serializeAws_json1_1UpdateCertificateOptionsCommand;
const deserializeAws_json1_1AddTagsToCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToCertificateCommand = deserializeAws_json1_1AddTagsToCertificateCommand;
const deserializeAws_json1_1AddTagsToCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCertificateCommand = deserializeAws_json1_1DeleteCertificateCommand;
const deserializeAws_json1_1DeleteCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.acm#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCertificateCommand = deserializeAws_json1_1DescribeCertificateCommand;
const deserializeAws_json1_1DescribeCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ExportCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ExportCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExportCertificateCommand = deserializeAws_json1_1ExportCertificateCommand;
const deserializeAws_json1_1ExportCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acm#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetAccountConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccountConfigurationCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetAccountConfigurationResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAccountConfigurationCommand = deserializeAws_json1_1GetAccountConfigurationCommand;
const deserializeAws_json1_1GetAccountConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.acm#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1GetCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCertificateCommand = deserializeAws_json1_1GetCertificateCommand;
const deserializeAws_json1_1GetCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acm#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ImportCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportCertificateCommand = deserializeAws_json1_1ImportCertificateCommand;
const deserializeAws_json1_1ImportCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListCertificatesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListCertificatesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCertificatesCommand = deserializeAws_json1_1ListCertificatesCommand;
const deserializeAws_json1_1ListCertificatesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acm#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListTagsForCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForCertificateCommand = deserializeAws_json1_1ListTagsForCertificateCommand;
const deserializeAws_json1_1ListTagsForCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAccountConfigurationCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAccountConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAccountConfigurationCommand = deserializeAws_json1_1PutAccountConfigurationCommand;
const deserializeAws_json1_1PutAccountConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.acm#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.acm#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.acm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemoveTagsFromCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromCertificateCommand = deserializeAws_json1_1RemoveTagsFromCertificateCommand;
const deserializeAws_json1_1RemoveTagsFromCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RenewCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RenewCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RenewCertificateCommand = deserializeAws_json1_1RenewCertificateCommand;
const deserializeAws_json1_1RenewCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RequestCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RequestCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1RequestCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RequestCertificateCommand = deserializeAws_json1_1RequestCertificateCommand;
const deserializeAws_json1_1RequestCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDomainValidationOptionsException":
    case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
      response = {
        ...(await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ResendValidationEmailCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResendValidationEmailCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResendValidationEmailCommand = deserializeAws_json1_1ResendValidationEmailCommand;
const deserializeAws_json1_1ResendValidationEmailCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDomainValidationOptionsException":
    case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
      response = {
        ...(await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateCertificateOptionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCertificateOptionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCertificateOptionsCommand = deserializeAws_json1_1UpdateCertificateOptionsCommand;
const deserializeAws_json1_1UpdateCertificateOptionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ConflictException(body, context);
  const contents = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidArgsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidArgsException(body, context);
  const contents = {
    name: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
  const contents = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidDomainValidationOptionsException(body, context);
  const contents = {
    name: "InvalidDomainValidationOptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
  const contents = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
  const contents = {
    name: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
  const contents = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1RequestInProgressExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1RequestInProgressException(body, context);
  const contents = {
    name: "RequestInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1TagPolicyExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1TagPolicyException(body, context);
  const contents = {
    name: "TagPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
  const contents = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ValidationException(body, context);
  const contents = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const serializeAws_json1_1AddTagsToCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CertificateOptions = (input, context) => {
  return {
    ...(input.CertificateTransparencyLoggingPreference !== undefined &&
      input.CertificateTransparencyLoggingPreference !== null && {
        CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
      }),
  };
};
const serializeAws_json1_1CertificateStatuses = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1DeleteCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
  };
};
const serializeAws_json1_1DescribeCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
  };
};
const serializeAws_json1_1DomainList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1DomainValidationOption = (input, context) => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.ValidationDomain !== undefined &&
      input.ValidationDomain !== null && { ValidationDomain: input.ValidationDomain }),
  };
};
const serializeAws_json1_1DomainValidationOptionList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1DomainValidationOption(entry, context);
    });
};
const serializeAws_json1_1ExpiryEventsConfiguration = (input, context) => {
  return {
    ...(input.DaysBeforeExpiry !== undefined &&
      input.DaysBeforeExpiry !== null && { DaysBeforeExpiry: input.DaysBeforeExpiry }),
  };
};
const serializeAws_json1_1ExportCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.Passphrase !== undefined &&
      input.Passphrase !== null && { Passphrase: context.base64Encoder(input.Passphrase) }),
  };
};
const serializeAws_json1_1ExtendedKeyUsageFilterList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1Filters = (input, context) => {
  return {
    ...(input.extendedKeyUsage !== undefined &&
      input.extendedKeyUsage !== null && {
        extendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageFilterList(input.extendedKeyUsage, context),
      }),
    ...(input.keyTypes !== undefined &&
      input.keyTypes !== null && { keyTypes: serializeAws_json1_1KeyAlgorithmList(input.keyTypes, context) }),
    ...(input.keyUsage !== undefined &&
      input.keyUsage !== null && { keyUsage: serializeAws_json1_1KeyUsageFilterList(input.keyUsage, context) }),
  };
};
const serializeAws_json1_1GetCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
  };
};
const serializeAws_json1_1ImportCertificateRequest = (input, context) => {
  return {
    ...(input.Certificate !== undefined &&
      input.Certificate !== null && { Certificate: context.base64Encoder(input.Certificate) }),
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.CertificateChain !== undefined &&
      input.CertificateChain !== null && { CertificateChain: context.base64Encoder(input.CertificateChain) }),
    ...(input.PrivateKey !== undefined &&
      input.PrivateKey !== null && { PrivateKey: context.base64Encoder(input.PrivateKey) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1KeyAlgorithmList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1KeyUsageFilterList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ListCertificatesRequest = (input, context) => {
  return {
    ...(input.CertificateStatuses !== undefined &&
      input.CertificateStatuses !== null && {
        CertificateStatuses: serializeAws_json1_1CertificateStatuses(input.CertificateStatuses, context),
      }),
    ...(input.Includes !== undefined &&
      input.Includes !== null && { Includes: serializeAws_json1_1Filters(input.Includes, context) }),
    ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListTagsForCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
  };
};
const serializeAws_json1_1PutAccountConfigurationRequest = (input, context) => {
  return {
    ...(input.ExpiryEvents !== undefined &&
      input.ExpiryEvents !== null && {
        ExpiryEvents: serializeAws_json1_1ExpiryEventsConfiguration(input.ExpiryEvents, context),
      }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
  };
};
const serializeAws_json1_1RemoveTagsFromCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1RenewCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
  };
};
const serializeAws_json1_1RequestCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.DomainValidationOptions !== undefined &&
      input.DomainValidationOptions !== null && {
        DomainValidationOptions: serializeAws_json1_1DomainValidationOptionList(input.DomainValidationOptions, context),
      }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_json1_1CertificateOptions(input.Options, context) }),
    ...(input.SubjectAlternativeNames !== undefined &&
      input.SubjectAlternativeNames !== null && {
        SubjectAlternativeNames: serializeAws_json1_1DomainList(input.SubjectAlternativeNames, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.ValidationMethod !== undefined &&
      input.ValidationMethod !== null && { ValidationMethod: input.ValidationMethod }),
  };
};
const serializeAws_json1_1ResendValidationEmailRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.ValidationDomain !== undefined &&
      input.ValidationDomain !== null && { ValidationDomain: input.ValidationDomain }),
  };
};
const serializeAws_json1_1Tag = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1TagList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1UpdateCertificateOptionsRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_json1_1CertificateOptions(input.Options, context) }),
  };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
const deserializeAws_json1_1CertificateDetail = (output, context) => {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    DomainValidationOptions:
      output.DomainValidationOptions !== undefined && output.DomainValidationOptions !== null
        ? deserializeAws_json1_1DomainValidationList(output.DomainValidationOptions, context)
        : undefined,
    ExtendedKeyUsages:
      output.ExtendedKeyUsages !== undefined && output.ExtendedKeyUsages !== null
        ? deserializeAws_json1_1ExtendedKeyUsageList(output.ExtendedKeyUsages, context)
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    ImportedAt:
      output.ImportedAt !== undefined && output.ImportedAt !== null
        ? new Date(Math.round(output.ImportedAt * 1000))
        : undefined,
    InUseBy:
      output.InUseBy !== undefined && output.InUseBy !== null
        ? deserializeAws_json1_1InUseList(output.InUseBy, context)
        : undefined,
    IssuedAt:
      output.IssuedAt !== undefined && output.IssuedAt !== null
        ? new Date(Math.round(output.IssuedAt * 1000))
        : undefined,
    Issuer: output.Issuer !== undefined && output.Issuer !== null ? output.Issuer : undefined,
    KeyAlgorithm: output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null ? output.KeyAlgorithm : undefined,
    KeyUsages:
      output.KeyUsages !== undefined && output.KeyUsages !== null
        ? deserializeAws_json1_1KeyUsageList(output.KeyUsages, context)
        : undefined,
    NotAfter:
      output.NotAfter !== undefined && output.NotAfter !== null
        ? new Date(Math.round(output.NotAfter * 1000))
        : undefined,
    NotBefore:
      output.NotBefore !== undefined && output.NotBefore !== null
        ? new Date(Math.round(output.NotBefore * 1000))
        : undefined,
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_json1_1CertificateOptions(output.Options, context)
        : undefined,
    RenewalEligibility:
      output.RenewalEligibility !== undefined && output.RenewalEligibility !== null
        ? output.RenewalEligibility
        : undefined,
    RenewalSummary:
      output.RenewalSummary !== undefined && output.RenewalSummary !== null
        ? deserializeAws_json1_1RenewalSummary(output.RenewalSummary, context)
        : undefined,
    RevocationReason:
      output.RevocationReason !== undefined && output.RevocationReason !== null ? output.RevocationReason : undefined,
    RevokedAt:
      output.RevokedAt !== undefined && output.RevokedAt !== null
        ? new Date(Math.round(output.RevokedAt * 1000))
        : undefined,
    Serial: output.Serial !== undefined && output.Serial !== null ? output.Serial : undefined,
    SignatureAlgorithm:
      output.SignatureAlgorithm !== undefined && output.SignatureAlgorithm !== null
        ? output.SignatureAlgorithm
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    SubjectAlternativeNames:
      output.SubjectAlternativeNames !== undefined && output.SubjectAlternativeNames !== null
        ? deserializeAws_json1_1DomainList(output.SubjectAlternativeNames, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1CertificateOptions = (output, context) => {
  return {
    CertificateTransparencyLoggingPreference:
      output.CertificateTransparencyLoggingPreference !== undefined &&
      output.CertificateTransparencyLoggingPreference !== null
        ? output.CertificateTransparencyLoggingPreference
        : undefined,
  };
};
const deserializeAws_json1_1CertificateSummary = (output, context) => {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
  };
};
const deserializeAws_json1_1CertificateSummaryList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1CertificateSummary(entry, context);
    });
};
const deserializeAws_json1_1ConflictException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1DescribeCertificateResponse = (output, context) => {
  return {
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? deserializeAws_json1_1CertificateDetail(output.Certificate, context)
        : undefined,
  };
};
const deserializeAws_json1_1DomainList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1DomainValidation = (output, context) => {
  return {
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    ResourceRecord:
      output.ResourceRecord !== undefined && output.ResourceRecord !== null
        ? deserializeAws_json1_1ResourceRecord(output.ResourceRecord, context)
        : undefined,
    ValidationDomain:
      output.ValidationDomain !== undefined && output.ValidationDomain !== null ? output.ValidationDomain : undefined,
    ValidationEmails:
      output.ValidationEmails !== undefined && output.ValidationEmails !== null
        ? deserializeAws_json1_1ValidationEmailList(output.ValidationEmails, context)
        : undefined,
    ValidationMethod:
      output.ValidationMethod !== undefined && output.ValidationMethod !== null ? output.ValidationMethod : undefined,
    ValidationStatus:
      output.ValidationStatus !== undefined && output.ValidationStatus !== null ? output.ValidationStatus : undefined,
  };
};
const deserializeAws_json1_1DomainValidationList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DomainValidation(entry, context);
    });
};
const deserializeAws_json1_1ExpiryEventsConfiguration = (output, context) => {
  return {
    DaysBeforeExpiry:
      output.DaysBeforeExpiry !== undefined && output.DaysBeforeExpiry !== null ? output.DaysBeforeExpiry : undefined,
  };
};
const deserializeAws_json1_1ExportCertificateResponse = (output, context) => {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
    PrivateKey: output.PrivateKey !== undefined && output.PrivateKey !== null ? output.PrivateKey : undefined,
  };
};
const deserializeAws_json1_1ExtendedKeyUsage = (output, context) => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OID: output.OID !== undefined && output.OID !== null ? output.OID : undefined,
  };
};
const deserializeAws_json1_1ExtendedKeyUsageList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ExtendedKeyUsage(entry, context);
    });
};
const deserializeAws_json1_1GetAccountConfigurationResponse = (output, context) => {
  return {
    ExpiryEvents:
      output.ExpiryEvents !== undefined && output.ExpiryEvents !== null
        ? deserializeAws_json1_1ExpiryEventsConfiguration(output.ExpiryEvents, context)
        : undefined,
  };
};
const deserializeAws_json1_1GetCertificateResponse = (output, context) => {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
  };
};
const deserializeAws_json1_1ImportCertificateResponse = (output, context) => {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
  };
};
const deserializeAws_json1_1InUseList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1InvalidArgsException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidDomainValidationOptionsException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1KeyUsage = (output, context) => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
const deserializeAws_json1_1KeyUsageList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1KeyUsage(entry, context);
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ListCertificatesResponse = (output, context) => {
  return {
    CertificateSummaryList:
      output.CertificateSummaryList !== undefined && output.CertificateSummaryList !== null
        ? deserializeAws_json1_1CertificateSummaryList(output.CertificateSummaryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListTagsForCertificateResponse = (output, context) => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
const deserializeAws_json1_1RenewalSummary = (output, context) => {
  return {
    DomainValidationOptions:
      output.DomainValidationOptions !== undefined && output.DomainValidationOptions !== null
        ? deserializeAws_json1_1DomainValidationList(output.DomainValidationOptions, context)
        : undefined,
    RenewalStatus:
      output.RenewalStatus !== undefined && output.RenewalStatus !== null ? output.RenewalStatus : undefined,
    RenewalStatusReason:
      output.RenewalStatusReason !== undefined && output.RenewalStatusReason !== null
        ? output.RenewalStatusReason
        : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  };
};
const deserializeAws_json1_1RequestCertificateResponse = (output, context) => {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
  };
};
const deserializeAws_json1_1RequestInProgressException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ResourceRecord = (output, context) => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1Tag = (output, context) => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1TagList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagPolicyException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ValidationEmailList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1ValidationException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
//# sourceMappingURL=Aws_json1_1.js.map
