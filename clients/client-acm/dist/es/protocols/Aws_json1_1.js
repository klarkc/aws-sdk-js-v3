import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddTagsToCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.AddTagsToCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1AddTagsToCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.DeleteCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.DescribeCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ExportCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.ExportCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1ExportCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetAccountConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.GetAccountConfiguration",
      };
      body = "{}";
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
        "x-amz-target": "CertificateManager.GetCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ImportCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.ImportCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1ImportCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListCertificatesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.ListCertificates",
      };
      body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListTagsForCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.ListTagsForCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1ListTagsForCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutAccountConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.PutAccountConfiguration",
      };
      body = JSON.stringify(serializeAws_json1_1PutAccountConfigurationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RemoveTagsFromCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.RemoveTagsFromCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1RemoveTagsFromCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RenewCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.RenewCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1RenewCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RequestCertificateCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.RequestCertificate",
      };
      body = JSON.stringify(serializeAws_json1_1RequestCertificateRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ResendValidationEmailCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.ResendValidationEmail",
      };
      body = JSON.stringify(serializeAws_json1_1ResendValidationEmailRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateCertificateOptionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CertificateManager.UpdateCertificateOptions",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateCertificateOptionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1AddTagsToCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1AddTagsToCertificateCommandError(output, context)];
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
var deserializeAws_json1_1AddTagsToCertificateCommandError = function (output, context) {
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
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidParameterException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#InvalidParameterException":
              return [3 /*break*/, 4];
            case "InvalidTagException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#InvalidTagException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "TagPolicyException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acm#TagPolicyException":
              return [3 /*break*/, 10];
            case "ThrottlingException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acm#ThrottlingException":
              return [3 /*break*/, 12];
            case "TooManyTagsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.acm#TooManyTagsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteCertificateCommandError(output, context)];
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
var deserializeAws_json1_1DeleteCertificateCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "ResourceInUseException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#ResourceInUseException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeCertificateCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
export var deserializeAws_json1_1ExportCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ExportCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ExportCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ExportCertificateCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "RequestInProgressException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#RequestInProgressException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAccountConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetAccountConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetAccountConfigurationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetAccountConfigurationCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acm#AccessDeniedException":
              return [3 /*break*/, 2];
            case "ThrottlingException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#ThrottlingException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "RequestInProgressException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#RequestInProgressException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ImportCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ImportCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ImportCertificateCommandError = function (output, context) {
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
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidParameterException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#InvalidParameterException":
              return [3 /*break*/, 4];
            case "InvalidTagException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#InvalidTagException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#LimitExceededException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acm#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "TagPolicyException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acm#TagPolicyException":
              return [3 /*break*/, 12];
            case "TooManyTagsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.acm#TooManyTagsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListCertificatesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListCertificatesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListCertificatesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListCertificatesCommandError = function (output, context) {
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
            case "InvalidArgsException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acm#InvalidArgsException":
              return [3 /*break*/, 2];
          }
          return [3 /*break*/, 4];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTagsForCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListTagsForCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListTagsForCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListTagsForCertificateCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
export var deserializeAws_json1_1PutAccountConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutAccountConfigurationCommandError(output, context)];
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
var deserializeAws_json1_1PutAccountConfigurationCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acm#AccessDeniedException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#ConflictException":
              return [3 /*break*/, 4];
            case "ThrottlingException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#ThrottlingException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RemoveTagsFromCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RemoveTagsFromCertificateCommandError(output, context)];
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
var deserializeAws_json1_1RemoveTagsFromCertificateCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidParameterException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#InvalidParameterException":
              return [3 /*break*/, 4];
            case "InvalidTagException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#InvalidTagException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "TagPolicyException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acm#TagPolicyException":
              return [3 /*break*/, 10];
            case "ThrottlingException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acm#ThrottlingException":
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RenewCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RenewCertificateCommandError(output, context)];
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
var deserializeAws_json1_1RenewCertificateCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
export var deserializeAws_json1_1RequestCertificateCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RequestCertificateCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1RequestCertificateResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RequestCertificateCommandError = function (output, context) {
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
            case "InvalidArnException":
              return [3 /*break*/, 2];
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidDomainValidationOptionsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidTagException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#InvalidTagException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.acm#LimitExceededException":
              return [3 /*break*/, 10];
            case "TagPolicyException":
              return [3 /*break*/, 12];
            case "com.amazonaws.acm#TagPolicyException":
              return [3 /*break*/, 12];
            case "TooManyTagsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.acm#TooManyTagsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context),
          ];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ResendValidationEmailCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ResendValidationEmailCommandError(output, context)];
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
var deserializeAws_json1_1ResendValidationEmailCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidDomainValidationOptionsException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
          return [
            4 /*yield*/,
            deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context),
          ];
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
export var deserializeAws_json1_1UpdateCertificateOptionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateCertificateOptionsCommandError(output, context)];
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
var deserializeAws_json1_1UpdateCertificateOptionsCommandError = function (output, context) {
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
            case "com.amazonaws.acm#InvalidArnException":
              return [3 /*break*/, 2];
            case "InvalidStateException":
              return [3 /*break*/, 4];
            case "com.amazonaws.acm#InvalidStateException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.acm#LimitExceededException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.acm#ResourceNotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AccessDeniedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
      contents = __assign(
        { name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ConflictExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConflictException(body, context);
      contents = __assign(
        { name: "ConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidDomainValidationOptionsException(body, context);
      contents = __assign(
        {
          name: "InvalidDomainValidationOptionsException",
          $fault: "client",
          $metadata: deserializeMetadata(parsedOutput),
        },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InvalidParameterExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
      contents = __assign(
        { name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
      contents = __assign(
        { name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1TagPolicyExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TagPolicyException(body, context);
      contents = __assign(
        { name: "TagPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ThrottlingExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ThrottlingException(body, context);
      contents = __assign(
        { name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1ValidationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ValidationException(body, context);
      contents = __assign(
        { name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1AddTagsToCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1CertificateOptions = function (input, context) {
  return __assign(
    {},
    input.CertificateTransparencyLoggingPreference !== undefined &&
      input.CertificateTransparencyLoggingPreference !== null && {
        CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
      }
  );
};
var serializeAws_json1_1CertificateStatuses = function (input, context) {
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
var serializeAws_json1_1DeleteCertificateRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
  );
};
var serializeAws_json1_1DescribeCertificateRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
  );
};
var serializeAws_json1_1DomainList = function (input, context) {
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
var serializeAws_json1_1DomainValidationOption = function (input, context) {
  return __assign(
    __assign({}, input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    input.ValidationDomain !== undefined &&
      input.ValidationDomain !== null && { ValidationDomain: input.ValidationDomain }
  );
};
var serializeAws_json1_1DomainValidationOptionList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1DomainValidationOption(entry, context);
    });
};
var serializeAws_json1_1ExpiryEventsConfiguration = function (input, context) {
  return __assign(
    {},
    input.DaysBeforeExpiry !== undefined &&
      input.DaysBeforeExpiry !== null && { DaysBeforeExpiry: input.DaysBeforeExpiry }
  );
};
var serializeAws_json1_1ExportCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
    ),
    input.Passphrase !== undefined &&
      input.Passphrase !== null && { Passphrase: context.base64Encoder(input.Passphrase) }
  );
};
var serializeAws_json1_1ExtendedKeyUsageFilterList = function (input, context) {
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
var serializeAws_json1_1Filters = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.extendedKeyUsage !== undefined &&
          input.extendedKeyUsage !== null && {
            extendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageFilterList(input.extendedKeyUsage, context),
          }
      ),
      input.keyTypes !== undefined &&
        input.keyTypes !== null && { keyTypes: serializeAws_json1_1KeyAlgorithmList(input.keyTypes, context) }
    ),
    input.keyUsage !== undefined &&
      input.keyUsage !== null && { keyUsage: serializeAws_json1_1KeyUsageFilterList(input.keyUsage, context) }
  );
};
var serializeAws_json1_1GetCertificateRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
  );
};
var serializeAws_json1_1ImportCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.Certificate !== undefined &&
              input.Certificate !== null && { Certificate: context.base64Encoder(input.Certificate) }
          ),
          input.CertificateArn !== undefined &&
            input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
        ),
        input.CertificateChain !== undefined &&
          input.CertificateChain !== null && { CertificateChain: context.base64Encoder(input.CertificateChain) }
      ),
      input.PrivateKey !== undefined &&
        input.PrivateKey !== null && { PrivateKey: context.base64Encoder(input.PrivateKey) }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1KeyAlgorithmList = function (input, context) {
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
var serializeAws_json1_1KeyUsageFilterList = function (input, context) {
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
var serializeAws_json1_1ListCertificatesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.CertificateStatuses !== undefined &&
            input.CertificateStatuses !== null && {
              CertificateStatuses: serializeAws_json1_1CertificateStatuses(input.CertificateStatuses, context),
            }
        ),
        input.Includes !== undefined &&
          input.Includes !== null && { Includes: serializeAws_json1_1Filters(input.Includes, context) }
      ),
      input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1ListTagsForCertificateRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
  );
};
var serializeAws_json1_1PutAccountConfigurationRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ExpiryEvents !== undefined &&
        input.ExpiryEvents !== null && {
          ExpiryEvents: serializeAws_json1_1ExpiryEventsConfiguration(input.ExpiryEvents, context),
        }
    ),
    input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
  );
};
var serializeAws_json1_1RemoveTagsFromCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1RenewCertificateRequest = function (input, context) {
  return __assign(
    {},
    input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
  );
};
var serializeAws_json1_1RequestCertificateRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  {},
                  input.CertificateAuthorityArn !== undefined &&
                    input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn }
                ),
                input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }
              ),
              input.DomainValidationOptions !== undefined &&
                input.DomainValidationOptions !== null && {
                  DomainValidationOptions: serializeAws_json1_1DomainValidationOptionList(
                    input.DomainValidationOptions,
                    context
                  ),
                }
            ),
            input.IdempotencyToken !== undefined &&
              input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }
          ),
          input.Options !== undefined &&
            input.Options !== null && { Options: serializeAws_json1_1CertificateOptions(input.Options, context) }
        ),
        input.SubjectAlternativeNames !== undefined &&
          input.SubjectAlternativeNames !== null && {
            SubjectAlternativeNames: serializeAws_json1_1DomainList(input.SubjectAlternativeNames, context),
          }
      ),
      input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
    ),
    input.ValidationMethod !== undefined &&
      input.ValidationMethod !== null && { ValidationMethod: input.ValidationMethod }
  );
};
var serializeAws_json1_1ResendValidationEmailRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
      ),
      input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }
    ),
    input.ValidationDomain !== undefined &&
      input.ValidationDomain !== null && { ValidationDomain: input.ValidationDomain }
  );
};
var serializeAws_json1_1Tag = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
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
var serializeAws_json1_1UpdateCertificateOptionsRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CertificateArn !== undefined && input.CertificateArn !== null && { CertificateArn: input.CertificateArn }
    ),
    input.Options !== undefined &&
      input.Options !== null && { Options: serializeAws_json1_1CertificateOptions(input.Options, context) }
  );
};
var deserializeAws_json1_1AccessDeniedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1CertificateDetail = function (output, context) {
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
var deserializeAws_json1_1CertificateOptions = function (output, context) {
  return {
    CertificateTransparencyLoggingPreference:
      output.CertificateTransparencyLoggingPreference !== undefined &&
      output.CertificateTransparencyLoggingPreference !== null
        ? output.CertificateTransparencyLoggingPreference
        : undefined,
  };
};
var deserializeAws_json1_1CertificateSummary = function (output, context) {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
  };
};
var deserializeAws_json1_1CertificateSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1CertificateSummary(entry, context);
    });
};
var deserializeAws_json1_1ConflictException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1DescribeCertificateResponse = function (output, context) {
  return {
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? deserializeAws_json1_1CertificateDetail(output.Certificate, context)
        : undefined,
  };
};
var deserializeAws_json1_1DomainList = function (output, context) {
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
var deserializeAws_json1_1DomainValidation = function (output, context) {
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
var deserializeAws_json1_1DomainValidationList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DomainValidation(entry, context);
    });
};
var deserializeAws_json1_1ExpiryEventsConfiguration = function (output, context) {
  return {
    DaysBeforeExpiry:
      output.DaysBeforeExpiry !== undefined && output.DaysBeforeExpiry !== null ? output.DaysBeforeExpiry : undefined,
  };
};
var deserializeAws_json1_1ExportCertificateResponse = function (output, context) {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
    PrivateKey: output.PrivateKey !== undefined && output.PrivateKey !== null ? output.PrivateKey : undefined,
  };
};
var deserializeAws_json1_1ExtendedKeyUsage = function (output, context) {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OID: output.OID !== undefined && output.OID !== null ? output.OID : undefined,
  };
};
var deserializeAws_json1_1ExtendedKeyUsageList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ExtendedKeyUsage(entry, context);
    });
};
var deserializeAws_json1_1GetAccountConfigurationResponse = function (output, context) {
  return {
    ExpiryEvents:
      output.ExpiryEvents !== undefined && output.ExpiryEvents !== null
        ? deserializeAws_json1_1ExpiryEventsConfiguration(output.ExpiryEvents, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetCertificateResponse = function (output, context) {
  return {
    Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null ? output.CertificateChain : undefined,
  };
};
var deserializeAws_json1_1ImportCertificateResponse = function (output, context) {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
  };
};
var deserializeAws_json1_1InUseList = function (output, context) {
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
var deserializeAws_json1_1InvalidDomainValidationOptionsException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidParameterException = function (output, context) {
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
var deserializeAws_json1_1KeyUsage = function (output, context) {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  };
};
var deserializeAws_json1_1KeyUsageList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1KeyUsage(entry, context);
    });
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ListCertificatesResponse = function (output, context) {
  return {
    CertificateSummaryList:
      output.CertificateSummaryList !== undefined && output.CertificateSummaryList !== null
        ? deserializeAws_json1_1CertificateSummaryList(output.CertificateSummaryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1ListTagsForCertificateResponse = function (output, context) {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
var deserializeAws_json1_1RenewalSummary = function (output, context) {
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
var deserializeAws_json1_1RequestCertificateResponse = function (output, context) {
  return {
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null ? output.CertificateArn : undefined,
  };
};
var deserializeAws_json1_1RequestInProgressException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ResourceRecord = function (output, context) {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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
var deserializeAws_json1_1TagPolicyException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ThrottlingException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1TooManyTagsException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ValidationEmailList = function (output, context) {
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
var deserializeAws_json1_1ValidationException = function (output, context) {
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
