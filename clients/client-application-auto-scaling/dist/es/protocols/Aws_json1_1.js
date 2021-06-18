import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1DeleteScalingPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DeleteScalingPolicy",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteScheduledActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DeleteScheduledAction",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteScheduledActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeregisterScalableTargetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DeregisterScalableTarget",
      };
      body = JSON.stringify(serializeAws_json1_1DeregisterScalableTargetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeScalableTargetsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DescribeScalableTargets",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeScalableTargetsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeScalingActivitiesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DescribeScalingActivities",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeScalingActivitiesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeScalingPoliciesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DescribeScalingPolicies",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeScheduledActionsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.DescribeScheduledActions",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeScheduledActionsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutScalingPolicyCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.PutScalingPolicy",
      };
      body = JSON.stringify(serializeAws_json1_1PutScalingPolicyRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1PutScheduledActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.PutScheduledAction",
      };
      body = JSON.stringify(serializeAws_json1_1PutScheduledActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1RegisterScalableTargetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AnyScaleFrontendService.RegisterScalableTarget",
      };
      body = JSON.stringify(serializeAws_json1_1RegisterScalableTargetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1DeleteScalingPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteScalingPolicyCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
export var deserializeAws_json1_1DeleteScheduledActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteScheduledActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteScheduledActionCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
export var deserializeAws_json1_1DeregisterScalableTargetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeregisterScalableTargetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeregisterScalableTargetCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
export var deserializeAws_json1_1DescribeScalableTargetsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeScalableTargetsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeScalableTargetsCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
export var deserializeAws_json1_1DescribeScalingActivitiesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeScalingActivitiesCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
export var deserializeAws_json1_1DescribeScalingPoliciesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeScalingPoliciesCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "FailedResourceAccessException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "ValidationException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationautoscaling#ValidationException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeScheduledActionsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeScheduledActionsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeScheduledActionsCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
export var deserializeAws_json1_1PutScalingPolicyCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutScalingPolicyCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutScalingPolicyCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "FailedResourceAccessException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
              return [3 /*break*/, 4];
            case "InternalServiceException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 6];
            case "LimitExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#LimitExceededException":
              return [3 /*break*/, 8];
            case "ObjectNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
              return [3 /*break*/, 10];
            case "ValidationException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationautoscaling#ValidationException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutScheduledActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1PutScheduledActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1PutScheduledActionCommandError = function (output, context) {
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
            case "ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#LimitExceededException":
              return [3 /*break*/, 6];
            case "ObjectNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
              return [3 /*break*/, 8];
            case "ValidationException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationautoscaling#ValidationException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterScalableTargetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1RegisterScalableTargetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1RegisterScalableTargetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1RegisterScalableTargetCommandError = function (output, context) {
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
            case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
              return [3 /*break*/, 2];
            case "InternalServiceException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationautoscaling#InternalServiceException":
              return [3 /*break*/, 4];
            case "LimitExceededException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationautoscaling#LimitExceededException":
              return [3 /*break*/, 6];
            case "ValidationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationautoscaling#ValidationException":
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
var deserializeAws_json1_1FailedResourceAccessExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1FailedResourceAccessException(body, context);
      contents = __assign(
        { name: "FailedResourceAccessException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var serializeAws_json1_1CustomizedMetricSpecification = function (input, context) {
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
var serializeAws_json1_1DeleteScalingPolicyRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
        input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
      ),
      input.ScalableDimension !== undefined &&
        input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
  );
};
var serializeAws_json1_1DeleteScheduledActionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        input.ScalableDimension !== undefined &&
          input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
      ),
      input.ScheduledActionName !== undefined &&
        input.ScheduledActionName !== null && { ScheduledActionName: input.ScheduledActionName }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
  );
};
var serializeAws_json1_1DeregisterScalableTargetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
      input.ScalableDimension !== undefined &&
        input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
  );
};
var serializeAws_json1_1DescribeScalableTargetsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
          input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
        ),
        input.ResourceIds !== undefined &&
          input.ResourceIds !== null && {
            ResourceIds: serializeAws_json1_1ResourceIdsMaxLen1600(input.ResourceIds, context),
          }
      ),
      input.ScalableDimension !== undefined &&
        input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
  );
};
var serializeAws_json1_1DescribeScalingActivitiesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign({}, input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
          input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
        ),
        input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
      ),
      input.ScalableDimension !== undefined &&
        input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
  );
};
var serializeAws_json1_1DescribeScalingPoliciesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
            ),
            input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
          ),
          input.PolicyNames !== undefined &&
            input.PolicyNames !== null && {
              PolicyNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.PolicyNames, context),
            }
        ),
        input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
      ),
      input.ScalableDimension !== undefined &&
        input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
  );
};
var serializeAws_json1_1DescribeScheduledActionsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
            ),
            input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
          ),
          input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
        ),
        input.ScalableDimension !== undefined &&
          input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
      ),
      input.ScheduledActionNames !== undefined &&
        input.ScheduledActionNames !== null && {
          ScheduledActionNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.ScheduledActionNames, context),
        }
    ),
    input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
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
var serializeAws_json1_1PredefinedMetricSpecification = function (input, context) {
  return __assign(
    __assign(
      {},
      input.PredefinedMetricType !== undefined &&
        input.PredefinedMetricType !== null && { PredefinedMetricType: input.PredefinedMetricType }
    ),
    input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }
  );
};
var serializeAws_json1_1PutScalingPolicyRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }
              ),
              input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }
            ),
            input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
          ),
          input.ScalableDimension !== undefined &&
            input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
        ),
        input.ServiceNamespace !== undefined &&
          input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
      ),
      input.StepScalingPolicyConfiguration !== undefined &&
        input.StepScalingPolicyConfiguration !== null && {
          StepScalingPolicyConfiguration: serializeAws_json1_1StepScalingPolicyConfiguration(
            input.StepScalingPolicyConfiguration,
            context
          ),
        }
    ),
    input.TargetTrackingScalingPolicyConfiguration !== undefined &&
      input.TargetTrackingScalingPolicyConfiguration !== null && {
        TargetTrackingScalingPolicyConfiguration: serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
          input.TargetTrackingScalingPolicyConfiguration,
          context
        ),
      }
  );
};
var serializeAws_json1_1PutScheduledActionRequest = function (input, context) {
  return __assign(
    __assign(
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
                  input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
                ),
                input.ScalableDimension !== undefined &&
                  input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
              ),
              input.ScalableTargetAction !== undefined &&
                input.ScalableTargetAction !== null && {
                  ScalableTargetAction: serializeAws_json1_1ScalableTargetAction(input.ScalableTargetAction, context),
                }
            ),
            input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }
          ),
          input.ScheduledActionName !== undefined &&
            input.ScheduledActionName !== null && { ScheduledActionName: input.ScheduledActionName }
        ),
        input.ServiceNamespace !== undefined &&
          input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
      ),
      input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }
    ),
    input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }
  );
};
var serializeAws_json1_1RegisterScalableTargetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }
              ),
              input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }
            ),
            input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }
          ),
          input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }
        ),
        input.ScalableDimension !== undefined &&
          input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }
      ),
      input.ServiceNamespace !== undefined &&
        input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }
    ),
    input.SuspendedState !== undefined &&
      input.SuspendedState !== null && {
        SuspendedState: serializeAws_json1_1SuspendedState(input.SuspendedState, context),
      }
  );
};
var serializeAws_json1_1ResourceIdsMaxLen1600 = function (input, context) {
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
var serializeAws_json1_1ScalableTargetAction = function (input, context) {
  return __assign(
    __assign({}, input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }
  );
};
var serializeAws_json1_1StepAdjustment = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.MetricIntervalLowerBound !== undefined &&
          input.MetricIntervalLowerBound !== null && { MetricIntervalLowerBound: input.MetricIntervalLowerBound }
      ),
      input.MetricIntervalUpperBound !== undefined &&
        input.MetricIntervalUpperBound !== null && { MetricIntervalUpperBound: input.MetricIntervalUpperBound }
    ),
    input.ScalingAdjustment !== undefined &&
      input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }
  );
};
var serializeAws_json1_1StepAdjustments = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1StepAdjustment(entry, context);
    });
};
var serializeAws_json1_1StepScalingPolicyConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.AdjustmentType !== undefined &&
              input.AdjustmentType !== null && { AdjustmentType: input.AdjustmentType }
          ),
          input.Cooldown !== undefined && input.Cooldown !== null && { Cooldown: input.Cooldown }
        ),
        input.MetricAggregationType !== undefined &&
          input.MetricAggregationType !== null && { MetricAggregationType: input.MetricAggregationType }
      ),
      input.MinAdjustmentMagnitude !== undefined &&
        input.MinAdjustmentMagnitude !== null && { MinAdjustmentMagnitude: input.MinAdjustmentMagnitude }
    ),
    input.StepAdjustments !== undefined &&
      input.StepAdjustments !== null && {
        StepAdjustments: serializeAws_json1_1StepAdjustments(input.StepAdjustments, context),
      }
  );
};
var serializeAws_json1_1SuspendedState = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.DynamicScalingInSuspended !== undefined &&
          input.DynamicScalingInSuspended !== null && { DynamicScalingInSuspended: input.DynamicScalingInSuspended }
      ),
      input.DynamicScalingOutSuspended !== undefined &&
        input.DynamicScalingOutSuspended !== null && { DynamicScalingOutSuspended: input.DynamicScalingOutSuspended }
    ),
    input.ScheduledScalingSuspended !== undefined &&
      input.ScheduledScalingSuspended !== null && { ScheduledScalingSuspended: input.ScheduledScalingSuspended }
  );
};
var serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              {},
              input.CustomizedMetricSpecification !== undefined &&
                input.CustomizedMetricSpecification !== null && {
                  CustomizedMetricSpecification: serializeAws_json1_1CustomizedMetricSpecification(
                    input.CustomizedMetricSpecification,
                    context
                  ),
                }
            ),
            input.DisableScaleIn !== undefined &&
              input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn }
          ),
          input.PredefinedMetricSpecification !== undefined &&
            input.PredefinedMetricSpecification !== null && {
              PredefinedMetricSpecification: serializeAws_json1_1PredefinedMetricSpecification(
                input.PredefinedMetricSpecification,
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
var deserializeAws_json1_1Alarm = function (output, context) {
  return {
    AlarmARN: output.AlarmARN !== undefined && output.AlarmARN !== null ? output.AlarmARN : undefined,
    AlarmName: output.AlarmName !== undefined && output.AlarmName !== null ? output.AlarmName : undefined,
  };
};
var deserializeAws_json1_1Alarms = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
};
var deserializeAws_json1_1ConcurrentUpdateException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1CustomizedMetricSpecification = function (output, context) {
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
var deserializeAws_json1_1DeleteScalingPolicyResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteScheduledActionResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeregisterScalableTargetResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DescribeScalableTargetsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalableTargets:
      output.ScalableTargets !== undefined && output.ScalableTargets !== null
        ? deserializeAws_json1_1ScalableTargets(output.ScalableTargets, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeScalingActivitiesResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingActivities:
      output.ScalingActivities !== undefined && output.ScalingActivities !== null
        ? deserializeAws_json1_1ScalingActivities(output.ScalingActivities, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeScalingPoliciesResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeScheduledActionsResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScheduledActions:
      output.ScheduledActions !== undefined && output.ScheduledActions !== null
        ? deserializeAws_json1_1ScheduledActions(output.ScheduledActions, context)
        : undefined,
  };
};
var deserializeAws_json1_1FailedResourceAccessException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
var deserializeAws_json1_1PredefinedMetricSpecification = function (output, context) {
  return {
    PredefinedMetricType:
      output.PredefinedMetricType !== undefined && output.PredefinedMetricType !== null
        ? output.PredefinedMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  };
};
var deserializeAws_json1_1PutScalingPolicyResponse = function (output, context) {
  return {
    Alarms:
      output.Alarms !== undefined && output.Alarms !== null
        ? deserializeAws_json1_1Alarms(output.Alarms, context)
        : undefined,
    PolicyARN: output.PolicyARN !== undefined && output.PolicyARN !== null ? output.PolicyARN : undefined,
  };
};
var deserializeAws_json1_1PutScheduledActionResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1RegisterScalableTargetResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1ScalableTarget = function (output, context) {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    SuspendedState:
      output.SuspendedState !== undefined && output.SuspendedState !== null
        ? deserializeAws_json1_1SuspendedState(output.SuspendedState, context)
        : undefined,
  };
};
var deserializeAws_json1_1ScalableTargetAction = function (output, context) {
  return {
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
  };
};
var deserializeAws_json1_1ScalableTargets = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalableTarget(entry, context);
    });
};
var deserializeAws_json1_1ScalingActivities = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScalingActivity(entry, context);
    });
};
var deserializeAws_json1_1ScalingActivity = function (output, context) {
  return {
    ActivityId: output.ActivityId !== undefined && output.ActivityId !== null ? output.ActivityId : undefined,
    Cause: output.Cause !== undefined && output.Cause !== null ? output.Cause : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Details: output.Details !== undefined && output.Details !== null ? output.Details : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  };
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
    Alarms:
      output.Alarms !== undefined && output.Alarms !== null
        ? deserializeAws_json1_1Alarms(output.Alarms, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    PolicyARN: output.PolicyARN !== undefined && output.PolicyARN !== null ? output.PolicyARN : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StepScalingPolicyConfiguration:
      output.StepScalingPolicyConfiguration !== undefined && output.StepScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context)
        : undefined,
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration !== undefined &&
      output.TargetTrackingScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined,
  };
};
var deserializeAws_json1_1ScheduledAction = function (output, context) {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalableTargetAction:
      output.ScalableTargetAction !== undefined && output.ScalableTargetAction !== null
        ? deserializeAws_json1_1ScalableTargetAction(output.ScalableTargetAction, context)
        : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
    ScheduledActionARN:
      output.ScheduledActionARN !== undefined && output.ScheduledActionARN !== null
        ? output.ScheduledActionARN
        : undefined,
    ScheduledActionName:
      output.ScheduledActionName !== undefined && output.ScheduledActionName !== null
        ? output.ScheduledActionName
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
  };
};
var deserializeAws_json1_1ScheduledActions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ScheduledAction(entry, context);
    });
};
var deserializeAws_json1_1StepAdjustment = function (output, context) {
  return {
    MetricIntervalLowerBound:
      output.MetricIntervalLowerBound !== undefined && output.MetricIntervalLowerBound !== null
        ? output.MetricIntervalLowerBound
        : undefined,
    MetricIntervalUpperBound:
      output.MetricIntervalUpperBound !== undefined && output.MetricIntervalUpperBound !== null
        ? output.MetricIntervalUpperBound
        : undefined,
    ScalingAdjustment:
      output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
        ? output.ScalingAdjustment
        : undefined,
  };
};
var deserializeAws_json1_1StepAdjustments = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1StepAdjustment(entry, context);
    });
};
var deserializeAws_json1_1StepScalingPolicyConfiguration = function (output, context) {
  return {
    AdjustmentType:
      output.AdjustmentType !== undefined && output.AdjustmentType !== null ? output.AdjustmentType : undefined,
    Cooldown: output.Cooldown !== undefined && output.Cooldown !== null ? output.Cooldown : undefined,
    MetricAggregationType:
      output.MetricAggregationType !== undefined && output.MetricAggregationType !== null
        ? output.MetricAggregationType
        : undefined,
    MinAdjustmentMagnitude:
      output.MinAdjustmentMagnitude !== undefined && output.MinAdjustmentMagnitude !== null
        ? output.MinAdjustmentMagnitude
        : undefined,
    StepAdjustments:
      output.StepAdjustments !== undefined && output.StepAdjustments !== null
        ? deserializeAws_json1_1StepAdjustments(output.StepAdjustments, context)
        : undefined,
  };
};
var deserializeAws_json1_1SuspendedState = function (output, context) {
  return {
    DynamicScalingInSuspended:
      output.DynamicScalingInSuspended !== undefined && output.DynamicScalingInSuspended !== null
        ? output.DynamicScalingInSuspended
        : undefined,
    DynamicScalingOutSuspended:
      output.DynamicScalingOutSuspended !== undefined && output.DynamicScalingOutSuspended !== null
        ? output.DynamicScalingOutSuspended
        : undefined,
    ScheduledScalingSuspended:
      output.ScheduledScalingSuspended !== undefined && output.ScheduledScalingSuspended !== null
        ? output.ScheduledScalingSuspended
        : undefined,
  };
};
var deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration = function (output, context) {
  return {
    CustomizedMetricSpecification:
      output.CustomizedMetricSpecification !== undefined && output.CustomizedMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedMetricSpecification(output.CustomizedMetricSpecification, context)
        : undefined,
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
    PredefinedMetricSpecification:
      output.PredefinedMetricSpecification !== undefined && output.PredefinedMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedMetricSpecification(output.PredefinedMetricSpecification, context)
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
    TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
  };
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
