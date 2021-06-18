import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_0AssociateCustomDomainCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.AssociateCustomDomain",
      };
      body = JSON.stringify(serializeAws_json1_0AssociateCustomDomainRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0CreateAutoScalingConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.CreateAutoScalingConfiguration",
      };
      body = JSON.stringify(serializeAws_json1_0CreateAutoScalingConfigurationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0CreateConnectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.CreateConnection",
      };
      body = JSON.stringify(serializeAws_json1_0CreateConnectionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0CreateServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.CreateService",
      };
      body = JSON.stringify(serializeAws_json1_0CreateServiceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DeleteAutoScalingConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DeleteAutoScalingConfiguration",
      };
      body = JSON.stringify(serializeAws_json1_0DeleteAutoScalingConfigurationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DeleteConnectionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DeleteConnection",
      };
      body = JSON.stringify(serializeAws_json1_0DeleteConnectionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DeleteServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DeleteService",
      };
      body = JSON.stringify(serializeAws_json1_0DeleteServiceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DescribeAutoScalingConfigurationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DescribeAutoScalingConfiguration",
      };
      body = JSON.stringify(serializeAws_json1_0DescribeAutoScalingConfigurationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DescribeCustomDomainsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DescribeCustomDomains",
      };
      body = JSON.stringify(serializeAws_json1_0DescribeCustomDomainsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DescribeServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DescribeService",
      };
      body = JSON.stringify(serializeAws_json1_0DescribeServiceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0DisassociateCustomDomainCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.DisassociateCustomDomain",
      };
      body = JSON.stringify(serializeAws_json1_0DisassociateCustomDomainRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0ListAutoScalingConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.ListAutoScalingConfigurations",
      };
      body = JSON.stringify(serializeAws_json1_0ListAutoScalingConfigurationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0ListConnectionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.ListConnections",
      };
      body = JSON.stringify(serializeAws_json1_0ListConnectionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0ListOperationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.ListOperations",
      };
      body = JSON.stringify(serializeAws_json1_0ListOperationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0ListServicesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.ListServices",
      };
      body = JSON.stringify(serializeAws_json1_0ListServicesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.ListTagsForResource",
      };
      body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0PauseServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.PauseService",
      };
      body = JSON.stringify(serializeAws_json1_0PauseServiceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0ResumeServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.ResumeService",
      };
      body = JSON.stringify(serializeAws_json1_0ResumeServiceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0StartDeploymentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.StartDeployment",
      };
      body = JSON.stringify(serializeAws_json1_0StartDeploymentRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.TagResource",
      };
      body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.UntagResource",
      };
      body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_0UpdateServiceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AppRunner.UpdateService",
      };
      body = JSON.stringify(serializeAws_json1_0UpdateServiceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_0AssociateCustomDomainCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0AssociateCustomDomainCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0AssociateCustomDomainResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0AssociateCustomDomainCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateAutoScalingConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0CreateAutoScalingConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0CreateAutoScalingConfigurationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0CreateAutoScalingConfigurationCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ServiceQuotaExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateConnectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0CreateConnectionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0CreateConnectionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0CreateConnectionCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ServiceQuotaExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0CreateServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0CreateServiceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0CreateServiceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0CreateServiceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ServiceQuotaExceededException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteAutoScalingConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DeleteAutoScalingConfigurationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteConnectionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DeleteConnectionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DeleteConnectionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DeleteConnectionCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DeleteServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DeleteServiceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DeleteServiceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DeleteServiceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeAutoScalingConfigurationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DescribeAutoScalingConfigurationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeCustomDomainsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DescribeCustomDomainsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DescribeCustomDomainsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DescribeCustomDomainsCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DescribeServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DescribeServiceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DescribeServiceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DescribeServiceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0DisassociateCustomDomainCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0DisassociateCustomDomainCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0DisassociateCustomDomainResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0DisassociateCustomDomainCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListAutoScalingConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0ListAutoScalingConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0ListAutoScalingConfigurationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0ListAutoScalingConfigurationsCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListConnectionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0ListConnectionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0ListConnectionsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0ListConnectionsCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListOperationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0ListOperationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0ListOperationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0ListOperationsCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListServicesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0ListServicesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0ListServicesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0ListServicesCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0ListTagsForResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0ListTagsForResourceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0PauseServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0PauseServiceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0PauseServiceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0PauseServiceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0ResumeServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0ResumeServiceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0ResumeServiceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0ResumeServiceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0StartDeploymentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0StartDeploymentCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0StartDeploymentResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0StartDeploymentCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0TagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0TagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0TagResourceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0UntagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0UntagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0UntagResourceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_0UpdateServiceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_0UpdateServiceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_0UpdateServiceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_0UpdateServiceCommandError = function (output, context) {
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
            case "InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.apprunner#InternalServiceErrorException":
              return [3 /*break*/, 2];
            case "InvalidRequestException":
              return [3 /*break*/, 4];
            case "com.amazonaws.apprunner#InvalidRequestException":
              return [3 /*break*/, 4];
            case "InvalidStateException":
              return [3 /*break*/, 6];
            case "com.amazonaws.apprunner#InvalidStateException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.apprunner#ResourceNotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_0InternalServiceErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_0InternalServiceErrorException(body, context);
      contents = __assign(
        { name: "InternalServiceErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_0InvalidRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_0InvalidRequestException(body, context);
      contents = __assign(
        { name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_0InvalidStateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_0InvalidStateException(body, context);
      contents = __assign(
        { name: "InvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_0ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
      contents = __assign(
        { name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
      contents = __assign(
        { name: "ServiceQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_0AssociateCustomDomainRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
      input.EnableWWWSubdomain !== undefined &&
        input.EnableWWWSubdomain !== null && { EnableWWWSubdomain: input.EnableWWWSubdomain }
    ),
    input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }
  );
};
var serializeAws_json1_0AuthenticationConfiguration = function (input, context) {
  return __assign(
    __assign(
      {},
      input.AccessRoleArn !== undefined && input.AccessRoleArn !== null && { AccessRoleArn: input.AccessRoleArn }
    ),
    input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }
  );
};
var serializeAws_json1_0CodeConfiguration = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CodeConfigurationValues !== undefined &&
        input.CodeConfigurationValues !== null && {
          CodeConfigurationValues: serializeAws_json1_0CodeConfigurationValues(input.CodeConfigurationValues, context),
        }
    ),
    input.ConfigurationSource !== undefined &&
      input.ConfigurationSource !== null && { ConfigurationSource: input.ConfigurationSource }
  );
};
var serializeAws_json1_0CodeConfigurationValues = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.BuildCommand !== undefined && input.BuildCommand !== null && { BuildCommand: input.BuildCommand }
          ),
          input.Port !== undefined && input.Port !== null && { Port: input.Port }
        ),
        input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime }
      ),
      input.RuntimeEnvironmentVariables !== undefined &&
        input.RuntimeEnvironmentVariables !== null && {
          RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
            input.RuntimeEnvironmentVariables,
            context
          ),
        }
    ),
    input.StartCommand !== undefined && input.StartCommand !== null && { StartCommand: input.StartCommand }
  );
};
var serializeAws_json1_0CodeRepository = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.CodeConfiguration !== undefined &&
          input.CodeConfiguration !== null && {
            CodeConfiguration: serializeAws_json1_0CodeConfiguration(input.CodeConfiguration, context),
          }
      ),
      input.RepositoryUrl !== undefined && input.RepositoryUrl !== null && { RepositoryUrl: input.RepositoryUrl }
    ),
    input.SourceCodeVersion !== undefined &&
      input.SourceCodeVersion !== null && {
        SourceCodeVersion: serializeAws_json1_0SourceCodeVersion(input.SourceCodeVersion, context),
      }
  );
};
var serializeAws_json1_0CreateAutoScalingConfigurationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.AutoScalingConfigurationName !== undefined &&
              input.AutoScalingConfigurationName !== null && {
                AutoScalingConfigurationName: input.AutoScalingConfigurationName,
              }
          ),
          input.MaxConcurrency !== undefined &&
            input.MaxConcurrency !== null && { MaxConcurrency: input.MaxConcurrency }
        ),
        input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }
      ),
      input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }
  );
};
var serializeAws_json1_0CreateConnectionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ConnectionName !== undefined && input.ConnectionName !== null && { ConnectionName: input.ConnectionName }
      ),
      input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }
  );
};
var serializeAws_json1_0CreateServiceRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.AutoScalingConfigurationArn !== undefined &&
                  input.AutoScalingConfigurationArn !== null && {
                    AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
                  }
              ),
              input.EncryptionConfiguration !== undefined &&
                input.EncryptionConfiguration !== null && {
                  EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(
                    input.EncryptionConfiguration,
                    context
                  ),
                }
            ),
            input.HealthCheckConfiguration !== undefined &&
              input.HealthCheckConfiguration !== null && {
                HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(
                  input.HealthCheckConfiguration,
                  context
                ),
              }
          ),
          input.InstanceConfiguration !== undefined &&
            input.InstanceConfiguration !== null && {
              InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
            }
        ),
        input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }
      ),
      input.SourceConfiguration !== undefined &&
        input.SourceConfiguration !== null && {
          SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
        }
    ),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }
  );
};
var serializeAws_json1_0DeleteAutoScalingConfigurationRequest = function (input, context) {
  return __assign(
    {},
    input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }
  );
};
var serializeAws_json1_0DeleteConnectionRequest = function (input, context) {
  return __assign(
    {},
    input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }
  );
};
var serializeAws_json1_0DeleteServiceRequest = function (input, context) {
  return __assign({}, input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn });
};
var serializeAws_json1_0DescribeAutoScalingConfigurationRequest = function (input, context) {
  return __assign(
    {},
    input.AutoScalingConfigurationArn !== undefined &&
      input.AutoScalingConfigurationArn !== null && { AutoScalingConfigurationArn: input.AutoScalingConfigurationArn }
  );
};
var serializeAws_json1_0DescribeCustomDomainsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }
  );
};
var serializeAws_json1_0DescribeServiceRequest = function (input, context) {
  return __assign({}, input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn });
};
var serializeAws_json1_0DisassociateCustomDomainRequest = function (input, context) {
  return __assign(
    __assign({}, input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }
  );
};
var serializeAws_json1_0EncryptionConfiguration = function (input, context) {
  return __assign({}, input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey });
};
var serializeAws_json1_0HealthCheckConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.HealthyThreshold !== undefined &&
                input.HealthyThreshold !== null && { HealthyThreshold: input.HealthyThreshold }
            ),
            input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval }
          ),
          input.Path !== undefined && input.Path !== null && { Path: input.Path }
        ),
        input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }
      ),
      input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }
    ),
    input.UnhealthyThreshold !== undefined &&
      input.UnhealthyThreshold !== null && { UnhealthyThreshold: input.UnhealthyThreshold }
  );
};
var serializeAws_json1_0ImageConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Port !== undefined && input.Port !== null && { Port: input.Port }),
      input.RuntimeEnvironmentVariables !== undefined &&
        input.RuntimeEnvironmentVariables !== null && {
          RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
            input.RuntimeEnvironmentVariables,
            context
          ),
        }
    ),
    input.StartCommand !== undefined && input.StartCommand !== null && { StartCommand: input.StartCommand }
  );
};
var serializeAws_json1_0ImageRepository = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ImageConfiguration !== undefined &&
          input.ImageConfiguration !== null && {
            ImageConfiguration: serializeAws_json1_0ImageConfiguration(input.ImageConfiguration, context),
          }
      ),
      input.ImageIdentifier !== undefined &&
        input.ImageIdentifier !== null && { ImageIdentifier: input.ImageIdentifier }
    ),
    input.ImageRepositoryType !== undefined &&
      input.ImageRepositoryType !== null && { ImageRepositoryType: input.ImageRepositoryType }
  );
};
var serializeAws_json1_0InstanceConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.Cpu !== undefined && input.Cpu !== null && { Cpu: input.Cpu }),
      input.InstanceRoleArn !== undefined &&
        input.InstanceRoleArn !== null && { InstanceRoleArn: input.InstanceRoleArn }
    ),
    input.Memory !== undefined && input.Memory !== null && { Memory: input.Memory }
  );
};
var serializeAws_json1_0ListAutoScalingConfigurationsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AutoScalingConfigurationName !== undefined &&
            input.AutoScalingConfigurationName !== null && {
              AutoScalingConfigurationName: input.AutoScalingConfigurationName,
            }
        ),
        input.LatestOnly !== undefined && input.LatestOnly !== null && { LatestOnly: input.LatestOnly }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_0ListConnectionsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ConnectionName !== undefined && input.ConnectionName !== null && { ConnectionName: input.ConnectionName }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_0ListOperationsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }
  );
};
var serializeAws_json1_0ListServicesRequest = function (input, context) {
  return __assign(
    __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_0ListTagsForResourceRequest = function (input, context) {
  return __assign(
    {},
    input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }
  );
};
var serializeAws_json1_0PauseServiceRequest = function (input, context) {
  return __assign({}, input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn });
};
var serializeAws_json1_0ResumeServiceRequest = function (input, context) {
  return __assign({}, input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn });
};
var serializeAws_json1_0RuntimeEnvironmentVariables = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var serializeAws_json1_0SourceCodeVersion = function (input, context) {
  return __assign(
    __assign({}, input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_0SourceConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.AuthenticationConfiguration !== undefined &&
            input.AuthenticationConfiguration !== null && {
              AuthenticationConfiguration: serializeAws_json1_0AuthenticationConfiguration(
                input.AuthenticationConfiguration,
                context
              ),
            }
        ),
        input.AutoDeploymentsEnabled !== undefined &&
          input.AutoDeploymentsEnabled !== null && { AutoDeploymentsEnabled: input.AutoDeploymentsEnabled }
      ),
      input.CodeRepository !== undefined &&
        input.CodeRepository !== null && {
          CodeRepository: serializeAws_json1_0CodeRepository(input.CodeRepository, context),
        }
    ),
    input.ImageRepository !== undefined &&
      input.ImageRepository !== null && {
        ImageRepository: serializeAws_json1_0ImageRepository(input.ImageRepository, context),
      }
  );
};
var serializeAws_json1_0StartDeploymentRequest = function (input, context) {
  return __assign({}, input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn });
};
var serializeAws_json1_0Tag = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_0TagKeyList = function (input, context) {
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
var serializeAws_json1_0TagList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};
var serializeAws_json1_0TagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }
  );
};
var serializeAws_json1_0UntagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }
  );
};
var serializeAws_json1_0UpdateServiceRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.AutoScalingConfigurationArn !== undefined &&
              input.AutoScalingConfigurationArn !== null && {
                AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
              }
          ),
          input.HealthCheckConfiguration !== undefined &&
            input.HealthCheckConfiguration !== null && {
              HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(
                input.HealthCheckConfiguration,
                context
              ),
            }
        ),
        input.InstanceConfiguration !== undefined &&
          input.InstanceConfiguration !== null && {
            InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
          }
      ),
      input.ServiceArn !== undefined && input.ServiceArn !== null && { ServiceArn: input.ServiceArn }
    ),
    input.SourceConfiguration !== undefined &&
      input.SourceConfiguration !== null && {
        SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
      }
  );
};
var deserializeAws_json1_0AssociateCustomDomainResponse = function (output, context) {
  return {
    CustomDomain:
      output.CustomDomain !== undefined && output.CustomDomain !== null
        ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context)
        : undefined,
    DNSTarget: output.DNSTarget !== undefined && output.DNSTarget !== null ? output.DNSTarget : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
  };
};
var deserializeAws_json1_0AuthenticationConfiguration = function (output, context) {
  return {
    AccessRoleArn:
      output.AccessRoleArn !== undefined && output.AccessRoleArn !== null ? output.AccessRoleArn : undefined,
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
  };
};
var deserializeAws_json1_0AutoScalingConfiguration = function (output, context) {
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
var deserializeAws_json1_0AutoScalingConfigurationSummary = function (output, context) {
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
var deserializeAws_json1_0AutoScalingConfigurationSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0AutoScalingConfigurationSummary(entry, context);
    });
};
var deserializeAws_json1_0CertificateValidationRecord = function (output, context) {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_0CertificateValidationRecordList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0CertificateValidationRecord(entry, context);
    });
};
var deserializeAws_json1_0CodeConfiguration = function (output, context) {
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
var deserializeAws_json1_0CodeConfigurationValues = function (output, context) {
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
var deserializeAws_json1_0CodeRepository = function (output, context) {
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
var deserializeAws_json1_0Connection = function (output, context) {
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
var deserializeAws_json1_0ConnectionSummary = function (output, context) {
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
var deserializeAws_json1_0ConnectionSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ConnectionSummary(entry, context);
    });
};
var deserializeAws_json1_0CreateAutoScalingConfigurationResponse = function (output, context) {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  };
};
var deserializeAws_json1_0CreateConnectionResponse = function (output, context) {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  };
};
var deserializeAws_json1_0CreateServiceResponse = function (output, context) {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
var deserializeAws_json1_0CustomDomain = function (output, context) {
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
var deserializeAws_json1_0CustomDomainList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0CustomDomain(entry, context);
    });
};
var deserializeAws_json1_0DeleteAutoScalingConfigurationResponse = function (output, context) {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  };
};
var deserializeAws_json1_0DeleteConnectionResponse = function (output, context) {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  };
};
var deserializeAws_json1_0DeleteServiceResponse = function (output, context) {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
var deserializeAws_json1_0DescribeAutoScalingConfigurationResponse = function (output, context) {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration !== undefined && output.AutoScalingConfiguration !== null
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  };
};
var deserializeAws_json1_0DescribeCustomDomainsResponse = function (output, context) {
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
var deserializeAws_json1_0DescribeServiceResponse = function (output, context) {
  return {
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
var deserializeAws_json1_0DisassociateCustomDomainResponse = function (output, context) {
  return {
    CustomDomain:
      output.CustomDomain !== undefined && output.CustomDomain !== null
        ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context)
        : undefined,
    DNSTarget: output.DNSTarget !== undefined && output.DNSTarget !== null ? output.DNSTarget : undefined,
    ServiceArn: output.ServiceArn !== undefined && output.ServiceArn !== null ? output.ServiceArn : undefined,
  };
};
var deserializeAws_json1_0EncryptionConfiguration = function (output, context) {
  return {
    KmsKey: output.KmsKey !== undefined && output.KmsKey !== null ? output.KmsKey : undefined,
  };
};
var deserializeAws_json1_0HealthCheckConfiguration = function (output, context) {
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
var deserializeAws_json1_0ImageConfiguration = function (output, context) {
  return {
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables !== undefined && output.RuntimeEnvironmentVariables !== null
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: output.StartCommand !== undefined && output.StartCommand !== null ? output.StartCommand : undefined,
  };
};
var deserializeAws_json1_0ImageRepository = function (output, context) {
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
var deserializeAws_json1_0InstanceConfiguration = function (output, context) {
  return {
    Cpu: output.Cpu !== undefined && output.Cpu !== null ? output.Cpu : undefined,
    InstanceRoleArn:
      output.InstanceRoleArn !== undefined && output.InstanceRoleArn !== null ? output.InstanceRoleArn : undefined,
    Memory: output.Memory !== undefined && output.Memory !== null ? output.Memory : undefined,
  };
};
var deserializeAws_json1_0InternalServiceErrorException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_0InvalidRequestException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_0InvalidStateException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_0ListAutoScalingConfigurationsResponse = function (output, context) {
  return {
    AutoScalingConfigurationSummaryList:
      output.AutoScalingConfigurationSummaryList !== undefined && output.AutoScalingConfigurationSummaryList !== null
        ? deserializeAws_json1_0AutoScalingConfigurationSummaryList(output.AutoScalingConfigurationSummaryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_0ListConnectionsResponse = function (output, context) {
  return {
    ConnectionSummaryList:
      output.ConnectionSummaryList !== undefined && output.ConnectionSummaryList !== null
        ? deserializeAws_json1_0ConnectionSummaryList(output.ConnectionSummaryList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_0ListOperationsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    OperationSummaryList:
      output.OperationSummaryList !== undefined && output.OperationSummaryList !== null
        ? deserializeAws_json1_0OperationSummaryList(output.OperationSummaryList, context)
        : undefined,
  };
};
var deserializeAws_json1_0ListServicesResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ServiceSummaryList:
      output.ServiceSummaryList !== undefined && output.ServiceSummaryList !== null
        ? deserializeAws_json1_0ServiceSummaryList(output.ServiceSummaryList, context)
        : undefined,
  };
};
var deserializeAws_json1_0ListTagsForResourceResponse = function (output, context) {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined,
  };
};
var deserializeAws_json1_0OperationSummary = function (output, context) {
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
var deserializeAws_json1_0OperationSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0OperationSummary(entry, context);
    });
};
var deserializeAws_json1_0PauseServiceResponse = function (output, context) {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
var deserializeAws_json1_0ResourceNotFoundException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_0ResumeServiceResponse = function (output, context) {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
  };
};
var deserializeAws_json1_0RuntimeEnvironmentVariables = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = value), _b));
  }, {});
};
var deserializeAws_json1_0Service = function (output, context) {
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
var deserializeAws_json1_0ServiceQuotaExceededException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_0ServiceSummary = function (output, context) {
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
var deserializeAws_json1_0ServiceSummaryList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0ServiceSummary(entry, context);
    });
};
var deserializeAws_json1_0SourceCodeVersion = function (output, context) {
  return {
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_0SourceConfiguration = function (output, context) {
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
var deserializeAws_json1_0StartDeploymentResponse = function (output, context) {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
  };
};
var deserializeAws_json1_0Tag = function (output, context) {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_0TagList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
};
var deserializeAws_json1_0TagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_0UntagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_0UpdateServiceResponse = function (output, context) {
  return {
    OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_0Service(output.Service, context)
        : undefined,
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
//# sourceMappingURL=Aws_json1_0.js.map
