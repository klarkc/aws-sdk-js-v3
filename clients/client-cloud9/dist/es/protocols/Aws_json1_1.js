import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateEnvironmentEC2Command = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
      };
      body = JSON.stringify(serializeAws_json1_1CreateEnvironmentEC2Request(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateEnvironmentMembershipCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership",
      };
      body = JSON.stringify(serializeAws_json1_1CreateEnvironmentMembershipRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.DeleteEnvironment",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteEnvironmentRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteEnvironmentMembershipCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteEnvironmentMembershipRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeEnvironmentMembershipsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentMembershipsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeEnvironmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironments",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeEnvironmentStatusCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentStatusRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListEnvironmentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.ListEnvironments",
      };
      body = JSON.stringify(serializeAws_json1_1ListEnvironmentsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.ListTagsForResource",
      };
      body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.TagResource",
      };
      body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.UntagResource",
      };
      body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateEnvironmentCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.UpdateEnvironment",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateEnvironmentRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateEnvironmentMembershipCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateEnvironmentMembershipRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1CreateEnvironmentEC2Command = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateEnvironmentEC2CommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateEnvironmentEC2Result(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateEnvironmentEC2CommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateEnvironmentMembershipCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateEnvironmentMembershipCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateEnvironmentMembershipResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateEnvironmentMembershipCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteEnvironmentCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteEnvironmentResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteEnvironmentCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteEnvironmentMembershipCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteEnvironmentMembershipCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteEnvironmentMembershipResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteEnvironmentMembershipCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEnvironmentMembershipsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeEnvironmentMembershipsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEnvironmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeEnvironmentsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeEnvironmentsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeEnvironmentsCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEnvironmentStatusCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeEnvironmentStatusCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeEnvironmentStatusResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeEnvironmentStatusCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListEnvironmentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListEnvironmentsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListEnvironmentsResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListEnvironmentsCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "InternalServerErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 4];
            case "NotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1TagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1TagResourceCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConcurrentAccessException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConcurrentAccessException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentAccessExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UntagResourceResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConcurrentAccessException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConcurrentAccessException":
              return [3 /*break*/, 4];
            case "InternalServerErrorException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 6];
            case "NotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConcurrentAccessExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateEnvironmentCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateEnvironmentCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateEnvironmentResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateEnvironmentCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateEnvironmentMembershipCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateEnvironmentMembershipCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateEnvironmentMembershipResult(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateEnvironmentMembershipCommandError = function (output, context) {
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
            case "BadRequestException":
              return [3 /*break*/, 2];
            case "com.amazonaws.cloud9#BadRequestException":
              return [3 /*break*/, 2];
            case "ConflictException":
              return [3 /*break*/, 4];
            case "com.amazonaws.cloud9#ConflictException":
              return [3 /*break*/, 4];
            case "ForbiddenException":
              return [3 /*break*/, 6];
            case "com.amazonaws.cloud9#ForbiddenException":
              return [3 /*break*/, 6];
            case "InternalServerErrorException":
              return [3 /*break*/, 8];
            case "com.amazonaws.cloud9#InternalServerErrorException":
              return [3 /*break*/, 8];
            case "LimitExceededException":
              return [3 /*break*/, 10];
            case "com.amazonaws.cloud9#LimitExceededException":
              return [3 /*break*/, 10];
            case "NotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.cloud9#NotFoundException":
              return [3 /*break*/, 12];
            case "TooManyRequestsException":
              return [3 /*break*/, 14];
            case "com.amazonaws.cloud9#TooManyRequestsException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1BadRequestExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1BadRequestException(body, context);
      contents = __assign(
        { name: "BadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ConcurrentAccessExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConcurrentAccessException(body, context);
      contents = __assign(
        { name: "ConcurrentAccessException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1ForbiddenExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ForbiddenException(body, context);
      contents = __assign(
        { name: "ForbiddenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1InternalServerErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InternalServerErrorException(body, context);
      contents = __assign(
        { name: "InternalServerErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1TooManyRequestsExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
      contents = __assign(
        { name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1BoundedEnvironmentIdList = function (input, context) {
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
var serializeAws_json1_1CreateEnvironmentEC2Request = function (input, context) {
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
                      input.automaticStopTimeMinutes !== undefined &&
                        input.automaticStopTimeMinutes !== null && {
                          automaticStopTimeMinutes: input.automaticStopTimeMinutes,
                        }
                    ),
                    input.clientRequestToken !== undefined &&
                      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }
                  ),
                  input.connectionType !== undefined &&
                    input.connectionType !== null && { connectionType: input.connectionType }
                ),
                input.description !== undefined && input.description !== null && { description: input.description }
              ),
              input.imageId !== undefined && input.imageId !== null && { imageId: input.imageId }
            ),
            input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType }
          ),
          input.name !== undefined && input.name !== null && { name: input.name }
        ),
        input.ownerArn !== undefined && input.ownerArn !== null && { ownerArn: input.ownerArn }
      ),
      input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId }
    ),
    input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }
  );
};
var serializeAws_json1_1CreateEnvironmentMembershipRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
      ),
      input.permissions !== undefined && input.permissions !== null && { permissions: input.permissions }
    ),
    input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }
  );
};
var serializeAws_json1_1DeleteEnvironmentMembershipRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
    ),
    input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }
  );
};
var serializeAws_json1_1DeleteEnvironmentRequest = function (input, context) {
  return __assign(
    {},
    input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
  );
};
var serializeAws_json1_1DescribeEnvironmentMembershipsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
          ),
          input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
        ),
        input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
      ),
      input.permissions !== undefined &&
        input.permissions !== null && { permissions: serializeAws_json1_1PermissionsList(input.permissions, context) }
    ),
    input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }
  );
};
var serializeAws_json1_1DescribeEnvironmentsRequest = function (input, context) {
  return __assign(
    {},
    input.environmentIds !== undefined &&
      input.environmentIds !== null && {
        environmentIds: serializeAws_json1_1BoundedEnvironmentIdList(input.environmentIds, context),
      }
  );
};
var serializeAws_json1_1DescribeEnvironmentStatusRequest = function (input, context) {
  return __assign(
    {},
    input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
  );
};
var serializeAws_json1_1ListEnvironmentsRequest = function (input, context) {
  return __assign(
    __assign({}, input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
  return __assign(
    {},
    input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }
  );
};
var serializeAws_json1_1PermissionsList = function (input, context) {
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
var serializeAws_json1_1Tag = function (input, context) {
  return __assign(
    __assign({}, input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    input.Value !== undefined && input.Value !== null && { Value: input.Value }
  );
};
var serializeAws_json1_1TagKeyList = function (input, context) {
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
var serializeAws_json1_1TagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }
  );
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
  return __assign(
    __assign({}, input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }
  );
};
var serializeAws_json1_1UpdateEnvironmentMembershipRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
      ),
      input.permissions !== undefined && input.permissions !== null && { permissions: input.permissions }
    ),
    input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }
  );
};
var serializeAws_json1_1UpdateEnvironmentRequest = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.description !== undefined && input.description !== null && { description: input.description }),
      input.environmentId !== undefined && input.environmentId !== null && { environmentId: input.environmentId }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var deserializeAws_json1_1BadRequestException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ConcurrentAccessException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ConflictException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1CreateEnvironmentEC2Result = function (output, context) {
  return {
    environmentId:
      output.environmentId !== undefined && output.environmentId !== null ? output.environmentId : undefined,
  };
};
var deserializeAws_json1_1CreateEnvironmentMembershipResult = function (output, context) {
  return {
    membership:
      output.membership !== undefined && output.membership !== null
        ? deserializeAws_json1_1EnvironmentMember(output.membership, context)
        : undefined,
  };
};
var deserializeAws_json1_1DeleteEnvironmentMembershipResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteEnvironmentResult = function (output, context) {
  return {};
};
var deserializeAws_json1_1DescribeEnvironmentMembershipsResult = function (output, context) {
  return {
    memberships:
      output.memberships !== undefined && output.memberships !== null
        ? deserializeAws_json1_1EnvironmentMembersList(output.memberships, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeEnvironmentsResult = function (output, context) {
  return {
    environments:
      output.environments !== undefined && output.environments !== null
        ? deserializeAws_json1_1EnvironmentList(output.environments, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeEnvironmentStatusResult = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_json1_1Environment = function (output, context) {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    connectionType:
      output.connectionType !== undefined && output.connectionType !== null ? output.connectionType : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lifecycle:
      output.lifecycle !== undefined && output.lifecycle !== null
        ? deserializeAws_json1_1EnvironmentLifecycle(output.lifecycle, context)
        : undefined,
    managedCredentialsStatus:
      output.managedCredentialsStatus !== undefined && output.managedCredentialsStatus !== null
        ? output.managedCredentialsStatus
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    ownerArn: output.ownerArn !== undefined && output.ownerArn !== null ? output.ownerArn : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
var deserializeAws_json1_1EnvironmentIdList = function (output, context) {
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
var deserializeAws_json1_1EnvironmentLifecycle = function (output, context) {
  return {
    failureResource:
      output.failureResource !== undefined && output.failureResource !== null ? output.failureResource : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_json1_1EnvironmentList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Environment(entry, context);
    });
};
var deserializeAws_json1_1EnvironmentMember = function (output, context) {
  return {
    environmentId:
      output.environmentId !== undefined && output.environmentId !== null ? output.environmentId : undefined,
    lastAccess:
      output.lastAccess !== undefined && output.lastAccess !== null
        ? new Date(Math.round(output.lastAccess * 1000))
        : undefined,
    permissions: output.permissions !== undefined && output.permissions !== null ? output.permissions : undefined,
    userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
    userId: output.userId !== undefined && output.userId !== null ? output.userId : undefined,
  };
};
var deserializeAws_json1_1EnvironmentMembersList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1EnvironmentMember(entry, context);
    });
};
var deserializeAws_json1_1ForbiddenException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InternalServerErrorException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ListEnvironmentsResult = function (output, context) {
  return {
    environmentIds:
      output.environmentIds !== undefined && output.environmentIds !== null
        ? deserializeAws_json1_1EnvironmentIdList(output.environmentIds, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  };
};
var deserializeAws_json1_1NotFoundException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1TooManyRequestsException = function (output, context) {
  return {
    className: output.className !== undefined && output.className !== null ? output.className : undefined,
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1UpdateEnvironmentMembershipResult = function (output, context) {
  return {
    membership:
      output.membership !== undefined && output.membership !== null
        ? deserializeAws_json1_1EnvironmentMember(output.membership, context)
        : undefined,
  };
};
var deserializeAws_json1_1UpdateEnvironmentResult = function (output, context) {
  return {};
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
