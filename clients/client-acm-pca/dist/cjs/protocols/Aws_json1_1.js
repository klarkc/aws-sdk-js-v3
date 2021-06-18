"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateCertificateAuthorityCommand =
  exports.deserializeAws_json1_1UntagCertificateAuthorityCommand =
  exports.deserializeAws_json1_1TagCertificateAuthorityCommand =
  exports.deserializeAws_json1_1RevokeCertificateCommand =
  exports.deserializeAws_json1_1RestoreCertificateAuthorityCommand =
  exports.deserializeAws_json1_1PutPolicyCommand =
  exports.deserializeAws_json1_1ListTagsCommand =
  exports.deserializeAws_json1_1ListPermissionsCommand =
  exports.deserializeAws_json1_1ListCertificateAuthoritiesCommand =
  exports.deserializeAws_json1_1IssueCertificateCommand =
  exports.deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand =
  exports.deserializeAws_json1_1GetPolicyCommand =
  exports.deserializeAws_json1_1GetCertificateAuthorityCsrCommand =
  exports.deserializeAws_json1_1GetCertificateAuthorityCertificateCommand =
  exports.deserializeAws_json1_1GetCertificateCommand =
  exports.deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand =
  exports.deserializeAws_json1_1DescribeCertificateAuthorityCommand =
  exports.deserializeAws_json1_1DeletePolicyCommand =
  exports.deserializeAws_json1_1DeletePermissionCommand =
  exports.deserializeAws_json1_1DeleteCertificateAuthorityCommand =
  exports.deserializeAws_json1_1CreatePermissionCommand =
  exports.deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand =
  exports.deserializeAws_json1_1CreateCertificateAuthorityCommand =
  exports.serializeAws_json1_1UpdateCertificateAuthorityCommand =
  exports.serializeAws_json1_1UntagCertificateAuthorityCommand =
  exports.serializeAws_json1_1TagCertificateAuthorityCommand =
  exports.serializeAws_json1_1RevokeCertificateCommand =
  exports.serializeAws_json1_1RestoreCertificateAuthorityCommand =
  exports.serializeAws_json1_1PutPolicyCommand =
  exports.serializeAws_json1_1ListTagsCommand =
  exports.serializeAws_json1_1ListPermissionsCommand =
  exports.serializeAws_json1_1ListCertificateAuthoritiesCommand =
  exports.serializeAws_json1_1IssueCertificateCommand =
  exports.serializeAws_json1_1ImportCertificateAuthorityCertificateCommand =
  exports.serializeAws_json1_1GetPolicyCommand =
  exports.serializeAws_json1_1GetCertificateAuthorityCsrCommand =
  exports.serializeAws_json1_1GetCertificateAuthorityCertificateCommand =
  exports.serializeAws_json1_1GetCertificateCommand =
  exports.serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand =
  exports.serializeAws_json1_1DescribeCertificateAuthorityCommand =
  exports.serializeAws_json1_1DeletePolicyCommand =
  exports.serializeAws_json1_1DeletePermissionCommand =
  exports.serializeAws_json1_1DeleteCertificateAuthorityCommand =
  exports.serializeAws_json1_1CreatePermissionCommand =
  exports.serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand =
  exports.serializeAws_json1_1CreateCertificateAuthorityCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.CreateCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCertificateAuthorityCommand = serializeAws_json1_1CreateCertificateAuthorityCommand;
const serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.CreateCertificateAuthorityAuditReport",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand =
  serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand;
const serializeAws_json1_1CreatePermissionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.CreatePermission",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1CreatePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePermissionCommand = serializeAws_json1_1CreatePermissionCommand;
const serializeAws_json1_1DeleteCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DeleteCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCertificateAuthorityCommand = serializeAws_json1_1DeleteCertificateAuthorityCommand;
const serializeAws_json1_1DeletePermissionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DeletePermission",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeletePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePermissionCommand = serializeAws_json1_1DeletePermissionCommand;
const serializeAws_json1_1DeletePolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DeletePolicy",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePolicyCommand = serializeAws_json1_1DeletePolicyCommand;
const serializeAws_json1_1DescribeCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DescribeCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCertificateAuthorityCommand =
  serializeAws_json1_1DescribeCertificateAuthorityCommand;
const serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DescribeCertificateAuthorityAuditReport",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand =
  serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand;
const serializeAws_json1_1GetCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCertificateCommand = serializeAws_json1_1GetCertificateCommand;
const serializeAws_json1_1GetCertificateAuthorityCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetCertificateAuthorityCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCertificateAuthorityCertificateCommand =
  serializeAws_json1_1GetCertificateAuthorityCertificateCommand;
const serializeAws_json1_1GetCertificateAuthorityCsrCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetCertificateAuthorityCsr",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCsrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetCertificateAuthorityCsrCommand = serializeAws_json1_1GetCertificateAuthorityCsrCommand;
const serializeAws_json1_1GetPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetPolicy",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetPolicyCommand = serializeAws_json1_1GetPolicyCommand;
const serializeAws_json1_1ImportCertificateAuthorityCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ImportCertificateAuthorityCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportCertificateAuthorityCertificateCommand =
  serializeAws_json1_1ImportCertificateAuthorityCertificateCommand;
const serializeAws_json1_1IssueCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.IssueCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1IssueCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1IssueCertificateCommand = serializeAws_json1_1IssueCertificateCommand;
const serializeAws_json1_1ListCertificateAuthoritiesCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ListCertificateAuthorities",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListCertificateAuthoritiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCertificateAuthoritiesCommand = serializeAws_json1_1ListCertificateAuthoritiesCommand;
const serializeAws_json1_1ListPermissionsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ListPermissions",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPermissionsCommand = serializeAws_json1_1ListPermissionsCommand;
const serializeAws_json1_1ListTagsCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ListTags",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
const serializeAws_json1_1PutPolicyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.PutPolicy",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPolicyCommand = serializeAws_json1_1PutPolicyCommand;
const serializeAws_json1_1RestoreCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.RestoreCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RestoreCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RestoreCertificateAuthorityCommand = serializeAws_json1_1RestoreCertificateAuthorityCommand;
const serializeAws_json1_1RevokeCertificateCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.RevokeCertificate",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1RevokeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RevokeCertificateCommand = serializeAws_json1_1RevokeCertificateCommand;
const serializeAws_json1_1TagCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.TagCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1TagCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagCertificateAuthorityCommand = serializeAws_json1_1TagCertificateAuthorityCommand;
const serializeAws_json1_1UntagCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.UntagCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UntagCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagCertificateAuthorityCommand = serializeAws_json1_1UntagCertificateAuthorityCommand;
const serializeAws_json1_1UpdateCertificateAuthorityCommand = async (input, context) => {
  const headers = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.UpdateCertificateAuthority",
  };
  let body;
  body = JSON.stringify(serializeAws_json1_1UpdateCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCertificateAuthorityCommand = serializeAws_json1_1UpdateCertificateAuthorityCommand;
const deserializeAws_json1_1CreateCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCertificateAuthorityCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCertificateAuthorityCommand =
  deserializeAws_json1_1CreateCertificateAuthorityCommand;
const deserializeAws_json1_1CreateCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = {
        ...(await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand =
  deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand;
const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1CreatePermissionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePermissionCommand = deserializeAws_json1_1CreatePermissionCommand;
const deserializeAws_json1_1CreatePermissionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PermissionAlreadyExistsException":
    case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCertificateAuthorityCommand =
  deserializeAws_json1_1DeleteCertificateAuthorityCommand;
const deserializeAws_json1_1DeleteCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1DeletePermissionCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePermissionCommand = deserializeAws_json1_1DeletePermissionCommand;
const deserializeAws_json1_1DeletePermissionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1DeletePolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePolicyCommand = deserializeAws_json1_1DeletePolicyCommand;
const deserializeAws_json1_1DeletePolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LockoutPreventedException":
    case "com.amazonaws.acmpca#LockoutPreventedException":
      response = {
        ...(await deserializeAws_json1_1LockoutPreventedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateAuthorityCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCertificateAuthorityCommand =
  deserializeAws_json1_1DescribeCertificateAuthorityCommand;
const deserializeAws_json1_1DescribeCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand =
  deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand;
const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1GetCertificateAuthorityCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCertificateAuthorityCertificateCommand =
  deserializeAws_json1_1GetCertificateAuthorityCertificateCommand;
const deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1GetCertificateAuthorityCsrCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCsrResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetCertificateAuthorityCsrCommand =
  deserializeAws_json1_1GetCertificateAuthorityCsrCommand;
const deserializeAws_json1_1GetCertificateAuthorityCsrCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1GetPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPolicyCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1GetPolicyResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetPolicyCommand = deserializeAws_json1_1GetPolicyCommand;
const deserializeAws_json1_1GetPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand =
  deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand;
const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateMismatchException":
    case "com.amazonaws.acmpca#CertificateMismatchException":
      response = {
        ...(await deserializeAws_json1_1CertificateMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedCertificateException":
    case "com.amazonaws.acmpca#MalformedCertificateException":
      response = {
        ...(await deserializeAws_json1_1MalformedCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1IssueCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IssueCertificateCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1IssueCertificateResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1IssueCertificateCommand = deserializeAws_json1_1IssueCertificateCommand;
const deserializeAws_json1_1IssueCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedCSRException":
    case "com.amazonaws.acmpca#MalformedCSRException":
      response = {
        ...(await deserializeAws_json1_1MalformedCSRExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1ListCertificateAuthoritiesCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCertificateAuthoritiesCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListCertificateAuthoritiesResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCertificateAuthoritiesCommand =
  deserializeAws_json1_1ListCertificateAuthoritiesCommand;
const deserializeAws_json1_1ListCertificateAuthoritiesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPermissionsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPermissionsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPermissionsCommand = deserializeAws_json1_1ListPermissionsCommand;
const deserializeAws_json1_1ListPermissionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1ListTagsCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data = await parseBody(output.body, context);
  let contents = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
const deserializeAws_json1_1ListTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1PutPolicyCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutPolicyCommand = deserializeAws_json1_1PutPolicyCommand;
const deserializeAws_json1_1PutPolicyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = {
        ...(await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LockoutPreventedException":
    case "com.amazonaws.acmpca#LockoutPreventedException":
      response = {
        ...(await deserializeAws_json1_1LockoutPreventedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1RestoreCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RestoreCertificateAuthorityCommand =
  deserializeAws_json1_1RestoreCertificateAuthorityCommand;
const deserializeAws_json1_1RestoreCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1RevokeCertificateCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokeCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1RevokeCertificateCommand = deserializeAws_json1_1RevokeCertificateCommand;
const deserializeAws_json1_1RevokeCertificateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestAlreadyProcessedException":
    case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
      response = {
        ...(await deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1TagCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagCertificateAuthorityCommand = deserializeAws_json1_1TagCertificateAuthorityCommand;
const deserializeAws_json1_1TagCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.acmpca#TooManyTagsException":
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
const deserializeAws_json1_1UntagCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagCertificateAuthorityCommand = deserializeAws_json1_1UntagCertificateAuthorityCommand;
const deserializeAws_json1_1UntagCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateCertificateAuthorityCommand = async (output, context) => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCertificateAuthorityCommand =
  deserializeAws_json1_1UpdateCertificateAuthorityCommand;
const deserializeAws_json1_1UpdateCertificateAuthorityCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = {
        ...(await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
const deserializeAws_json1_1CertificateMismatchExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1CertificateMismatchException(body, context);
  const contents = {
    name: "CertificateMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents = {
    name: "ConcurrentModificationException",
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
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidPolicyExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidPolicyException(body, context);
  const contents = {
    name: "InvalidPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents = {
    name: "InvalidRequestException",
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
const deserializeAws_json1_1LockoutPreventedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1LockoutPreventedException(body, context);
  const contents = {
    name: "LockoutPreventedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1MalformedCertificateExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1MalformedCertificateException(body, context);
  const contents = {
    name: "MalformedCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1MalformedCSRExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1MalformedCSRException(body, context);
  const contents = {
    name: "MalformedCSRException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1PermissionAlreadyExistsException(body, context);
  const contents = {
    name: "PermissionAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1RequestAlreadyProcessedException(body, context);
  const contents = {
    name: "RequestAlreadyProcessedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};
const deserializeAws_json1_1RequestFailedExceptionResponse = async (parsedOutput, context) => {
  const body = parsedOutput.body;
  const deserialized = deserializeAws_json1_1RequestFailedException(body, context);
  const contents = {
    name: "RequestFailedException",
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
const serializeAws_json1_1AccessDescription = (input, context) => {
  return {
    ...(input.AccessLocation !== undefined &&
      input.AccessLocation !== null && {
        AccessLocation: serializeAws_json1_1GeneralName(input.AccessLocation, context),
      }),
    ...(input.AccessMethod !== undefined &&
      input.AccessMethod !== null && { AccessMethod: serializeAws_json1_1AccessMethod(input.AccessMethod, context) }),
  };
};
const serializeAws_json1_1AccessDescriptionList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1AccessDescription(entry, context);
    });
};
const serializeAws_json1_1AccessMethod = (input, context) => {
  return {
    ...(input.AccessMethodType !== undefined &&
      input.AccessMethodType !== null && { AccessMethodType: input.AccessMethodType }),
    ...(input.CustomObjectIdentifier !== undefined &&
      input.CustomObjectIdentifier !== null && { CustomObjectIdentifier: input.CustomObjectIdentifier }),
  };
};
const serializeAws_json1_1ActionList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_json1_1ApiPassthrough = (input, context) => {
  return {
    ...(input.Extensions !== undefined &&
      input.Extensions !== null && { Extensions: serializeAws_json1_1Extensions(input.Extensions, context) }),
    ...(input.Subject !== undefined &&
      input.Subject !== null && { Subject: serializeAws_json1_1ASN1Subject(input.Subject, context) }),
  };
};
const serializeAws_json1_1ASN1Subject = (input, context) => {
  return {
    ...(input.CommonName !== undefined && input.CommonName !== null && { CommonName: input.CommonName }),
    ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
    ...(input.DistinguishedNameQualifier !== undefined &&
      input.DistinguishedNameQualifier !== null && { DistinguishedNameQualifier: input.DistinguishedNameQualifier }),
    ...(input.GenerationQualifier !== undefined &&
      input.GenerationQualifier !== null && { GenerationQualifier: input.GenerationQualifier }),
    ...(input.GivenName !== undefined && input.GivenName !== null && { GivenName: input.GivenName }),
    ...(input.Initials !== undefined && input.Initials !== null && { Initials: input.Initials }),
    ...(input.Locality !== undefined && input.Locality !== null && { Locality: input.Locality }),
    ...(input.Organization !== undefined && input.Organization !== null && { Organization: input.Organization }),
    ...(input.OrganizationalUnit !== undefined &&
      input.OrganizationalUnit !== null && { OrganizationalUnit: input.OrganizationalUnit }),
    ...(input.Pseudonym !== undefined && input.Pseudonym !== null && { Pseudonym: input.Pseudonym }),
    ...(input.SerialNumber !== undefined && input.SerialNumber !== null && { SerialNumber: input.SerialNumber }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.Surname !== undefined && input.Surname !== null && { Surname: input.Surname }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
  };
};
const serializeAws_json1_1CertificateAuthorityConfiguration = (input, context) => {
  return {
    ...(input.CsrExtensions !== undefined &&
      input.CsrExtensions !== null && {
        CsrExtensions: serializeAws_json1_1CsrExtensions(input.CsrExtensions, context),
      }),
    ...(input.KeyAlgorithm !== undefined && input.KeyAlgorithm !== null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.SigningAlgorithm !== undefined &&
      input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }),
    ...(input.Subject !== undefined &&
      input.Subject !== null && { Subject: serializeAws_json1_1ASN1Subject(input.Subject, context) }),
  };
};
const serializeAws_json1_1CertificatePolicyList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1PolicyInformation(entry, context);
    });
};
const serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = (input, context) => {
  return {
    ...(input.AuditReportResponseFormat !== undefined &&
      input.AuditReportResponseFormat !== null && { AuditReportResponseFormat: input.AuditReportResponseFormat }),
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
  };
};
const serializeAws_json1_1CreateCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityConfiguration !== undefined &&
      input.CertificateAuthorityConfiguration !== null && {
        CertificateAuthorityConfiguration: serializeAws_json1_1CertificateAuthorityConfiguration(
          input.CertificateAuthorityConfiguration,
          context
        ),
      }),
    ...(input.CertificateAuthorityType !== undefined &&
      input.CertificateAuthorityType !== null && { CertificateAuthorityType: input.CertificateAuthorityType }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.KeyStorageSecurityStandard !== undefined &&
      input.KeyStorageSecurityStandard !== null && { KeyStorageSecurityStandard: input.KeyStorageSecurityStandard }),
    ...(input.RevocationConfiguration !== undefined &&
      input.RevocationConfiguration !== null && {
        RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1CreatePermissionRequest = (input, context) => {
  return {
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
    ...(input.SourceAccount !== undefined && input.SourceAccount !== null && { SourceAccount: input.SourceAccount }),
  };
};
const serializeAws_json1_1CrlConfiguration = (input, context) => {
  return {
    ...(input.CustomCname !== undefined && input.CustomCname !== null && { CustomCname: input.CustomCname }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.ExpirationInDays !== undefined &&
      input.ExpirationInDays !== null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3ObjectAcl !== undefined && input.S3ObjectAcl !== null && { S3ObjectAcl: input.S3ObjectAcl }),
  };
};
const serializeAws_json1_1CsrExtensions = (input, context) => {
  return {
    ...(input.KeyUsage !== undefined &&
      input.KeyUsage !== null && { KeyUsage: serializeAws_json1_1KeyUsage(input.KeyUsage, context) }),
    ...(input.SubjectInformationAccess !== undefined &&
      input.SubjectInformationAccess !== null && {
        SubjectInformationAccess: serializeAws_json1_1AccessDescriptionList(input.SubjectInformationAccess, context),
      }),
  };
};
const serializeAws_json1_1DeleteCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.PermanentDeletionTimeInDays !== undefined &&
      input.PermanentDeletionTimeInDays !== null && { PermanentDeletionTimeInDays: input.PermanentDeletionTimeInDays }),
  };
};
const serializeAws_json1_1DeletePermissionRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
    ...(input.SourceAccount !== undefined && input.SourceAccount !== null && { SourceAccount: input.SourceAccount }),
  };
};
const serializeAws_json1_1DeletePolicyRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};
const serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = (input, context) => {
  return {
    ...(input.AuditReportId !== undefined && input.AuditReportId !== null && { AuditReportId: input.AuditReportId }),
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};
const serializeAws_json1_1DescribeCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};
const serializeAws_json1_1EdiPartyName = (input, context) => {
  return {
    ...(input.NameAssigner !== undefined && input.NameAssigner !== null && { NameAssigner: input.NameAssigner }),
    ...(input.PartyName !== undefined && input.PartyName !== null && { PartyName: input.PartyName }),
  };
};
const serializeAws_json1_1ExtendedKeyUsage = (input, context) => {
  return {
    ...(input.ExtendedKeyUsageObjectIdentifier !== undefined &&
      input.ExtendedKeyUsageObjectIdentifier !== null && {
        ExtendedKeyUsageObjectIdentifier: input.ExtendedKeyUsageObjectIdentifier,
      }),
    ...(input.ExtendedKeyUsageType !== undefined &&
      input.ExtendedKeyUsageType !== null && { ExtendedKeyUsageType: input.ExtendedKeyUsageType }),
  };
};
const serializeAws_json1_1ExtendedKeyUsageList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ExtendedKeyUsage(entry, context);
    });
};
const serializeAws_json1_1Extensions = (input, context) => {
  return {
    ...(input.CertificatePolicies !== undefined &&
      input.CertificatePolicies !== null && {
        CertificatePolicies: serializeAws_json1_1CertificatePolicyList(input.CertificatePolicies, context),
      }),
    ...(input.ExtendedKeyUsage !== undefined &&
      input.ExtendedKeyUsage !== null && {
        ExtendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageList(input.ExtendedKeyUsage, context),
      }),
    ...(input.KeyUsage !== undefined &&
      input.KeyUsage !== null && { KeyUsage: serializeAws_json1_1KeyUsage(input.KeyUsage, context) }),
    ...(input.SubjectAlternativeNames !== undefined &&
      input.SubjectAlternativeNames !== null && {
        SubjectAlternativeNames: serializeAws_json1_1GeneralNameList(input.SubjectAlternativeNames, context),
      }),
  };
};
const serializeAws_json1_1GeneralName = (input, context) => {
  return {
    ...(input.DirectoryName !== undefined &&
      input.DirectoryName !== null && { DirectoryName: serializeAws_json1_1ASN1Subject(input.DirectoryName, context) }),
    ...(input.DnsName !== undefined && input.DnsName !== null && { DnsName: input.DnsName }),
    ...(input.EdiPartyName !== undefined &&
      input.EdiPartyName !== null && { EdiPartyName: serializeAws_json1_1EdiPartyName(input.EdiPartyName, context) }),
    ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
    ...(input.OtherName !== undefined &&
      input.OtherName !== null && { OtherName: serializeAws_json1_1OtherName(input.OtherName, context) }),
    ...(input.RegisteredId !== undefined && input.RegisteredId !== null && { RegisteredId: input.RegisteredId }),
    ...(input.Rfc822Name !== undefined && input.Rfc822Name !== null && { Rfc822Name: input.Rfc822Name }),
    ...(input.UniformResourceIdentifier !== undefined &&
      input.UniformResourceIdentifier !== null && { UniformResourceIdentifier: input.UniformResourceIdentifier }),
  };
};
const serializeAws_json1_1GeneralNameList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1GeneralName(entry, context);
    });
};
const serializeAws_json1_1GetCertificateAuthorityCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};
const serializeAws_json1_1GetCertificateAuthorityCsrRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};
const serializeAws_json1_1GetCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { CertificateArn: input.CertificateArn }),
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};
const serializeAws_json1_1GetPolicyRequest = (input, context) => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};
const serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = (input, context) => {
  return {
    ...(input.Certificate !== undefined &&
      input.Certificate !== null && { Certificate: context.base64Encoder(input.Certificate) }),
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CertificateChain !== undefined &&
      input.CertificateChain !== null && { CertificateChain: context.base64Encoder(input.CertificateChain) }),
  };
};
const serializeAws_json1_1IssueCertificateRequest = (input, context) => {
  return {
    ...(input.ApiPassthrough !== undefined &&
      input.ApiPassthrough !== null && {
        ApiPassthrough: serializeAws_json1_1ApiPassthrough(input.ApiPassthrough, context),
      }),
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Csr !== undefined && input.Csr !== null && { Csr: context.base64Encoder(input.Csr) }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.SigningAlgorithm !== undefined &&
      input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }),
    ...(input.TemplateArn !== undefined && input.TemplateArn !== null && { TemplateArn: input.TemplateArn }),
    ...(input.Validity !== undefined &&
      input.Validity !== null && { Validity: serializeAws_json1_1Validity(input.Validity, context) }),
    ...(input.ValidityNotBefore !== undefined &&
      input.ValidityNotBefore !== null && {
        ValidityNotBefore: serializeAws_json1_1Validity(input.ValidityNotBefore, context),
      }),
  };
};
const serializeAws_json1_1KeyUsage = (input, context) => {
  return {
    ...(input.CRLSign !== undefined && input.CRLSign !== null && { CRLSign: input.CRLSign }),
    ...(input.DataEncipherment !== undefined &&
      input.DataEncipherment !== null && { DataEncipherment: input.DataEncipherment }),
    ...(input.DecipherOnly !== undefined && input.DecipherOnly !== null && { DecipherOnly: input.DecipherOnly }),
    ...(input.DigitalSignature !== undefined &&
      input.DigitalSignature !== null && { DigitalSignature: input.DigitalSignature }),
    ...(input.EncipherOnly !== undefined && input.EncipherOnly !== null && { EncipherOnly: input.EncipherOnly }),
    ...(input.KeyAgreement !== undefined && input.KeyAgreement !== null && { KeyAgreement: input.KeyAgreement }),
    ...(input.KeyCertSign !== undefined && input.KeyCertSign !== null && { KeyCertSign: input.KeyCertSign }),
    ...(input.KeyEncipherment !== undefined &&
      input.KeyEncipherment !== null && { KeyEncipherment: input.KeyEncipherment }),
    ...(input.NonRepudiation !== undefined &&
      input.NonRepudiation !== null && { NonRepudiation: input.NonRepudiation }),
  };
};
const serializeAws_json1_1ListCertificateAuthoritiesRequest = (input, context) => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceOwner !== undefined && input.ResourceOwner !== null && { ResourceOwner: input.ResourceOwner }),
  };
};
const serializeAws_json1_1ListPermissionsRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};
const serializeAws_json1_1OtherName = (input, context) => {
  return {
    ...(input.TypeId !== undefined && input.TypeId !== null && { TypeId: input.TypeId }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1PolicyInformation = (input, context) => {
  return {
    ...(input.CertPolicyId !== undefined && input.CertPolicyId !== null && { CertPolicyId: input.CertPolicyId }),
    ...(input.PolicyQualifiers !== undefined &&
      input.PolicyQualifiers !== null && {
        PolicyQualifiers: serializeAws_json1_1PolicyQualifierInfoList(input.PolicyQualifiers, context),
      }),
  };
};
const serializeAws_json1_1PolicyQualifierInfo = (input, context) => {
  return {
    ...(input.PolicyQualifierId !== undefined &&
      input.PolicyQualifierId !== null && { PolicyQualifierId: input.PolicyQualifierId }),
    ...(input.Qualifier !== undefined &&
      input.Qualifier !== null && { Qualifier: serializeAws_json1_1Qualifier(input.Qualifier, context) }),
  };
};
const serializeAws_json1_1PolicyQualifierInfoList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1PolicyQualifierInfo(entry, context);
    });
};
const serializeAws_json1_1PutPolicyRequest = (input, context) => {
  return {
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};
const serializeAws_json1_1Qualifier = (input, context) => {
  return {
    ...(input.CpsUri !== undefined && input.CpsUri !== null && { CpsUri: input.CpsUri }),
  };
};
const serializeAws_json1_1RestoreCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};
const serializeAws_json1_1RevocationConfiguration = (input, context) => {
  return {
    ...(input.CrlConfiguration !== undefined &&
      input.CrlConfiguration !== null && {
        CrlConfiguration: serializeAws_json1_1CrlConfiguration(input.CrlConfiguration, context),
      }),
  };
};
const serializeAws_json1_1RevokeCertificateRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CertificateSerial !== undefined &&
      input.CertificateSerial !== null && { CertificateSerial: input.CertificateSerial }),
    ...(input.RevocationReason !== undefined &&
      input.RevocationReason !== null && { RevocationReason: input.RevocationReason }),
  };
};
const serializeAws_json1_1Tag = (input, context) => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const serializeAws_json1_1TagCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
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
const serializeAws_json1_1UntagCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};
const serializeAws_json1_1UpdateCertificateAuthorityRequest = (input, context) => {
  return {
    ...(input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.RevocationConfiguration !== undefined &&
      input.RevocationConfiguration !== null && {
        RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context),
      }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};
const serializeAws_json1_1Validity = (input, context) => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};
const deserializeAws_json1_1AccessDescription = (output, context) => {
  return {
    AccessLocation:
      output.AccessLocation !== undefined && output.AccessLocation !== null
        ? deserializeAws_json1_1GeneralName(output.AccessLocation, context)
        : undefined,
    AccessMethod:
      output.AccessMethod !== undefined && output.AccessMethod !== null
        ? deserializeAws_json1_1AccessMethod(output.AccessMethod, context)
        : undefined,
  };
};
const deserializeAws_json1_1AccessDescriptionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AccessDescription(entry, context);
    });
};
const deserializeAws_json1_1AccessMethod = (output, context) => {
  return {
    AccessMethodType:
      output.AccessMethodType !== undefined && output.AccessMethodType !== null ? output.AccessMethodType : undefined,
    CustomObjectIdentifier:
      output.CustomObjectIdentifier !== undefined && output.CustomObjectIdentifier !== null
        ? output.CustomObjectIdentifier
        : undefined,
  };
};
const deserializeAws_json1_1ActionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_json1_1ASN1Subject = (output, context) => {
  return {
    CommonName: output.CommonName !== undefined && output.CommonName !== null ? output.CommonName : undefined,
    Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
    DistinguishedNameQualifier:
      output.DistinguishedNameQualifier !== undefined && output.DistinguishedNameQualifier !== null
        ? output.DistinguishedNameQualifier
        : undefined,
    GenerationQualifier:
      output.GenerationQualifier !== undefined && output.GenerationQualifier !== null
        ? output.GenerationQualifier
        : undefined,
    GivenName: output.GivenName !== undefined && output.GivenName !== null ? output.GivenName : undefined,
    Initials: output.Initials !== undefined && output.Initials !== null ? output.Initials : undefined,
    Locality: output.Locality !== undefined && output.Locality !== null ? output.Locality : undefined,
    Organization: output.Organization !== undefined && output.Organization !== null ? output.Organization : undefined,
    OrganizationalUnit:
      output.OrganizationalUnit !== undefined && output.OrganizationalUnit !== null
        ? output.OrganizationalUnit
        : undefined,
    Pseudonym: output.Pseudonym !== undefined && output.Pseudonym !== null ? output.Pseudonym : undefined,
    SerialNumber: output.SerialNumber !== undefined && output.SerialNumber !== null ? output.SerialNumber : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Surname: output.Surname !== undefined && output.Surname !== null ? output.Surname : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
  };
};
const deserializeAws_json1_1CertificateAuthorities = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1CertificateAuthority(entry, context);
    });
};
const deserializeAws_json1_1CertificateAuthority = (output, context) => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CertificateAuthorityConfiguration:
      output.CertificateAuthorityConfiguration !== undefined && output.CertificateAuthorityConfiguration !== null
        ? deserializeAws_json1_1CertificateAuthorityConfiguration(output.CertificateAuthorityConfiguration, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    KeyStorageSecurityStandard:
      output.KeyStorageSecurityStandard !== undefined && output.KeyStorageSecurityStandard !== null
        ? output.KeyStorageSecurityStandard
        : undefined,
    LastStateChangeAt:
      output.LastStateChangeAt !== undefined && output.LastStateChangeAt !== null
        ? new Date(Math.round(output.LastStateChangeAt * 1000))
        : undefined,
    NotAfter:
      output.NotAfter !== undefined && output.NotAfter !== null
        ? new Date(Math.round(output.NotAfter * 1000))
        : undefined,
    NotBefore:
      output.NotBefore !== undefined && output.NotBefore !== null
        ? new Date(Math.round(output.NotBefore * 1000))
        : undefined,
    OwnerAccount: output.OwnerAccount !== undefined && output.OwnerAccount !== null ? output.OwnerAccount : undefined,
    RestorableUntil:
      output.RestorableUntil !== undefined && output.RestorableUntil !== null
        ? new Date(Math.round(output.RestorableUntil * 1000))
        : undefined,
    RevocationConfiguration:
      output.RevocationConfiguration !== undefined && output.RevocationConfiguration !== null
        ? deserializeAws_json1_1RevocationConfiguration(output.RevocationConfiguration, context)
        : undefined,
    Serial: output.Serial !== undefined && output.Serial !== null ? output.Serial : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  };
};
const deserializeAws_json1_1CertificateAuthorityConfiguration = (output, context) => {
  return {
    CsrExtensions:
      output.CsrExtensions !== undefined && output.CsrExtensions !== null
        ? deserializeAws_json1_1CsrExtensions(output.CsrExtensions, context)
        : undefined,
    KeyAlgorithm: output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null ? output.KeyAlgorithm : undefined,
    SigningAlgorithm:
      output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null ? output.SigningAlgorithm : undefined,
    Subject:
      output.Subject !== undefined && output.Subject !== null
        ? deserializeAws_json1_1ASN1Subject(output.Subject, context)
        : undefined,
  };
};
const deserializeAws_json1_1CertificateMismatchException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = (output, context) => {
  return {
    AuditReportId:
      output.AuditReportId !== undefined && output.AuditReportId !== null ? output.AuditReportId : undefined,
    S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
  };
};
const deserializeAws_json1_1CreateCertificateAuthorityResponse = (output, context) => {
  return {
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
  };
};
const deserializeAws_json1_1CrlConfiguration = (output, context) => {
  return {
    CustomCname: output.CustomCname !== undefined && output.CustomCname !== null ? output.CustomCname : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    ExpirationInDays:
      output.ExpirationInDays !== undefined && output.ExpirationInDays !== null ? output.ExpirationInDays : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    S3ObjectAcl: output.S3ObjectAcl !== undefined && output.S3ObjectAcl !== null ? output.S3ObjectAcl : undefined,
  };
};
const deserializeAws_json1_1CsrExtensions = (output, context) => {
  return {
    KeyUsage:
      output.KeyUsage !== undefined && output.KeyUsage !== null
        ? deserializeAws_json1_1KeyUsage(output.KeyUsage, context)
        : undefined,
    SubjectInformationAccess:
      output.SubjectInformationAccess !== undefined && output.SubjectInformationAccess !== null
        ? deserializeAws_json1_1AccessDescriptionList(output.SubjectInformationAccess, context)
        : undefined,
  };
};
const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = (output, context) => {
  return {
    AuditReportStatus:
      output.AuditReportStatus !== undefined && output.AuditReportStatus !== null
        ? output.AuditReportStatus
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
  };
};
const deserializeAws_json1_1DescribeCertificateAuthorityResponse = (output, context) => {
  return {
    CertificateAuthority:
      output.CertificateAuthority !== undefined && output.CertificateAuthority !== null
        ? deserializeAws_json1_1CertificateAuthority(output.CertificateAuthority, context)
        : undefined,
  };
};
const deserializeAws_json1_1EdiPartyName = (output, context) => {
  return {
    NameAssigner: output.NameAssigner !== undefined && output.NameAssigner !== null ? output.NameAssigner : undefined,
    PartyName: output.PartyName !== undefined && output.PartyName !== null ? output.PartyName : undefined,
  };
};
const deserializeAws_json1_1GeneralName = (output, context) => {
  return {
    DirectoryName:
      output.DirectoryName !== undefined && output.DirectoryName !== null
        ? deserializeAws_json1_1ASN1Subject(output.DirectoryName, context)
        : undefined,
    DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
    EdiPartyName:
      output.EdiPartyName !== undefined && output.EdiPartyName !== null
        ? deserializeAws_json1_1EdiPartyName(output.EdiPartyName, context)
        : undefined,
    IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
    OtherName:
      output.OtherName !== undefined && output.OtherName !== null
        ? deserializeAws_json1_1OtherName(output.OtherName, context)
        : undefined,
    RegisteredId: output.RegisteredId !== undefined && output.RegisteredId !== null ? output.RegisteredId : undefined,
    Rfc822Name: output.Rfc822Name !== undefined && output.Rfc822Name !== null ? output.Rfc822Name : undefined,
    UniformResourceIdentifier:
      output.UniformResourceIdentifier !== undefined && output.UniformResourceIdentifier !== null
        ? output.UniformResourceIdentifier
        : undefined,
  };
};
const deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = (output, context) => {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
  };
};
const deserializeAws_json1_1GetCertificateAuthorityCsrResponse = (output, context) => {
  return {
    Csr: output.Csr !== undefined && output.Csr !== null ? output.Csr : undefined,
  };
};
const deserializeAws_json1_1GetCertificateResponse = (output, context) => {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
  };
};
const deserializeAws_json1_1GetPolicyResponse = (output, context) => {
  return {
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
  };
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
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidPolicyException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
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
const deserializeAws_json1_1IssueCertificateResponse = (output, context) => {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
  };
};
const deserializeAws_json1_1KeyUsage = (output, context) => {
  return {
    CRLSign: output.CRLSign !== undefined && output.CRLSign !== null ? output.CRLSign : undefined,
    DataEncipherment:
      output.DataEncipherment !== undefined && output.DataEncipherment !== null ? output.DataEncipherment : undefined,
    DecipherOnly: output.DecipherOnly !== undefined && output.DecipherOnly !== null ? output.DecipherOnly : undefined,
    DigitalSignature:
      output.DigitalSignature !== undefined && output.DigitalSignature !== null ? output.DigitalSignature : undefined,
    EncipherOnly: output.EncipherOnly !== undefined && output.EncipherOnly !== null ? output.EncipherOnly : undefined,
    KeyAgreement: output.KeyAgreement !== undefined && output.KeyAgreement !== null ? output.KeyAgreement : undefined,
    KeyCertSign: output.KeyCertSign !== undefined && output.KeyCertSign !== null ? output.KeyCertSign : undefined,
    KeyEncipherment:
      output.KeyEncipherment !== undefined && output.KeyEncipherment !== null ? output.KeyEncipherment : undefined,
    NonRepudiation:
      output.NonRepudiation !== undefined && output.NonRepudiation !== null ? output.NonRepudiation : undefined,
  };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ListCertificateAuthoritiesResponse = (output, context) => {
  return {
    CertificateAuthorities:
      output.CertificateAuthorities !== undefined && output.CertificateAuthorities !== null
        ? deserializeAws_json1_1CertificateAuthorities(output.CertificateAuthorities, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
const deserializeAws_json1_1ListPermissionsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
        : undefined,
  };
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
const deserializeAws_json1_1LockoutPreventedException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1MalformedCertificateException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1MalformedCSRException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1OtherName = (output, context) => {
  return {
    TypeId: output.TypeId !== undefined && output.TypeId !== null ? output.TypeId : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
const deserializeAws_json1_1Permission = (output, context) => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1ActionList(output.Actions, context)
        : undefined,
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    Principal: output.Principal !== undefined && output.Principal !== null ? output.Principal : undefined,
    SourceAccount:
      output.SourceAccount !== undefined && output.SourceAccount !== null ? output.SourceAccount : undefined,
  };
};
const deserializeAws_json1_1PermissionAlreadyExistsException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1PermissionList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Permission(entry, context);
    });
};
const deserializeAws_json1_1RequestAlreadyProcessedException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1RequestFailedException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1RequestInProgressException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
const deserializeAws_json1_1RevocationConfiguration = (output, context) => {
  return {
    CrlConfiguration:
      output.CrlConfiguration !== undefined && output.CrlConfiguration !== null
        ? deserializeAws_json1_1CrlConfiguration(output.CrlConfiguration, context)
        : undefined,
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
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
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
