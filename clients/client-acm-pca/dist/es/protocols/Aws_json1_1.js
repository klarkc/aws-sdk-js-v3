import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.CreateCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.CreateCertificateAuthorityAuditReport",
      };
      body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreatePermissionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.CreatePermission",
      };
      body = JSON.stringify(serializeAws_json1_1CreatePermissionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.DeleteCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeletePermissionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.DeletePermission",
      };
      body = JSON.stringify(serializeAws_json1_1DeletePermissionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeletePolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.DeletePolicy",
      };
      body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.DescribeCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.DescribeCertificateAuthorityAuditReport",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.GetCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetCertificateAuthorityCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.GetCertificateAuthorityCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetCertificateAuthorityCsrCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.GetCertificateAuthorityCsr",
      };
      body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCsrRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.GetPolicy",
      };
      body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ImportCertificateAuthorityCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.ImportCertificateAuthorityCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1IssueCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.IssueCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1IssueCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListCertificateAuthoritiesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.ListCertificateAuthorities",
      };
      body = JSON.stringify(serializeAws_json1_1ListCertificateAuthoritiesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListPermissionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.ListPermissions",
      };
      body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.ListTags",
      };
      body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.PutPolicy",
      };
      body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RestoreCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.RestoreCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1RestoreCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RevokeCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.RevokeCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1RevokeCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1TagCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.TagCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1TagCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UntagCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.UntagCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1UntagCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateCertificateAuthorityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ACMPrivateCA.UpdateCertificateAuthority",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateCertificateAuthorityRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1CreateCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateCertificateAuthorityResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArgsException":
              return [3 /*break*/, 2];
            case "InvalidPolicyException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidPolicyException":
              return [3 /*break*/, 4];
            case "InvalidTagException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidTagException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#LimitExceededException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArgsException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 6];
            case "RequestFailedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 8];
            case "RequestInProgressException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#RequestInProgressException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1CreatePermissionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreatePermissionCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreatePermissionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#LimitExceededException":
              return [3 /*break*/, 6];
            case "PermissionAlreadyExistsException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
              return [3 /*break*/, 8];
            case "RequestFailedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeleteCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeletePermissionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeletePermissionCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeletePermissionCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "RequestFailedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DeletePolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeletePolicyCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeletePolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 6];
            case "LockoutPreventedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#LockoutPreventedException":
              return [3 /*break*/, 8];
            case "RequestFailedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LockoutPreventedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeCertificateAuthorityResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          _a = [__assign({}, output)];
          _e = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_e.body = _f.sent()), _e)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 6:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _f.label = 7;
        case 7:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArgsException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "RequestFailedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 6];
            case "RequestInProgressException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#RequestInProgressException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetCertificateAuthorityCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetCertificateAuthorityCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetCertificateAuthorityCsrCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetCertificateAuthorityCsrResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetCertificateAuthorityCsrCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "RequestFailedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 6];
            case "RequestInProgressException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#RequestInProgressException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1GetPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetPolicyResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetPolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "RequestFailedException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(output, context),
            ];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "CertificateMismatchException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#CertificateMismatchException":
              return [3 /*break*/, 2];
            case "ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#ConcurrentModificationException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidRequestException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#InvalidRequestException":
              return [3 /*break*/, 8];
            case "InvalidStateException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 10];
            case "MalformedCertificateException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#MalformedCertificateException":
              return [3 /*break*/, 12];
            case "RequestFailedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 14];
            case "RequestInProgressException":
              return [3 /*break*/, 16];
            case "com.amazonaws.acmpca#RequestInProgressException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1CertificateMismatchExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1MalformedCertificateExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1IssueCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1IssueCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1IssueCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1IssueCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArgsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArgsException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#LimitExceededException":
              return [3 /*break*/, 8];
            case "MalformedCSRException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#MalformedCSRException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1MalformedCSRExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListCertificateAuthoritiesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListCertificateAuthoritiesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListCertificateAuthoritiesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListCertificateAuthoritiesCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [__assign({}, output)];
          _d = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_d.body = _e.sent()), _d)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidNextTokenException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidNextTokenException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_e.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 5];
        case 4:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _e.label = 5;
        case 5:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListPermissionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListPermissionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListPermissionsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidNextTokenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidNextTokenException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 6];
            case "RequestFailedException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1ListTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListTagsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListTagsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListTagsCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1PutPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutPolicyCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
      switch (_l.label) {
        case 0:
          _a = [__assign({}, output)];
          _k = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_k.body = _l.sent()), _k)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "InvalidPolicyException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidPolicyException":
              return [3 /*break*/, 6];
            case "InvalidStateException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 8];
            case "LockoutPreventedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#LockoutPreventedException":
              return [3 /*break*/, 10];
            case "RequestFailedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LockoutPreventedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 16:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _l.label = 17;
        case 17:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1RestoreCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RestoreCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RestoreCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          _a = [__assign({}, output)];
          _f = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_f.body = _g.sent()), _f)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 8:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _g.label = 9;
        case 9:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1RevokeCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RevokeCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RevokeCertificateCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
      switch (_o.label) {
        case 0:
          _a = [__assign({}, output)];
          _m = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_m.body = _o.sent()), _m)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidArnException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 4];
            case "InvalidRequestException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidRequestException":
              return [3 /*break*/, 6];
            case "InvalidStateException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#LimitExceededException":
              return [3 /*break*/, 10];
            case "RequestAlreadyProcessedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
              return [3 /*break*/, 12];
            case "RequestFailedException":
              return [3 /*break*/, 14];
            case "com.amazonaws.acmpca#RequestFailedException":
              return [3 /*break*/, 14];
            case "RequestInProgressException":
              return [3 /*break*/, 16];
            case "com.amazonaws.acmpca#RequestInProgressException":
              return [3 /*break*/, 16];
            case "ResourceNotFoundException":
              return [3 /*break*/, 18];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 18];
          }
          return [3 /*break*/, 20];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 18:
          _l = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 19:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _l.concat([_o.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 21];
        case 20:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _o.label = 21;
        case 21:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1TagCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1TagCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1TagCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [__assign({}, output)];
          _h = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_h.body = _j.sent()), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "InvalidTagException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidTagException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "TooManyTagsException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#TooManyTagsException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _j.label = 13;
        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UntagCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UntagCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UntagCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [__assign({}, output)];
          _g = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_g.body = _h.sent()), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 4];
            case "InvalidTagException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidTagException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _h.label = 11;
        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1UpdateCertificateAuthorityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateCertificateAuthorityCommandError(output, context)];
          }
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          response = {
            $metadata: deserializeMetadata(output),
          };
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateCertificateAuthorityCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          _a = [__assign({}, output)];
          _j = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_j.body = _k.sent()), _j)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acmpca#ConcurrentModificationException":
              return [3 /*break*/, 2];
            case "InvalidArgsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acmpca#InvalidArgsException":
              return [3 /*break*/, 4];
            case "InvalidArnException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acmpca#InvalidArnException":
              return [3 /*break*/, 6];
            case "InvalidPolicyException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acmpca#InvalidPolicyException":
              return [3 /*break*/, 8];
            case "InvalidStateException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acmpca#InvalidStateException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acmpca#ResourceNotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 14:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _k.label = 15;
        case 15:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
var deserializeAws_json1_1CertificateMismatchExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1CertificateMismatchException(body, context);
      contents = __assign(
        { name: "CertificateMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ConcurrentModificationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
      contents = __assign(
        { name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidArgsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidArgsException(body, context);
      contents = __assign(
        { name: "InvalidArgsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidArnExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidArnException(body, context);
      contents = __assign(
        { name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidNextTokenExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
      contents = __assign(
        { name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidPolicyExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidPolicyException(body, context);
      contents = __assign(
        { name: "InvalidPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
      contents = __assign(
        { name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidStateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidStateException(body, context);
      contents = __assign(
        { name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidTagExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidTagException(body, context);
      contents = __assign(
        { name: "InvalidTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LimitExceededException(body, context);
      contents = __assign(
        { name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1LockoutPreventedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1LockoutPreventedException(body, context);
      contents = __assign(
        { name: "LockoutPreventedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1MalformedCertificateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1MalformedCertificateException(body, context);
      contents = __assign(
        { name: "MalformedCertificateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1MalformedCSRExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1MalformedCSRException(body, context);
      contents = __assign(
        { name: "MalformedCSRException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1PermissionAlreadyExistsException(body, context);
      contents = __assign(
        { name: "PermissionAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1RequestAlreadyProcessedException(body, context);
      contents = __assign(
        { name: "RequestAlreadyProcessedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1RequestFailedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1RequestFailedException(body, context);
      contents = __assign(
        { name: "RequestFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1RequestInProgressExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1RequestInProgressException(body, context);
      contents = __assign(
        { name: "RequestInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
      contents = __assign(
        { name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1TooManyTagsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
      contents = __assign(
        { name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1AccessDescription = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AccessLocation !== undefined &&
        input.AccessLocation !== null && {
          AccessLocation: serializeAws_json1_1GeneralName(input.AccessLocation, context),
        }
    ),
    input.AccessMethod !== undefined &&
      input.AccessMethod !== null && { AccessMethod: serializeAws_json1_1AccessMethod(input.AccessMethod, context) }
  );
};
var serializeAws_json1_1AccessDescriptionList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1AccessDescription(entry, context);
    });
};
var serializeAws_json1_1AccessMethod = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AccessMethodType !== undefined &&
        input.AccessMethodType !== null && { AccessMethodType: input.AccessMethodType }
    ),
    input.CustomObjectIdentifier !== undefined &&
      input.CustomObjectIdentifier !== null && { CustomObjectIdentifier: input.CustomObjectIdentifier }
  );
};
var serializeAws_json1_1ActionList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var serializeAws_json1_1ApiPassthrough = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Extensions !== undefined &&
        input.Extensions !== null && { Extensions: serializeAws_json1_1Extensions(input.Extensions, context) }
    ),
    input.Subject !== undefined &&
      input.Subject !== null && { Subject: serializeAws_json1_1ASN1Subject(input.Subject, context) }
  );
};
var serializeAws_json1_1ASN1Subject = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            __assign(
                              {},
                              input.CommonName !== undefined &&
                                input.CommonName !== null && { CommonName: input.CommonName }
                            ),
                            input.Country !== undefined && input.Country !== null && { Country: input.Country }
                          ),
                          input.DistinguishedNameQualifier !== undefined &&
                            input.DistinguishedNameQualifier !== null && {
                              DistinguishedNameQualifier: input.DistinguishedNameQualifier,
                            }
                        ),
                        input.GenerationQualifier !== undefined &&
                          input.GenerationQualifier !== null && { GenerationQualifier: input.GenerationQualifier }
                      ),
                      input.GivenName !== undefined && input.GivenName !== null && { GivenName: input.GivenName }
                    ),
                    input.Initials !== undefined && input.Initials !== null && { Initials: input.Initials }
                  ),
                  input.Locality !== undefined && input.Locality !== null && { Locality: input.Locality }
                ),
                input.Organization !== undefined && input.Organization !== null && { Organization: input.Organization }
              ),
              input.OrganizationalUnit !== undefined &&
                input.OrganizationalUnit !== null && { OrganizationalUnit: input.OrganizationalUnit }
            ),
            input.Pseudonym !== undefined && input.Pseudonym !== null && { Pseudonym: input.Pseudonym }
          ),
          input.SerialNumber !== undefined && input.SerialNumber !== null && { SerialNumber: input.SerialNumber }
        ),
        input.State !== undefined && input.State !== null && { State: input.State }
      ),
      input.Surname !== undefined && input.Surname !== null && { Surname: input.Surname }
    ),
    input.Title !== undefined && input.Title !== null && { Title: input.Title }
  );
};
var serializeAws_json1_1CertificateAuthorityConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.CsrExtensions !== undefined &&
            input.CsrExtensions !== null && {
              CsrExtensions: serializeAws_json1_1CsrExtensions(input.CsrExtensions, context),
            }
        ),
        input.KeyAlgorithm !== undefined && input.KeyAlgorithm !== null && { KeyAlgorithm: input.KeyAlgorithm }
      ),
      input.SigningAlgorithm !== undefined &&
        input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }
    ),
    input.Subject !== undefined &&
      input.Subject !== null && { Subject: serializeAws_json1_1ASN1Subject(input.Subject, context) }
  );
};
var serializeAws_json1_1CertificatePolicyList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1PolicyInformation(entry, context);
    });
};
var serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.AuditReportResponseFormat !== undefined &&
          input.AuditReportResponseFormat !== null && { AuditReportResponseFormat: input.AuditReportResponseFormat }
      ),
      input.CertificateAuthorityArn !== undefined &&
        input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
    ),
    input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }
  );
};
var serializeAws_json1_1CreateCertificateAuthorityRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.CertificateAuthorityConfiguration !== undefined &&
                input.CertificateAuthorityConfiguration !== null && {
                  CertificateAuthorityConfiguration: serializeAws_json1_1CertificateAuthorityConfiguration(
                    input.CertificateAuthorityConfiguration,
                    context
                  ),
                }
            ),
            input.CertificateAuthorityType !== undefined &&
              input.CertificateAuthorityType !== null && { CertificateAuthorityType: input.CertificateAuthorityType }
          ),
          input.IdempotencyToken !== undefined &&
            input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
        ),
        input.KeyStorageSecurityStandard !== undefined &&
          input.KeyStorageSecurityStandard !== null && { KeyStorageSecurityStandard: input.KeyStorageSecurityStandard }
      ),
      input.RevocationConfiguration !== undefined &&
        input.RevocationConfiguration !== null && {
          RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context),
        }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CreatePermissionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }
        ),
        input.CertificateAuthorityArn !== undefined &&
          input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
      ),
      input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }
    ),
    input.SourceAccount !== undefined && input.SourceAccount !== null && { SourceAccount: input.SourceAccount }
  );
};
var serializeAws_json1_1CrlConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.CustomCname !== undefined && input.CustomCname !== null && { CustomCname: input.CustomCname }
          ),
          input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }
        ),
        input.ExpirationInDays !== undefined &&
          input.ExpirationInDays !== null && { ExpirationInDays: input.ExpirationInDays }
      ),
      input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }
    ),
    input.S3ObjectAcl !== undefined && input.S3ObjectAcl !== null && { S3ObjectAcl: input.S3ObjectAcl }
  );
};
var serializeAws_json1_1CsrExtensions = function (input, context) {
  return __assign(
    __assign(
      {},
      input.KeyUsage !== undefined &&
        input.KeyUsage !== null && { KeyUsage: serializeAws_json1_1KeyUsage(input.KeyUsage, context) }
    ),
    input.SubjectInformationAccess !== undefined &&
      input.SubjectInformationAccess !== null && {
        SubjectInformationAccess: serializeAws_json1_1AccessDescriptionList(input.SubjectInformationAccess, context),
      }
  );
};
var serializeAws_json1_1DeleteCertificateAuthorityRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateAuthorityArn !== undefined &&
        input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
    ),
    input.PermanentDeletionTimeInDays !== undefined &&
      input.PermanentDeletionTimeInDays !== null && { PermanentDeletionTimeInDays: input.PermanentDeletionTimeInDays }
  );
};
var serializeAws_json1_1DeletePermissionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CertificateAuthorityArn !== undefined &&
          input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
      ),
      input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }
    ),
    input.SourceAccount !== undefined && input.SourceAccount !== null && { SourceAccount: input.SourceAccount }
  );
};
var serializeAws_json1_1DeletePolicyRequest = function (input, context) {
  return __assign(
    {},
    input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
  );
};
var serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AuditReportId !== undefined && input.AuditReportId !== null && { AuditReportId: input.AuditReportId }
    ),
    input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
  );
};
var serializeAws_json1_1DescribeCertificateAuthorityRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
  );
};
var serializeAws_json1_1EdiPartyName = function (input, context) {
  return __assign(
    __assign(
      {},
      input.NameAssigner !== undefined && input.NameAssigner !== null && { NameAssigner: input.NameAssigner }
    ),
    input.PartyName !== undefined && input.PartyName !== null && { PartyName: input.PartyName }
  );
};
var serializeAws_json1_1ExtendedKeyUsage = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ExtendedKeyUsageObjectIdentifier !== undefined &&
        input.ExtendedKeyUsageObjectIdentifier !== null && {
          ExtendedKeyUsageObjectIdentifier: input.ExtendedKeyUsageObjectIdentifier,
        }
    ),
    input.ExtendedKeyUsageType !== undefined &&
      input.ExtendedKeyUsageType !== null && { ExtendedKeyUsageType: input.ExtendedKeyUsageType }
  );
};
var serializeAws_json1_1ExtendedKeyUsageList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ExtendedKeyUsage(entry, context);
    });
};
var serializeAws_json1_1Extensions = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.CertificatePolicies !== undefined &&
            input.CertificatePolicies !== null && {
              CertificatePolicies: serializeAws_json1_1CertificatePolicyList(input.CertificatePolicies, context),
            }
        ),
        input.ExtendedKeyUsage !== undefined &&
          input.ExtendedKeyUsage !== null && {
            ExtendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageList(input.ExtendedKeyUsage, context),
          }
      ),
      input.KeyUsage !== undefined &&
        input.KeyUsage !== null && { KeyUsage: serializeAws_json1_1KeyUsage(input.KeyUsage, context) }
    ),
    input.SubjectAlternativeNames !== undefined &&
      input.SubjectAlternativeNames !== null && {
        SubjectAlternativeNames: serializeAws_json1_1GeneralNameList(input.SubjectAlternativeNames, context),
      }
  );
};
var serializeAws_json1_1GeneralName = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  {},
                  input.DirectoryName !== undefined &&
                    input.DirectoryName !== null && {
                      DirectoryName: serializeAws_json1_1ASN1Subject(input.DirectoryName, context),
                    }
                ),
                input.DnsName !== undefined && input.DnsName !== null && { DnsName: input.DnsName }
              ),
              input.EdiPartyName !== undefined &&
                input.EdiPartyName !== null && {
                  EdiPartyName: serializeAws_json1_1EdiPartyName(input.EdiPartyName, context),
                }
            ),
            input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }
          ),
          input.OtherName !== undefined &&
            input.OtherName !== null && { OtherName: serializeAws_json1_1OtherName(input.OtherName, context) }
        ),
        input.RegisteredId !== undefined && input.RegisteredId !== null && { RegisteredId: input.RegisteredId }
      ),
      input.Rfc822Name !== undefined && input.Rfc822Name !== null && { Rfc822Name: input.Rfc822Name }
    ),
    input.UniformResourceIdentifier !== undefined &&
      input.UniformResourceIdentifier !== null && { UniformResourceIdentifier: input.UniformResourceIdentifier }
  );
};
var serializeAws_json1_1GeneralNameList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1GeneralName(entry, context);
    });
};
var serializeAws_json1_1GetCertificateAuthorityCertificateRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
  );
};
var serializeAws_json1_1GetCertificateAuthorityCsrRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
  );
};
var serializeAws_json1_1GetCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
    ),
    input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
  );
};
var serializeAws_json1_1GetPolicyRequest = function (input, context) {
  return __assign(
    {},
    input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
  );
};
var serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.Certificate !== undefined &&
          input.Certificate !== null && { Certificate: context.base64Encoder(input.Certificate) }
      ),
      input.CertificateAuthorityArn !== undefined &&
        input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
    ),
    input.CertificateChain !== undefined &&
      input.CertificateChain !== null && { CertificateChain: context.base64Encoder(input.CertificateChain) }
  );
};
var serializeAws_json1_1IssueCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  {},
                  input.ApiPassthrough !== undefined &&
                    input.ApiPassthrough !== null && {
                      ApiPassthrough: serializeAws_json1_1ApiPassthrough(input.ApiPassthrough, context),
                    }
                ),
                input.CertificateAuthorityArn !== undefined &&
                  input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
              ),
              input.Csr !== undefined && input.Csr !== null && { Csr: context.base64Encoder(input.Csr) }
            ),
            input.IdempotencyToken !== undefined &&
              input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
          ),
          input.SigningAlgorithm !== undefined &&
            input.SigningAlgorithm !== null && { SigningAlgorithm: input.SigningAlgorithm }
        ),
        input.TemplateArn !== undefined && input.TemplateArn !== null && { TemplateArn: input.TemplateArn }
      ),
      input.Validity !== undefined &&
        input.Validity !== null && { Validity: serializeAws_json1_1Validity(input.Validity, context) }
    ),
    input.ValidityNotBefore !== undefined &&
      input.ValidityNotBefore !== null && {
        ValidityNotBefore: serializeAws_json1_1Validity(input.ValidityNotBefore, context),
      }
  );
};
var serializeAws_json1_1KeyUsage = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  __assign({}, input.CRLSign !== undefined && input.CRLSign !== null && { CRLSign: input.CRLSign }),
                  input.DataEncipherment !== undefined &&
                    input.DataEncipherment !== null && { DataEncipherment: input.DataEncipherment }
                ),
                input.DecipherOnly !== undefined && input.DecipherOnly !== null && { DecipherOnly: input.DecipherOnly }
              ),
              input.DigitalSignature !== undefined &&
                input.DigitalSignature !== null && { DigitalSignature: input.DigitalSignature }
            ),
            input.EncipherOnly !== undefined && input.EncipherOnly !== null && { EncipherOnly: input.EncipherOnly }
          ),
          input.KeyAgreement !== undefined && input.KeyAgreement !== null && { KeyAgreement: input.KeyAgreement }
        ),
        input.KeyCertSign !== undefined && input.KeyCertSign !== null && { KeyCertSign: input.KeyCertSign }
      ),
      input.KeyEncipherment !== undefined &&
        input.KeyEncipherment !== null && { KeyEncipherment: input.KeyEncipherment }
    ),
    input.NonRepudiation !== undefined && input.NonRepudiation !== null && { NonRepudiation: input.NonRepudiation }
  );
};
var serializeAws_json1_1ListCertificateAuthoritiesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ResourceOwner !== undefined && input.ResourceOwner !== null && { ResourceOwner: input.ResourceOwner }
  );
};
var serializeAws_json1_1ListPermissionsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CertificateAuthorityArn !== undefined &&
          input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListTagsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CertificateAuthorityArn !== undefined &&
          input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1OtherName = function (input, context) {
  return __assign(
    __assign({}, input.TypeId !== undefined && input.TypeId !== null && { TypeId: input.TypeId }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1PolicyInformation = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertPolicyId !== undefined && input.CertPolicyId !== null && { CertPolicyId: input.CertPolicyId }
    ),
    input.PolicyQualifiers !== undefined &&
      input.PolicyQualifiers !== null && {
        PolicyQualifiers: serializeAws_json1_1PolicyQualifierInfoList(input.PolicyQualifiers, context),
      }
  );
};
var serializeAws_json1_1PolicyQualifierInfo = function (input, context) {
  return __assign(
    __assign(
      {},
      input.PolicyQualifierId !== undefined &&
        input.PolicyQualifierId !== null && { PolicyQualifierId: input.PolicyQualifierId }
    ),
    input.Qualifier !== undefined &&
      input.Qualifier !== null && { Qualifier: serializeAws_json1_1Qualifier(input.Qualifier, context) }
  );
};
var serializeAws_json1_1PolicyQualifierInfoList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1PolicyQualifierInfo(entry, context);
    });
};
var serializeAws_json1_1PutPolicyRequest = function (input, context) {
  return __assign(
    __assign({}, input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
  );
};
var serializeAws_json1_1Qualifier = function (input, context) {
  return __assign({}, input.CpsUri !== undefined && input.CpsUri !== null && { CpsUri: input.CpsUri });
};
var serializeAws_json1_1RestoreCertificateAuthorityRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateAuthorityArn !== undefined &&
      input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
  );
};
var serializeAws_json1_1RevocationConfiguration = function (input, context) {
  return __assign(
    {},
    input.CrlConfiguration !== undefined &&
      input.CrlConfiguration !== null && {
        CrlConfiguration: serializeAws_json1_1CrlConfiguration(input.CrlConfiguration, context),
      }
  );
};
var serializeAws_json1_1RevokeCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CertificateAuthorityArn !== undefined &&
          input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
      ),
      input.CertificateSerial !== undefined &&
        input.CertificateSerial !== null && { CertificateSerial: input.CertificateSerial }
    ),
    input.RevocationReason !== undefined &&
      input.RevocationReason !== null && { RevocationReason: input.RevocationReason }
  );
};
var serializeAws_json1_1Tag = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1TagCertificateAuthorityRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateAuthorityArn !== undefined &&
        input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1TagList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1UntagCertificateAuthorityRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateAuthorityArn !== undefined &&
        input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1UpdateCertificateAuthorityRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CertificateAuthorityArn !== undefined &&
          input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
      ),
      input.RevocationConfiguration !== undefined &&
        input.RevocationConfiguration !== null && {
          RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context),
        }
    ),
    input.Status !== undefined && input.Status !== null && { Status: input.Status }
  );
};
var serializeAws_json1_1Validity = function (input, context) {
  return __assign(
    __assign({}, input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var deserializeAws_json1_1AccessDescription = function (output, context) {
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
var deserializeAws_json1_1AccessDescriptionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AccessDescription(entry, context);
    });
};
var deserializeAws_json1_1AccessMethod = function (output, context) {
  return {
    AccessMethodType:
      output.AccessMethodType !== undefined && output.AccessMethodType !== null ? output.AccessMethodType : undefined,
    CustomObjectIdentifier:
      output.CustomObjectIdentifier !== undefined && output.CustomObjectIdentifier !== null
        ? output.CustomObjectIdentifier
        : undefined,
  };
};
var deserializeAws_json1_1ActionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
var deserializeAws_json1_1ASN1Subject = function (output, context) {
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
var deserializeAws_json1_1CertificateAuthorities = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1CertificateAuthority(entry, context);
    });
};
var deserializeAws_json1_1CertificateAuthority = function (output, context) {
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
var deserializeAws_json1_1CertificateAuthorityConfiguration = function (output, context) {
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
var deserializeAws_json1_1CertificateMismatchException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ConcurrentModificationException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = function (output, context) {
  return {
    AuditReportId:
      output.AuditReportId !== undefined && output.AuditReportId !== null ? output.AuditReportId : undefined,
    S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
  };
};
var deserializeAws_json1_1CreateCertificateAuthorityResponse = function (output, context) {
  return {
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
  };
};
var deserializeAws_json1_1CrlConfiguration = function (output, context) {
  return {
    CustomCname: output.CustomCname !== undefined && output.CustomCname !== null ? output.CustomCname : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    ExpirationInDays:
      output.ExpirationInDays !== undefined && output.ExpirationInDays !== null ? output.ExpirationInDays : undefined,
    S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
    S3ObjectAcl: output.S3ObjectAcl !== undefined && output.S3ObjectAcl !== null ? output.S3ObjectAcl : undefined,
  };
};
var deserializeAws_json1_1CsrExtensions = function (output, context) {
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
var deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = function (output, context) {
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
var deserializeAws_json1_1DescribeCertificateAuthorityResponse = function (output, context) {
  return {
    CertificateAuthority:
      output.CertificateAuthority !== undefined && output.CertificateAuthority !== null
        ? deserializeAws_json1_1CertificateAuthority(output.CertificateAuthority, context)
        : undefined,
  };
};
var deserializeAws_json1_1EdiPartyName = function (output, context) {
  return {
    NameAssigner: output.NameAssigner !== undefined && output.NameAssigner !== null ? output.NameAssigner : undefined,
    PartyName: output.PartyName !== undefined && output.PartyName !== null ? output.PartyName : undefined,
  };
};
var deserializeAws_json1_1GeneralName = function (output, context) {
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
var deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = function (output, context) {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
  };
};
var deserializeAws_json1_1GetCertificateAuthorityCsrResponse = function (output, context) {
  return {
    Csr: output.Csr !== undefined && output.Csr !== null ? output.Csr : undefined,
  };
};
var deserializeAws_json1_1GetCertificateResponse = function (output, context) {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
  };
};
var deserializeAws_json1_1GetPolicyResponse = function (output, context) {
  return {
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
  };
};
var deserializeAws_json1_1InvalidArgsException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidArnException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidPolicyException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidRequestException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidStateException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidTagException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1IssueCertificateResponse = function (output, context) {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
  };
};
var deserializeAws_json1_1KeyUsage = function (output, context) {
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
var deserializeAws_json1_1LimitExceededException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ListCertificateAuthoritiesResponse = function (output, context) {
  return {
    CertificateAuthorities:
      output.CertificateAuthorities !== undefined && output.CertificateAuthorities !== null
        ? deserializeAws_json1_1CertificateAuthorities(output.CertificateAuthorities, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListPermissionsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
        : undefined,
  };
};
var deserializeAws_json1_1ListTagsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
var deserializeAws_json1_1LockoutPreventedException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1MalformedCertificateException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1MalformedCSRException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1OtherName = function (output, context) {
  return {
    TypeId: output.TypeId !== undefined && output.TypeId !== null ? output.TypeId : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_1Permission = function (output, context) {
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
var deserializeAws_json1_1PermissionAlreadyExistsException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1PermissionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Permission(entry, context);
    });
};
var deserializeAws_json1_1RequestAlreadyProcessedException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1RequestFailedException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1RequestInProgressException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1RevocationConfiguration = function (output, context) {
  return {
    CrlConfiguration:
      output.CrlConfiguration !== undefined && output.CrlConfiguration !== null
        ? deserializeAws_json1_1CrlConfiguration(output.CrlConfiguration, context)
        : undefined,
  };
};
var deserializeAws_json1_1Tag = function (output, context) {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_1TagList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TooManyTagsException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeMetadata = function (output) {
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
var collectBody = function (streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          contents = {
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            path: path,
            headers: headers,
          };
          if (resolvedHostname !== undefined) {
            contents.hostname = resolvedHostname;
          }
          if (body !== undefined) {
            contents.body = body;
          }
          return [2 /*return*/, new __HttpRequest(contents)];
      }
    });
  });
};
var parseBody = function (streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
  var findKey = function (object, key) {
    return Object.keys(object).find(function (k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };
  var sanitizeErrorCode = function (rawValue) {
    var cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  var headerKey = findKey(output.headers, "x-amzn-errortype");
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
