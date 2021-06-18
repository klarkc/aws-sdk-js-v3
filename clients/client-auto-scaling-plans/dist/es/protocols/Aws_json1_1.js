import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateScalingPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
      };
      body = JSON.stringify(serializeAws_json1_1CreateScalingPlanRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteScalingPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteScalingPlanRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeScalingPlanResourcesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeScalingPlanResourcesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeScalingPlansCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeScalingPlansRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetScalingPlanResourceForecastDataCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData",
      };
      body = JSON.stringify(serializeAws_json1_1GetScalingPlanResourceForecastDataRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateScalingPlanCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateScalingPlanRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1CreateScalingPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateScalingPlanCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateScalingPlanResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateScalingPlanCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscalingplans#InternalServiceException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscalingplans#LimitExceededException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscalingplans#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteScalingPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteScalingPlanCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteScalingPlanResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteScalingPlanCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscalingplans#InternalServiceException":
              return [3 /*break*/, 4];
            case "ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscalingplans#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeScalingPlanResourcesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeScalingPlanResourcesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeScalingPlanResourcesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeScalingPlanResourcesCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscalingplans#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscalingplans#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeScalingPlansCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeScalingPlansCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeScalingPlansResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeScalingPlansCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscalingplans#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscalingplans#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError = function (output, context) {
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
            case "InternalServiceException":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscalingplans#InternalServiceException":
              return [3 /*break*/, 2];
            case "ValidationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscalingplans#ValidationException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateScalingPlanCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateScalingPlanCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateScalingPlanResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateScalingPlanCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.autoscalingplans#InternalServiceException":
              return [3 /*break*/, 4];
            case "ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.autoscalingplans#ValidationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1ConcurrentUpdateExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConcurrentUpdateException(body, context);
      contents = __assign(
        { name: "ConcurrentUpdateException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InternalServiceExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalServiceException(body, context);
      contents = __assign(
        { name: "InternalServiceException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1ObjectNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ObjectNotFoundException(body, context);
      contents = __assign(
        { name: "ObjectNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var serializeAws_json1_1ApplicationSource = function (input, context) {
  return __assign(
    __assign(
      {},
      input.CloudFormationStackARN !== undefined &&
        input.CloudFormationStackARN !== null && { CloudFormationStackARN: input.CloudFormationStackARN }
    ),
    input.TagFilters !== undefined &&
      input.TagFilters !== null && { TagFilters: serializeAws_json1_1TagFilters(input.TagFilters, context) }
  );
};
var serializeAws_json1_1ApplicationSources = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ApplicationSource(entry, context);
    });
};
var serializeAws_json1_1CreateScalingPlanRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ApplicationSource !== undefined &&
          input.ApplicationSource !== null && {
            ApplicationSource: serializeAws_json1_1ApplicationSource(input.ApplicationSource, context),
          }
      ),
      input.ScalingInstructions !== undefined &&
        input.ScalingInstructions !== null && {
          ScalingInstructions: serializeAws_json1_1ScalingInstructions(input.ScalingInstructions, context),
        }
    ),
    input.ScalingPlanName !== undefined && input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }
  );
};
var serializeAws_json1_1CustomizedLoadMetricSpecification = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.Dimensions !== undefined &&
              input.Dimensions !== null && {
                Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context),
              }
          ),
          input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }
        ),
        input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }
      ),
      input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }
    ),
    input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }
  );
};
var serializeAws_json1_1CustomizedScalingMetricSpecification = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.Dimensions !== undefined &&
              input.Dimensions !== null && {
                Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context),
              }
          ),
          input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }
        ),
        input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }
      ),
      input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }
    ),
    input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }
  );
};
var serializeAws_json1_1DeleteScalingPlanRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ScalingPlanName !== undefined &&
        input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }
    ),
    input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }
  );
};
var serializeAws_json1_1DescribeScalingPlanResourcesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
      ),
      input.ScalingPlanName !== undefined &&
        input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }
    ),
    input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }
  );
};
var serializeAws_json1_1DescribeScalingPlansRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.ApplicationSources !== undefined &&
              input.ApplicationSources !== null && {
                ApplicationSources: serializeAws_json1_1ApplicationSources(input.ApplicationSources, context),
              }
          ),
          input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
        ),
        input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
      ),
      input.ScalingPlanNames !== undefined &&
        input.ScalingPlanNames !== null && {
          ScalingPlanNames: serializeAws_json1_1ScalingPlanNames(input.ScalingPlanNames, context),
        }
    ),
    input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }
  );
};
var serializeAws_json1_1GetScalingPlanResourceForecastDataRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                __assign(
                  {},
                  input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }
                ),
                input.ForecastDataType !== undefined &&
                  input.ForecastDataType !== null && { ForecastDataType: input.ForecastDataType }
              ),
              input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
            ),
            input.ScalableDimension !== undefined &&
              input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
          ),
          input.ScalingPlanName !== undefined &&
            input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }
        ),
        input.ScalingPlanVersion !== undefined &&
          input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }
      ),
      input.ServiceNamespace !== undefined &&
        input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
    ),
    input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }
  );
};
var serializeAws_json1_1MetricDimension = function (input, context) {
  return __assign(
    __assign({}, input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1MetricDimensions = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1MetricDimension(entry, context);
    });
};
var serializeAws_json1_1PredefinedLoadMetricSpecification = function (input, context) {
  return __assign(
    __assign(
      {},
      input.PredefinedLoadMetricType !== undefined &&
        input.PredefinedLoadMetricType !== null && { PredefinedLoadMetricType: input.PredefinedLoadMetricType }
    ),
    input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }
  );
};
var serializeAws_json1_1PredefinedScalingMetricSpecification = function (input, context) {
  return __assign(
    __assign(
      {},
      input.PredefinedScalingMetricType !== undefined &&
        input.PredefinedScalingMetricType !== null && { PredefinedScalingMetricType: input.PredefinedScalingMetricType }
    ),
    input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }
  );
};
var serializeAws_json1_1ScalingInstruction = function (input, context) {
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
                              input.CustomizedLoadMetricSpecification !== undefined &&
                                input.CustomizedLoadMetricSpecification !== null && {
                                  CustomizedLoadMetricSpecification:
                                    serializeAws_json1_1CustomizedLoadMetricSpecification(
                                      input.CustomizedLoadMetricSpecification,
                                      context
                                    ),
                                }
                            ),
                            input.DisableDynamicScaling !== undefined &&
                              input.DisableDynamicScaling !== null && {
                                DisableDynamicScaling: input.DisableDynamicScaling,
                              }
                          ),
                          input.MaxCapacity !== undefined &&
                            input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }
                        ),
                        input.MinCapacity !== undefined &&
                          input.MinCapacity !== null && { MinCapacity: input.MinCapacity }
                      ),
                      input.PredefinedLoadMetricSpecification !== undefined &&
                        input.PredefinedLoadMetricSpecification !== null && {
                          PredefinedLoadMetricSpecification: serializeAws_json1_1PredefinedLoadMetricSpecification(
                            input.PredefinedLoadMetricSpecification,
                            context
                          ),
                        }
                    ),
                    input.PredictiveScalingMaxCapacityBehavior !== undefined &&
                      input.PredictiveScalingMaxCapacityBehavior !== null && {
                        PredictiveScalingMaxCapacityBehavior: input.PredictiveScalingMaxCapacityBehavior,
                      }
                  ),
                  input.PredictiveScalingMaxCapacityBuffer !== undefined &&
                    input.PredictiveScalingMaxCapacityBuffer !== null && {
                      PredictiveScalingMaxCapacityBuffer: input.PredictiveScalingMaxCapacityBuffer,
                    }
                ),
                input.PredictiveScalingMode !== undefined &&
                  input.PredictiveScalingMode !== null && { PredictiveScalingMode: input.PredictiveScalingMode }
              ),
              input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
            ),
            input.ScalableDimension !== undefined &&
              input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
          ),
          input.ScalingPolicyUpdateBehavior !== undefined &&
            input.ScalingPolicyUpdateBehavior !== null && {
              ScalingPolicyUpdateBehavior: input.ScalingPolicyUpdateBehavior,
            }
        ),
        input.ScheduledActionBufferTime !== undefined &&
          input.ScheduledActionBufferTime !== null && { ScheduledActionBufferTime: input.ScheduledActionBufferTime }
      ),
      input.ServiceNamespace !== undefined &&
        input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
    ),
    input.TargetTrackingConfigurations !== undefined &&
      input.TargetTrackingConfigurations !== null && {
        TargetTrackingConfigurations: serializeAws_json1_1TargetTrackingConfigurations(
          input.TargetTrackingConfigurations,
          context
        ),
      }
  );
};
var serializeAws_json1_1ScalingInstructions = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ScalingInstruction(entry, context);
    });
};
var serializeAws_json1_1ScalingPlanNames = function (input, context) {
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
var serializeAws_json1_1TagFilter = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1TagValues(input.Values, context) }
  );
};
var serializeAws_json1_1TagFilters = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1TagFilter(entry, context);
    });
};
var serializeAws_json1_1TagValues = function (input, context) {
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
var serializeAws_json1_1TargetTrackingConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.CustomizedScalingMetricSpecification !== undefined &&
                  input.CustomizedScalingMetricSpecification !== null && {
                    CustomizedScalingMetricSpecification: serializeAws_json1_1CustomizedScalingMetricSpecification(
                      input.CustomizedScalingMetricSpecification,
                      context
                    ),
                  }
              ),
              input.DisableScaleIn !== undefined &&
                input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn }
            ),
            input.EstimatedInstanceWarmup !== undefined &&
              input.EstimatedInstanceWarmup !== null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }
          ),
          input.PredefinedScalingMetricSpecification !== undefined &&
            input.PredefinedScalingMetricSpecification !== null && {
              PredefinedScalingMetricSpecification: serializeAws_json1_1PredefinedScalingMetricSpecification(
                input.PredefinedScalingMetricSpecification,
                context
              ),
            }
        ),
        input.ScaleInCooldown !== undefined &&
          input.ScaleInCooldown !== null && { ScaleInCooldown: input.ScaleInCooldown }
      ),
      input.ScaleOutCooldown !== undefined &&
        input.ScaleOutCooldown !== null && { ScaleOutCooldown: input.ScaleOutCooldown }
    ),
    input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }
  );
};
var serializeAws_json1_1TargetTrackingConfigurations = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1TargetTrackingConfiguration(entry, context);
    });
};
var serializeAws_json1_1UpdateScalingPlanRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.ApplicationSource !== undefined &&
            input.ApplicationSource !== null && {
              ApplicationSource: serializeAws_json1_1ApplicationSource(input.ApplicationSource, context),
            }
        ),
        input.ScalingInstructions !== undefined &&
          input.ScalingInstructions !== null && {
            ScalingInstructions: serializeAws_json1_1ScalingInstructions(input.ScalingInstructions, context),
          }
      ),
      input.ScalingPlanName !== undefined &&
        input.ScalingPlanName !== null && { ScalingPlanName: input.ScalingPlanName }
    ),
    input.ScalingPlanVersion !== undefined &&
      input.ScalingPlanVersion !== null && { ScalingPlanVersion: input.ScalingPlanVersion }
  );
};
var deserializeAws_json1_1ApplicationSource = function (output, context) {
  return {
    CloudFormationStackARN:
      output.CloudFormationStackARN !== undefined && output.CloudFormationStackARN !== null
        ? output.CloudFormationStackARN
        : undefined,
    TagFilters:
      output.TagFilters !== undefined && output.TagFilters !== null
        ? deserializeAws_json1_1TagFilters(output.TagFilters, context)
        : undefined,
  };
};
var deserializeAws_json1_1ConcurrentUpdateException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1CreateScalingPlanResponse = function (output, context) {
  return {
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined && output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
  };
};
var deserializeAws_json1_1CustomizedLoadMetricSpecification = function (output, context) {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  };
};
var deserializeAws_json1_1CustomizedScalingMetricSpecification = function (output, context) {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  };
};
var deserializeAws_json1_1Datapoint = function (output, context) {
  return {
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_1Datapoints = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Datapoint(entry, context);
    });
};
var deserializeAws_json1_1DeleteScalingPlanResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DescribeScalingPlanResourcesResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPlanResources:
      output.ScalingPlanResources !== undefined && output.ScalingPlanResources !== null
        ? deserializeAws_json1_1ScalingPlanResources(output.ScalingPlanResources, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeScalingPlansResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPlans:
      output.ScalingPlans !== undefined && output.ScalingPlans !== null
        ? deserializeAws_json1_1ScalingPlans(output.ScalingPlans, context)
        : undefined,
  };
};
var deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse = function (output, context) {
  return {
    Datapoints:
      output.Datapoints !== undefined && output.Datapoints !== null
        ? deserializeAws_json1_1Datapoints(output.Datapoints, context)
        : undefined,
  };
};
var deserializeAws_json1_1InternalServiceException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1MetricDimension = function (output, context) {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  };
};
var deserializeAws_json1_1MetricDimensions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1MetricDimension(entry, context);
    });
};
var deserializeAws_json1_1ObjectNotFoundException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1PredefinedLoadMetricSpecification = function (output, context) {
  return {
    PredefinedLoadMetricType:
      output.PredefinedLoadMetricType !== undefined && output.PredefinedLoadMetricType !== null
        ? output.PredefinedLoadMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  };
};
var deserializeAws_json1_1PredefinedScalingMetricSpecification = function (output, context) {
  return {
    PredefinedScalingMetricType:
      output.PredefinedScalingMetricType !== undefined && output.PredefinedScalingMetricType !== null
        ? output.PredefinedScalingMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  };
};
var deserializeAws_json1_1ScalingInstruction = function (output, context) {
  return {
    CustomizedLoadMetricSpecification:
      output.CustomizedLoadMetricSpecification !== undefined && output.CustomizedLoadMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedLoadMetricSpecification(output.CustomizedLoadMetricSpecification, context)
        : undefined,
    DisableDynamicScaling:
      output.DisableDynamicScaling !== undefined && output.DisableDynamicScaling !== null
        ? output.DisableDynamicScaling
        : undefined,
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    PredefinedLoadMetricSpecification:
      output.PredefinedLoadMetricSpecification !== undefined && output.PredefinedLoadMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedLoadMetricSpecification(output.PredefinedLoadMetricSpecification, context)
        : undefined,
    PredictiveScalingMaxCapacityBehavior:
      output.PredictiveScalingMaxCapacityBehavior !== undefined && output.PredictiveScalingMaxCapacityBehavior !== null
        ? output.PredictiveScalingMaxCapacityBehavior
        : undefined,
    PredictiveScalingMaxCapacityBuffer:
      output.PredictiveScalingMaxCapacityBuffer !== undefined && output.PredictiveScalingMaxCapacityBuffer !== null
        ? output.PredictiveScalingMaxCapacityBuffer
        : undefined,
    PredictiveScalingMode:
      output.PredictiveScalingMode !== undefined && output.PredictiveScalingMode !== null
        ? output.PredictiveScalingMode
        : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalingPolicyUpdateBehavior:
      output.ScalingPolicyUpdateBehavior !== undefined && output.ScalingPolicyUpdateBehavior !== null
        ? output.ScalingPolicyUpdateBehavior
        : undefined,
    ScheduledActionBufferTime:
      output.ScheduledActionBufferTime !== undefined && output.ScheduledActionBufferTime !== null
        ? output.ScheduledActionBufferTime
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    TargetTrackingConfigurations:
      output.TargetTrackingConfigurations !== undefined && output.TargetTrackingConfigurations !== null
        ? deserializeAws_json1_1TargetTrackingConfigurations(output.TargetTrackingConfigurations, context)
        : undefined,
  };
};
var deserializeAws_json1_1ScalingInstructions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingInstruction(entry, context);
    });
};
var deserializeAws_json1_1ScalingPlan = function (output, context) {
  return {
    ApplicationSource:
      output.ApplicationSource !== undefined && output.ApplicationSource !== null
        ? deserializeAws_json1_1ApplicationSource(output.ApplicationSource, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ScalingInstructions:
      output.ScalingInstructions !== undefined && output.ScalingInstructions !== null
        ? deserializeAws_json1_1ScalingInstructions(output.ScalingInstructions, context)
        : undefined,
    ScalingPlanName:
      output.ScalingPlanName !== undefined && output.ScalingPlanName !== null ? output.ScalingPlanName : undefined,
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined && output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    StatusStartTime:
      output.StatusStartTime !== undefined && output.StatusStartTime !== null
        ? new Date(Math.round(output.StatusStartTime * 1000))
        : undefined,
  };
};
var deserializeAws_json1_1ScalingPlanResource = function (output, context) {
  return {
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalingPlanName:
      output.ScalingPlanName !== undefined && output.ScalingPlanName !== null ? output.ScalingPlanName : undefined,
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined && output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
    ScalingStatusCode:
      output.ScalingStatusCode !== undefined && output.ScalingStatusCode !== null
        ? output.ScalingStatusCode
        : undefined,
    ScalingStatusMessage:
      output.ScalingStatusMessage !== undefined && output.ScalingStatusMessage !== null
        ? output.ScalingStatusMessage
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
  };
};
var deserializeAws_json1_1ScalingPlanResources = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingPlanResource(entry, context);
    });
};
var deserializeAws_json1_1ScalingPlans = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingPlan(entry, context);
    });
};
var deserializeAws_json1_1ScalingPolicies = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
};
var deserializeAws_json1_1ScalingPolicy = function (output, context) {
  return {
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
    TargetTrackingConfiguration:
      output.TargetTrackingConfiguration !== undefined && output.TargetTrackingConfiguration !== null
        ? deserializeAws_json1_1TargetTrackingConfiguration(output.TargetTrackingConfiguration, context)
        : undefined,
  };
};
var deserializeAws_json1_1TagFilter = function (output, context) {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1TagValues(output.Values, context)
        : undefined,
  };
};
var deserializeAws_json1_1TagFilters = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1TagFilter(entry, context);
    });
};
var deserializeAws_json1_1TagValues = function (output, context) {
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
var deserializeAws_json1_1TargetTrackingConfiguration = function (output, context) {
  return {
    CustomizedScalingMetricSpecification:
      output.CustomizedScalingMetricSpecification !== undefined && output.CustomizedScalingMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedScalingMetricSpecification(
            output.CustomizedScalingMetricSpecification,
            context
          )
        : undefined,
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
    EstimatedInstanceWarmup:
      output.EstimatedInstanceWarmup !== undefined && output.EstimatedInstanceWarmup !== null
        ? output.EstimatedInstanceWarmup
        : undefined,
    PredefinedScalingMetricSpecification:
      output.PredefinedScalingMetricSpecification !== undefined && output.PredefinedScalingMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedScalingMetricSpecification(
            output.PredefinedScalingMetricSpecification,
            context
          )
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
    TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
  };
};
var deserializeAws_json1_1TargetTrackingConfigurations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1TargetTrackingConfiguration(entry, context);
    });
};
var deserializeAws_json1_1UpdateScalingPlanResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1ValidationException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
