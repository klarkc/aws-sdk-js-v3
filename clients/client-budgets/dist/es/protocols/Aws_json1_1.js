import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateBudgetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.CreateBudget",
      };
      body = JSON.stringify(serializeAws_json1_1CreateBudgetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateBudgetActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.CreateBudgetAction",
      };
      body = JSON.stringify(serializeAws_json1_1CreateBudgetActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateNotificationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.CreateNotification",
      };
      body = JSON.stringify(serializeAws_json1_1CreateNotificationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateSubscriberCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.CreateSubscriber",
      };
      body = JSON.stringify(serializeAws_json1_1CreateSubscriberRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteBudgetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DeleteBudget",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteBudgetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteBudgetActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DeleteBudgetAction",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteBudgetActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteNotificationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DeleteNotification",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteNotificationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteSubscriberCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DeleteSubscriber",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteSubscriberRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudget",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetAction",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetActionHistoriesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionHistories",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionHistoriesRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetActionsForAccountCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionsForAccountRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetActionsForBudgetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetActionsForBudgetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeBudgetsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeBudgets",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeBudgetsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeNotificationsForBudgetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeNotificationsForBudget",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeNotificationsForBudgetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeSubscribersForNotificationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.DescribeSubscribersForNotification",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeSubscribersForNotificationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ExecuteBudgetActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.ExecuteBudgetAction",
      };
      body = JSON.stringify(serializeAws_json1_1ExecuteBudgetActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateBudgetCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.UpdateBudget",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateBudgetRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateBudgetActionCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.UpdateBudgetAction",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateBudgetActionRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateNotificationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.UpdateNotification",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateNotificationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateSubscriberCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSBudgetServiceGateway.UpdateSubscriber",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateSubscriberRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1CreateBudgetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateBudgetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateBudgetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateBudgetCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "DuplicateRecordException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#DuplicateRecordException":
              return [3 /*break*/, 6];
            case "InternalErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateBudgetActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateBudgetActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateBudgetActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateBudgetActionCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "DuplicateRecordException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#DuplicateRecordException":
              return [3 /*break*/, 6];
            case "InternalErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateNotificationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateNotificationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateNotificationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateNotificationCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "DuplicateRecordException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#DuplicateRecordException":
              return [3 /*break*/, 6];
            case "InternalErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateSubscriberCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateSubscriberCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateSubscriberResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateSubscriberCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#CreationLimitExceededException":
              return [3 /*break*/, 4];
            case "DuplicateRecordException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#DuplicateRecordException":
              return [3 /*break*/, 6];
            case "InternalErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1CreationLimitExceededExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteBudgetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteBudgetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteBudgetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteBudgetCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteBudgetActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteBudgetActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteBudgetActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteBudgetActionCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceLockedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#ResourceLockedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteNotificationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteNotificationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteNotificationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteNotificationCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteSubscriberCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteSubscriberCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteSubscriberResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteSubscriberCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetActionCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetActionHistoriesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetActionHistoriesResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetActionHistoriesCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "InvalidParameterException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetActionsForAccountCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetActionsForAccountResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetActionsForAccountCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "InvalidParameterException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidParameterException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetActionsForBudgetCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 6];
            case "InvalidParameterException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "InternalErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeBudgetsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeBudgetsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeBudgetsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeBudgetsCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "InternalErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeNotificationsForBudgetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeNotificationsForBudgetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeNotificationsForBudgetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeNotificationsForBudgetCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "InternalErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeSubscribersForNotificationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1DescribeSubscribersForNotificationCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeSubscribersForNotificationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeSubscribersForNotificationCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#ExpiredNextTokenException":
              return [3 /*break*/, 4];
            case "InternalErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 6];
            case "InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidNextTokenException":
              return [3 /*break*/, 8];
            case "InvalidParameterException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ExecuteBudgetActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ExecuteBudgetActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ExecuteBudgetActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ExecuteBudgetActionCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceLockedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#ResourceLockedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateBudgetCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateBudgetCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateBudgetResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateBudgetCommandError = function (output, context) {
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
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
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
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateBudgetActionCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateBudgetActionCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateBudgetActionResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateBudgetActionCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "InternalErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 8];
            case "ResourceLockedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#ResourceLockedException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceLockedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateNotificationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateNotificationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateNotificationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateNotificationCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DuplicateRecordException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#DuplicateRecordException":
              return [3 /*break*/, 4];
            case "InternalErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 6];
            case "InvalidParameterException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateSubscriberCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateSubscriberCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateSubscriberResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateSubscriberCommandError = function (output, context) {
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
            case "AccessDeniedException":
              return [3 /*break*/, 2];
            case "com.amazonaws.budgets#AccessDeniedException":
              return [3 /*break*/, 2];
            case "DuplicateRecordException":
              return [3 /*break*/, 4];
            case "com.amazonaws.budgets#DuplicateRecordException":
              return [3 /*break*/, 4];
            case "InternalErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.budgets#InternalErrorException":
              return [3 /*break*/, 6];
            case "InvalidParameterException":
              return [3 /*break*/, 8];
            case "com.amazonaws.budgets#InvalidParameterException":
              return [3 /*break*/, 8];
            case "NotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.budgets#NotFoundException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1DuplicateRecordExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1CreationLimitExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1CreationLimitExceededException(body, context);
      contents = __assign(
        { name: "CreationLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1DuplicateRecordExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1DuplicateRecordException(body, context);
      contents = __assign(
        { name: "DuplicateRecordException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ExpiredNextTokenExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ExpiredNextTokenException(body, context);
      contents = __assign(
        { name: "ExpiredNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InternalErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalErrorException(body, context);
      contents = __assign(
        { name: "InternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1NotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1NotFoundException(body, context);
      contents = __assign(
        { name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ResourceLockedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ResourceLockedException(body, context);
      contents = __assign(
        { name: "ResourceLockedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1ActionThreshold = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ActionThresholdType !== undefined &&
        input.ActionThresholdType !== null && { ActionThresholdType: input.ActionThresholdType }
    ),
    input.ActionThresholdValue !== undefined &&
      input.ActionThresholdValue !== null && { ActionThresholdValue: input.ActionThresholdValue }
  );
};
var serializeAws_json1_1Budget = function (input, context) {
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
                      {},
                      input.BudgetLimit !== undefined &&
                        input.BudgetLimit !== null && {
                          BudgetLimit: serializeAws_json1_1Spend(input.BudgetLimit, context),
                        }
                    ),
                    input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
                  ),
                  input.BudgetType !== undefined && input.BudgetType !== null && { BudgetType: input.BudgetType }
                ),
                input.CalculatedSpend !== undefined &&
                  input.CalculatedSpend !== null && {
                    CalculatedSpend: serializeAws_json1_1CalculatedSpend(input.CalculatedSpend, context),
                  }
              ),
              input.CostFilters !== undefined &&
                input.CostFilters !== null && {
                  CostFilters: serializeAws_json1_1CostFilters(input.CostFilters, context),
                }
            ),
            input.CostTypes !== undefined &&
              input.CostTypes !== null && { CostTypes: serializeAws_json1_1CostTypes(input.CostTypes, context) }
          ),
          input.LastUpdatedTime !== undefined &&
            input.LastUpdatedTime !== null && { LastUpdatedTime: Math.round(input.LastUpdatedTime.getTime() / 1000) }
        ),
        input.PlannedBudgetLimits !== undefined &&
          input.PlannedBudgetLimits !== null && {
            PlannedBudgetLimits: serializeAws_json1_1PlannedBudgetLimits(input.PlannedBudgetLimits, context),
          }
      ),
      input.TimePeriod !== undefined &&
        input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }
    ),
    input.TimeUnit !== undefined && input.TimeUnit !== null && { TimeUnit: input.TimeUnit }
  );
};
var serializeAws_json1_1CalculatedSpend = function (input, context) {
  return __assign(
    __assign(
      {},
      input.ActualSpend !== undefined &&
        input.ActualSpend !== null && { ActualSpend: serializeAws_json1_1Spend(input.ActualSpend, context) }
    ),
    input.ForecastedSpend !== undefined &&
      input.ForecastedSpend !== null && { ForecastedSpend: serializeAws_json1_1Spend(input.ForecastedSpend, context) }
  );
};
var serializeAws_json1_1CostFilters = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = serializeAws_json1_1DimensionValues(value, context)), _b)
    );
  }, {});
};
var serializeAws_json1_1CostTypes = function (input, context) {
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
                        {},
                        input.IncludeCredit !== undefined &&
                          input.IncludeCredit !== null && { IncludeCredit: input.IncludeCredit }
                      ),
                      input.IncludeDiscount !== undefined &&
                        input.IncludeDiscount !== null && { IncludeDiscount: input.IncludeDiscount }
                    ),
                    input.IncludeOtherSubscription !== undefined &&
                      input.IncludeOtherSubscription !== null && {
                        IncludeOtherSubscription: input.IncludeOtherSubscription,
                      }
                  ),
                  input.IncludeRecurring !== undefined &&
                    input.IncludeRecurring !== null && { IncludeRecurring: input.IncludeRecurring }
                ),
                input.IncludeRefund !== undefined &&
                  input.IncludeRefund !== null && { IncludeRefund: input.IncludeRefund }
              ),
              input.IncludeSubscription !== undefined &&
                input.IncludeSubscription !== null && { IncludeSubscription: input.IncludeSubscription }
            ),
            input.IncludeSupport !== undefined &&
              input.IncludeSupport !== null && { IncludeSupport: input.IncludeSupport }
          ),
          input.IncludeTax !== undefined && input.IncludeTax !== null && { IncludeTax: input.IncludeTax }
        ),
        input.IncludeUpfront !== undefined && input.IncludeUpfront !== null && { IncludeUpfront: input.IncludeUpfront }
      ),
      input.UseAmortized !== undefined && input.UseAmortized !== null && { UseAmortized: input.UseAmortized }
    ),
    input.UseBlended !== undefined && input.UseBlended !== null && { UseBlended: input.UseBlended }
  );
};
var serializeAws_json1_1CreateBudgetActionRequest = function (input, context) {
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
                    input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }
                  ),
                  input.ActionThreshold !== undefined &&
                    input.ActionThreshold !== null && {
                      ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
                    }
                ),
                input.ActionType !== undefined && input.ActionType !== null && { ActionType: input.ActionType }
              ),
              input.ApprovalModel !== undefined &&
                input.ApprovalModel !== null && { ApprovalModel: input.ApprovalModel }
            ),
            input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
          ),
          input.Definition !== undefined &&
            input.Definition !== null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }
        ),
        input.ExecutionRoleArn !== undefined &&
          input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }
      ),
      input.NotificationType !== undefined &&
        input.NotificationType !== null && { NotificationType: input.NotificationType }
    ),
    input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }
  );
};
var serializeAws_json1_1CreateBudgetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
      input.Budget !== undefined &&
        input.Budget !== null && { Budget: serializeAws_json1_1Budget(input.Budget, context) }
    ),
    input.NotificationsWithSubscribers !== undefined &&
      input.NotificationsWithSubscribers !== null && {
        NotificationsWithSubscribers: serializeAws_json1_1NotificationWithSubscribersList(
          input.NotificationsWithSubscribers,
          context
        ),
      }
  );
};
var serializeAws_json1_1CreateNotificationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
      ),
      input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
    ),
    input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }
  );
};
var serializeAws_json1_1CreateSubscriberRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
      ),
      input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
    ),
    input.Subscriber !== undefined &&
      input.Subscriber !== null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }
  );
};
var serializeAws_json1_1Definition = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.IamActionDefinition !== undefined &&
          input.IamActionDefinition !== null && {
            IamActionDefinition: serializeAws_json1_1IamActionDefinition(input.IamActionDefinition, context),
          }
      ),
      input.ScpActionDefinition !== undefined &&
        input.ScpActionDefinition !== null && {
          ScpActionDefinition: serializeAws_json1_1ScpActionDefinition(input.ScpActionDefinition, context),
        }
    ),
    input.SsmActionDefinition !== undefined &&
      input.SsmActionDefinition !== null && {
        SsmActionDefinition: serializeAws_json1_1SsmActionDefinition(input.SsmActionDefinition, context),
      }
  );
};
var serializeAws_json1_1DeleteBudgetActionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
      input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }
    ),
    input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
  );
};
var serializeAws_json1_1DeleteBudgetRequest = function (input, context) {
  return __assign(
    __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
  );
};
var serializeAws_json1_1DeleteNotificationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
      input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
    ),
    input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
  );
};
var serializeAws_json1_1DeleteSubscriberRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
      ),
      input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
    ),
    input.Subscriber !== undefined &&
      input.Subscriber !== null && { Subscriber: serializeAws_json1_1Subscriber(input.Subscriber, context) }
  );
};
var serializeAws_json1_1DescribeBudgetActionHistoriesRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
            input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }
          ),
          input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }
  );
};
var serializeAws_json1_1DescribeBudgetActionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
      input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }
    ),
    input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
  );
};
var serializeAws_json1_1DescribeBudgetActionsForAccountRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeBudgetActionsForBudgetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeBudgetPerformanceHistoryRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
          input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.TimePeriod !== undefined &&
      input.TimePeriod !== null && { TimePeriod: serializeAws_json1_1TimePeriod(input.TimePeriod, context) }
  );
};
var serializeAws_json1_1DescribeBudgetRequest = function (input, context) {
  return __assign(
    __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
  );
};
var serializeAws_json1_1DescribeBudgetsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeNotificationsForBudgetRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
      ),
      input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
    ),
    input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
  );
};
var serializeAws_json1_1DescribeSubscribersForNotificationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
          input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
        ),
        input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }
      ),
      input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }
    ),
    input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
  );
};
var serializeAws_json1_1DimensionValues = function (input, context) {
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
var serializeAws_json1_1ExecuteBudgetActionRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }
      ),
      input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
    ),
    input.ExecutionType !== undefined && input.ExecutionType !== null && { ExecutionType: input.ExecutionType }
  );
};
var serializeAws_json1_1Groups = function (input, context) {
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
var serializeAws_json1_1IamActionDefinition = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.Groups !== undefined &&
            input.Groups !== null && { Groups: serializeAws_json1_1Groups(input.Groups, context) }
        ),
        input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }
      ),
      input.Roles !== undefined && input.Roles !== null && { Roles: serializeAws_json1_1Roles(input.Roles, context) }
    ),
    input.Users !== undefined && input.Users !== null && { Users: serializeAws_json1_1Users(input.Users, context) }
  );
};
var serializeAws_json1_1InstanceIds = function (input, context) {
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
var serializeAws_json1_1Notification = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.ComparisonOperator !== undefined &&
              input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }
          ),
          input.NotificationState !== undefined &&
            input.NotificationState !== null && { NotificationState: input.NotificationState }
        ),
        input.NotificationType !== undefined &&
          input.NotificationType !== null && { NotificationType: input.NotificationType }
      ),
      input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }
    ),
    input.ThresholdType !== undefined && input.ThresholdType !== null && { ThresholdType: input.ThresholdType }
  );
};
var serializeAws_json1_1NotificationWithSubscribers = function (input, context) {
  return __assign(
    __assign(
      {},
      input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
    ),
    input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }
  );
};
var serializeAws_json1_1NotificationWithSubscribersList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1NotificationWithSubscribers(entry, context);
    });
};
var serializeAws_json1_1PlannedBudgetLimits = function (input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = serializeAws_json1_1Spend(value, context)), _b));
  }, {});
};
var serializeAws_json1_1Roles = function (input, context) {
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
var serializeAws_json1_1ScpActionDefinition = function (input, context) {
  return __assign(
    __assign({}, input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    input.TargetIds !== undefined &&
      input.TargetIds !== null && { TargetIds: serializeAws_json1_1TargetIds(input.TargetIds, context) }
  );
};
var serializeAws_json1_1Spend = function (input, context) {
  return __assign(
    __assign({}, input.Amount !== undefined && input.Amount !== null && { Amount: input.Amount }),
    input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }
  );
};
var serializeAws_json1_1SsmActionDefinition = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.ActionSubType !== undefined && input.ActionSubType !== null && { ActionSubType: input.ActionSubType }
      ),
      input.InstanceIds !== undefined &&
        input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1InstanceIds(input.InstanceIds, context) }
    ),
    input.Region !== undefined && input.Region !== null && { Region: input.Region }
  );
};
var serializeAws_json1_1Subscriber = function (input, context) {
  return __assign(
    __assign({}, input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    input.SubscriptionType !== undefined &&
      input.SubscriptionType !== null && { SubscriptionType: input.SubscriptionType }
  );
};
var serializeAws_json1_1Subscribers = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Subscriber(entry, context);
    });
};
var serializeAws_json1_1TargetIds = function (input, context) {
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
var serializeAws_json1_1TimePeriod = function (input, context) {
  return __assign(
    __assign({}, input.End !== undefined && input.End !== null && { End: Math.round(input.End.getTime() / 1000) }),
    input.Start !== undefined && input.Start !== null && { Start: Math.round(input.Start.getTime() / 1000) }
  );
};
var serializeAws_json1_1UpdateBudgetActionRequest = function (input, context) {
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
                    input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }
                  ),
                  input.ActionId !== undefined && input.ActionId !== null && { ActionId: input.ActionId }
                ),
                input.ActionThreshold !== undefined &&
                  input.ActionThreshold !== null && {
                    ActionThreshold: serializeAws_json1_1ActionThreshold(input.ActionThreshold, context),
                  }
              ),
              input.ApprovalModel !== undefined &&
                input.ApprovalModel !== null && { ApprovalModel: input.ApprovalModel }
            ),
            input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
          ),
          input.Definition !== undefined &&
            input.Definition !== null && { Definition: serializeAws_json1_1Definition(input.Definition, context) }
        ),
        input.ExecutionRoleArn !== undefined &&
          input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }
      ),
      input.NotificationType !== undefined &&
        input.NotificationType !== null && { NotificationType: input.NotificationType }
    ),
    input.Subscribers !== undefined &&
      input.Subscribers !== null && { Subscribers: serializeAws_json1_1Subscribers(input.Subscribers, context) }
  );
};
var serializeAws_json1_1UpdateBudgetRequest = function (input, context) {
  return __assign(
    __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    input.NewBudget !== undefined &&
      input.NewBudget !== null && { NewBudget: serializeAws_json1_1Budget(input.NewBudget, context) }
  );
};
var serializeAws_json1_1UpdateNotificationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
      ),
      input.NewNotification !== undefined &&
        input.NewNotification !== null && {
          NewNotification: serializeAws_json1_1Notification(input.NewNotification, context),
        }
    ),
    input.OldNotification !== undefined &&
      input.OldNotification !== null && {
        OldNotification: serializeAws_json1_1Notification(input.OldNotification, context),
      }
  );
};
var serializeAws_json1_1UpdateSubscriberRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign({}, input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
          input.BudgetName !== undefined && input.BudgetName !== null && { BudgetName: input.BudgetName }
        ),
        input.NewSubscriber !== undefined &&
          input.NewSubscriber !== null && {
            NewSubscriber: serializeAws_json1_1Subscriber(input.NewSubscriber, context),
          }
      ),
      input.Notification !== undefined &&
        input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }
    ),
    input.OldSubscriber !== undefined &&
      input.OldSubscriber !== null && { OldSubscriber: serializeAws_json1_1Subscriber(input.OldSubscriber, context) }
  );
};
var serializeAws_json1_1Users = function (input, context) {
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
var deserializeAws_json1_1AccessDeniedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Action = function (output, context) {
  return {
    ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
    ActionThreshold:
      output.ActionThreshold !== undefined && output.ActionThreshold !== null
        ? deserializeAws_json1_1ActionThreshold(output.ActionThreshold, context)
        : undefined,
    ActionType: output.ActionType !== undefined && output.ActionType !== null ? output.ActionType : undefined,
    ApprovalModel:
      output.ApprovalModel !== undefined && output.ApprovalModel !== null ? output.ApprovalModel : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_json1_1Definition(output.Definition, context)
        : undefined,
    ExecutionRoleArn:
      output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
    NotificationType:
      output.NotificationType !== undefined && output.NotificationType !== null ? output.NotificationType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
  };
};
var deserializeAws_json1_1ActionHistories = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ActionHistory(entry, context);
    });
};
var deserializeAws_json1_1ActionHistory = function (output, context) {
  return {
    ActionHistoryDetails:
      output.ActionHistoryDetails !== undefined && output.ActionHistoryDetails !== null
        ? deserializeAws_json1_1ActionHistoryDetails(output.ActionHistoryDetails, context)
        : undefined,
    EventType: output.EventType !== undefined && output.EventType !== null ? output.EventType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
  };
};
var deserializeAws_json1_1ActionHistoryDetails = function (output, context) {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Actions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Action(entry, context);
    });
};
var deserializeAws_json1_1ActionThreshold = function (output, context) {
  return {
    ActionThresholdType:
      output.ActionThresholdType !== undefined && output.ActionThresholdType !== null
        ? output.ActionThresholdType
        : undefined,
    ActionThresholdValue:
      output.ActionThresholdValue !== undefined && output.ActionThresholdValue !== null
        ? output.ActionThresholdValue
        : undefined,
  };
};
var deserializeAws_json1_1Budget = function (output, context) {
  return {
    BudgetLimit:
      output.BudgetLimit !== undefined && output.BudgetLimit !== null
        ? deserializeAws_json1_1Spend(output.BudgetLimit, context)
        : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    BudgetType: output.BudgetType !== undefined && output.BudgetType !== null ? output.BudgetType : undefined,
    CalculatedSpend:
      output.CalculatedSpend !== undefined && output.CalculatedSpend !== null
        ? deserializeAws_json1_1CalculatedSpend(output.CalculatedSpend, context)
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    PlannedBudgetLimits:
      output.PlannedBudgetLimits !== undefined && output.PlannedBudgetLimits !== null
        ? deserializeAws_json1_1PlannedBudgetLimits(output.PlannedBudgetLimits, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
    TimeUnit: output.TimeUnit !== undefined && output.TimeUnit !== null ? output.TimeUnit : undefined,
  };
};
var deserializeAws_json1_1BudgetedAndActualAmounts = function (output, context) {
  return {
    ActualAmount:
      output.ActualAmount !== undefined && output.ActualAmount !== null
        ? deserializeAws_json1_1Spend(output.ActualAmount, context)
        : undefined,
    BudgetedAmount:
      output.BudgetedAmount !== undefined && output.BudgetedAmount !== null
        ? deserializeAws_json1_1Spend(output.BudgetedAmount, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1TimePeriod(output.TimePeriod, context)
        : undefined,
  };
};
var deserializeAws_json1_1BudgetedAndActualAmountsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1BudgetedAndActualAmounts(entry, context);
    });
};
var deserializeAws_json1_1BudgetPerformanceHistory = function (output, context) {
  return {
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    BudgetType: output.BudgetType !== undefined && output.BudgetType !== null ? output.BudgetType : undefined,
    BudgetedAndActualAmountsList:
      output.BudgetedAndActualAmountsList !== undefined && output.BudgetedAndActualAmountsList !== null
        ? deserializeAws_json1_1BudgetedAndActualAmountsList(output.BudgetedAndActualAmountsList, context)
        : undefined,
    CostFilters:
      output.CostFilters !== undefined && output.CostFilters !== null
        ? deserializeAws_json1_1CostFilters(output.CostFilters, context)
        : undefined,
    CostTypes:
      output.CostTypes !== undefined && output.CostTypes !== null
        ? deserializeAws_json1_1CostTypes(output.CostTypes, context)
        : undefined,
    TimeUnit: output.TimeUnit !== undefined && output.TimeUnit !== null ? output.TimeUnit : undefined,
  };
};
var deserializeAws_json1_1Budgets = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Budget(entry, context);
    });
};
var deserializeAws_json1_1CalculatedSpend = function (output, context) {
  return {
    ActualSpend:
      output.ActualSpend !== undefined && output.ActualSpend !== null
        ? deserializeAws_json1_1Spend(output.ActualSpend, context)
        : undefined,
    ForecastedSpend:
      output.ForecastedSpend !== undefined && output.ForecastedSpend !== null
        ? deserializeAws_json1_1Spend(output.ForecastedSpend, context)
        : undefined,
  };
};
var deserializeAws_json1_1CostFilters = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(
      __assign({}, acc),
      ((_b = {}), (_b[key] = deserializeAws_json1_1DimensionValues(value, context)), _b)
    );
  }, {});
};
var deserializeAws_json1_1CostTypes = function (output, context) {
  return {
    IncludeCredit:
      output.IncludeCredit !== undefined && output.IncludeCredit !== null ? output.IncludeCredit : undefined,
    IncludeDiscount:
      output.IncludeDiscount !== undefined && output.IncludeDiscount !== null ? output.IncludeDiscount : undefined,
    IncludeOtherSubscription:
      output.IncludeOtherSubscription !== undefined && output.IncludeOtherSubscription !== null
        ? output.IncludeOtherSubscription
        : undefined,
    IncludeRecurring:
      output.IncludeRecurring !== undefined && output.IncludeRecurring !== null ? output.IncludeRecurring : undefined,
    IncludeRefund:
      output.IncludeRefund !== undefined && output.IncludeRefund !== null ? output.IncludeRefund : undefined,
    IncludeSubscription:
      output.IncludeSubscription !== undefined && output.IncludeSubscription !== null
        ? output.IncludeSubscription
        : undefined,
    IncludeSupport:
      output.IncludeSupport !== undefined && output.IncludeSupport !== null ? output.IncludeSupport : undefined,
    IncludeTax: output.IncludeTax !== undefined && output.IncludeTax !== null ? output.IncludeTax : undefined,
    IncludeUpfront:
      output.IncludeUpfront !== undefined && output.IncludeUpfront !== null ? output.IncludeUpfront : undefined,
    UseAmortized: output.UseAmortized !== undefined && output.UseAmortized !== null ? output.UseAmortized : undefined,
    UseBlended: output.UseBlended !== undefined && output.UseBlended !== null ? output.UseBlended : undefined,
  };
};
var deserializeAws_json1_1CreateBudgetActionResponse = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
  };
};
var deserializeAws_json1_1CreateBudgetResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1CreateNotificationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1CreateSubscriberResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1CreationLimitExceededException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Definition = function (output, context) {
  return {
    IamActionDefinition:
      output.IamActionDefinition !== undefined && output.IamActionDefinition !== null
        ? deserializeAws_json1_1IamActionDefinition(output.IamActionDefinition, context)
        : undefined,
    ScpActionDefinition:
      output.ScpActionDefinition !== undefined && output.ScpActionDefinition !== null
        ? deserializeAws_json1_1ScpActionDefinition(output.ScpActionDefinition, context)
        : undefined,
    SsmActionDefinition:
      output.SsmActionDefinition !== undefined && output.SsmActionDefinition !== null
        ? deserializeAws_json1_1SsmActionDefinition(output.SsmActionDefinition, context)
        : undefined,
  };
};
var deserializeAws_json1_1DeleteBudgetActionResponse = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
  };
};
var deserializeAws_json1_1DeleteBudgetResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteNotificationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteSubscriberResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DescribeBudgetActionHistoriesResponse = function (output, context) {
  return {
    ActionHistories:
      output.ActionHistories !== undefined && output.ActionHistories !== null
        ? deserializeAws_json1_1ActionHistories(output.ActionHistories, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeBudgetActionResponse = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1Action(output.Action, context)
        : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
  };
};
var deserializeAws_json1_1DescribeBudgetActionsForAccountResponse = function (output, context) {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1Actions(output.Actions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeBudgetActionsForBudgetResponse = function (output, context) {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1Actions(output.Actions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeBudgetPerformanceHistoryResponse = function (output, context) {
  return {
    BudgetPerformanceHistory:
      output.BudgetPerformanceHistory !== undefined && output.BudgetPerformanceHistory !== null
        ? deserializeAws_json1_1BudgetPerformanceHistory(output.BudgetPerformanceHistory, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeBudgetResponse = function (output, context) {
  return {
    Budget:
      output.Budget !== undefined && output.Budget !== null
        ? deserializeAws_json1_1Budget(output.Budget, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeBudgetsResponse = function (output, context) {
  return {
    Budgets:
      output.Budgets !== undefined && output.Budgets !== null
        ? deserializeAws_json1_1Budgets(output.Budgets, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeNotificationsForBudgetResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Notifications:
      output.Notifications !== undefined && output.Notifications !== null
        ? deserializeAws_json1_1Notifications(output.Notifications, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeSubscribersForNotificationResponse = function (output, context) {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Subscribers:
      output.Subscribers !== undefined && output.Subscribers !== null
        ? deserializeAws_json1_1Subscribers(output.Subscribers, context)
        : undefined,
  };
};
var deserializeAws_json1_1DimensionValues = function (output, context) {
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
var deserializeAws_json1_1DuplicateRecordException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1ExecuteBudgetActionResponse = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    ActionId: output.ActionId !== undefined && output.ActionId !== null ? output.ActionId : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    ExecutionType:
      output.ExecutionType !== undefined && output.ExecutionType !== null ? output.ExecutionType : undefined,
  };
};
var deserializeAws_json1_1ExpiredNextTokenException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Groups = function (output, context) {
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
var deserializeAws_json1_1IamActionDefinition = function (output, context) {
  return {
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1Groups(output.Groups, context)
        : undefined,
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    Roles:
      output.Roles !== undefined && output.Roles !== null
        ? deserializeAws_json1_1Roles(output.Roles, context)
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1Users(output.Users, context)
        : undefined,
  };
};
var deserializeAws_json1_1InstanceIds = function (output, context) {
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
var deserializeAws_json1_1InternalErrorException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1InvalidParameterException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1NotFoundException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Notification = function (output, context) {
  return {
    ComparisonOperator:
      output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    NotificationState:
      output.NotificationState !== undefined && output.NotificationState !== null
        ? output.NotificationState
        : undefined,
    NotificationType:
      output.NotificationType !== undefined && output.NotificationType !== null ? output.NotificationType : undefined,
    Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
    ThresholdType:
      output.ThresholdType !== undefined && output.ThresholdType !== null ? output.ThresholdType : undefined,
  };
};
var deserializeAws_json1_1Notifications = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Notification(entry, context);
    });
};
var deserializeAws_json1_1PlannedBudgetLimits = function (output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;
    var _c = __read(_a, 2),
      key = _c[0],
      value = _c[1];
    if (value === null) {
      return acc;
    }
    return __assign(__assign({}, acc), ((_b = {}), (_b[key] = deserializeAws_json1_1Spend(value, context)), _b));
  }, {});
};
var deserializeAws_json1_1ResourceLockedException = function (output, context) {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  };
};
var deserializeAws_json1_1Roles = function (output, context) {
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
var deserializeAws_json1_1ScpActionDefinition = function (output, context) {
  return {
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    TargetIds:
      output.TargetIds !== undefined && output.TargetIds !== null
        ? deserializeAws_json1_1TargetIds(output.TargetIds, context)
        : undefined,
  };
};
var deserializeAws_json1_1Spend = function (output, context) {
  return {
    Amount: output.Amount !== undefined && output.Amount !== null ? output.Amount : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  };
};
var deserializeAws_json1_1SsmActionDefinition = function (output, context) {
  return {
    ActionSubType:
      output.ActionSubType !== undefined && output.ActionSubType !== null ? output.ActionSubType : undefined,
    InstanceIds:
      output.InstanceIds !== undefined && output.InstanceIds !== null
        ? deserializeAws_json1_1InstanceIds(output.InstanceIds, context)
        : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
  };
};
var deserializeAws_json1_1Subscriber = function (output, context) {
  return {
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    SubscriptionType:
      output.SubscriptionType !== undefined && output.SubscriptionType !== null ? output.SubscriptionType : undefined,
  };
};
var deserializeAws_json1_1Subscribers = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Subscriber(entry, context);
    });
};
var deserializeAws_json1_1TargetIds = function (output, context) {
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
var deserializeAws_json1_1TimePeriod = function (output, context) {
  return {
    End: output.End !== undefined && output.End !== null ? new Date(Math.round(output.End * 1000)) : undefined,
    Start: output.Start !== undefined && output.Start !== null ? new Date(Math.round(output.Start * 1000)) : undefined,
  };
};
var deserializeAws_json1_1UpdateBudgetActionResponse = function (output, context) {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    BudgetName: output.BudgetName !== undefined && output.BudgetName !== null ? output.BudgetName : undefined,
    NewAction:
      output.NewAction !== undefined && output.NewAction !== null
        ? deserializeAws_json1_1Action(output.NewAction, context)
        : undefined,
    OldAction:
      output.OldAction !== undefined && output.OldAction !== null
        ? deserializeAws_json1_1Action(output.OldAction, context)
        : undefined,
  };
};
var deserializeAws_json1_1UpdateBudgetResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateNotificationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateSubscriberResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1Users = function (output, context) {
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
