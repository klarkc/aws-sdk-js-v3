import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
      };
      body = JSON.stringify(serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1BatchDeleteImportDataCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.BatchDeleteImportData",
      };
      body = JSON.stringify(serializeAws_json1_1BatchDeleteImportDataRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.CreateApplication",
      };
      body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1CreateTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.CreateTags",
      };
      body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteApplicationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DeleteApplications",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteApplicationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DeleteTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DeleteTags",
      };
      body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeAgentsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeAgents",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeAgentsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeConfigurations",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeConfigurationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeContinuousExportsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeContinuousExports",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeContinuousExportsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeExportConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeExportConfigurations",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeExportConfigurationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeExportTasksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeExportTasks",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeImportTasksCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeImportTasks",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeImportTasksRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DescribeTagsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DescribeTags",
      };
      body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication",
      };
      body = JSON.stringify(serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ExportConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.ExportConfigurations",
      };
      body = "{}";
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1GetDiscoverySummaryCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.GetDiscoverySummary",
      };
      body = JSON.stringify(serializeAws_json1_1GetDiscoverySummaryRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListConfigurationsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.ListConfigurations",
      };
      body = JSON.stringify(serializeAws_json1_1ListConfigurationsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1ListServerNeighborsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.ListServerNeighbors",
      };
      body = JSON.stringify(serializeAws_json1_1ListServerNeighborsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartContinuousExportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.StartContinuousExport",
      };
      body = JSON.stringify(serializeAws_json1_1StartContinuousExportRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartDataCollectionByAgentIdsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds",
      };
      body = JSON.stringify(serializeAws_json1_1StartDataCollectionByAgentIdsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartExportTaskCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.StartExportTask",
      };
      body = JSON.stringify(serializeAws_json1_1StartExportTaskRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StartImportTaskCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.StartImportTask",
      };
      body = JSON.stringify(serializeAws_json1_1StartImportTaskRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StopContinuousExportCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.StopContinuousExport",
      };
      body = JSON.stringify(serializeAws_json1_1StopContinuousExportRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1StopDataCollectionByAgentIdsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds",
      };
      body = JSON.stringify(serializeAws_json1_1StopDataCollectionByAgentIdsRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var serializeAws_json1_1UpdateApplicationCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
      headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSPoseidonService_V2015_11_01.UpdateApplication",
      };
      body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
      return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
  });
};
export var deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1AssociateConfigurationItemsToApplicationCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchDeleteImportDataCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1BatchDeleteImportDataCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1BatchDeleteImportDataResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1BatchDeleteImportDataCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateApplicationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateApplicationCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1CreateTagsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1CreateTagsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1CreateTagsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteApplicationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteApplicationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteApplicationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteApplicationsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DeleteTagsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DeleteTagsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DeleteTagsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeAgentsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeAgentsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeAgentsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeAgentsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeConfigurationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeConfigurationsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeContinuousExportsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeContinuousExportsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeContinuousExportsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeContinuousExportsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 12];
            case "ServerInternalErrorException":
              return [3 /*break*/, 14];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeExportConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeExportConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeExportConfigurationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeExportConfigurationsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeExportTasksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeExportTasksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeExportTasksCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeImportTasksCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeImportTasksCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeImportTasksResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeImportTasksCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTagsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1DescribeTagsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DescribeTagsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DescribeTagsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [
              2 /*return*/,
              deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError(output, context),
            ];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ExportConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ExportConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ExportConfigurationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ExportConfigurationsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDiscoverySummaryCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1GetDiscoverySummaryCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1GetDiscoverySummaryResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1GetDiscoverySummaryCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListConfigurationsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListConfigurationsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListConfigurationsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListConfigurationsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListServerNeighborsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1ListServerNeighborsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1ListServerNeighborsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1ListServerNeighborsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartContinuousExportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartContinuousExportCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartContinuousExportResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartContinuousExportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "ConflictErrorException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#ConflictErrorException":
              return [3 /*break*/, 4];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 6];
            case "InvalidParameterException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 8];
            case "InvalidParameterValueException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 10];
            case "OperationNotPermittedException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
              return [3 /*break*/, 12];
            case "ResourceInUseException":
              return [3 /*break*/, 14];
            case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
              return [3 /*break*/, 14];
            case "ServerInternalErrorException":
              return [3 /*break*/, 16];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ConflictErrorExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StartDataCollectionByAgentIdsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartDataCollectionByAgentIdsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartDataCollectionByAgentIdsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartExportTaskCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartExportTaskCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartExportTaskResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartExportTaskCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartImportTaskCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StartImportTaskCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StartImportTaskResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StartImportTaskCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ResourceInUseException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
              return [3 /*break*/, 10];
            case "ServerInternalErrorException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 12];
          }
          return [3 /*break*/, 14];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_k.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 15];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopContinuousExportCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StopContinuousExportCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StopContinuousExportResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StopContinuousExportCommandError = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [__assign({}, output)];
          _l = {};
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          parsedOutput = __assign.apply(void 0, _a.concat([((_l.body = _m.sent()), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;
          switch (_b) {
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#OperationNotPermittedException":
              return [3 /*break*/, 10];
            case "ResourceInUseException":
              return [3 /*break*/, 12];
            case "com.amazonaws.applicationdiscoveryservice#ResourceInUseException":
              return [3 /*break*/, 12];
            case "ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "com.amazonaws.applicationdiscoveryservice#ResourceNotFoundException":
              return [3 /*break*/, 14];
            case "ServerInternalErrorException":
              return [3 /*break*/, 16];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 16];
          }
          return [3 /*break*/, 18];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 15:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _j.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 16:
          _k = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
        case 17:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _k.concat([_m.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 19];
        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = __assign(__assign({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output),
          });
          _m.label = 19;
        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};
export var deserializeAws_json1_1StopDataCollectionByAgentIdsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1StopDataCollectionByAgentIdsResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1StopDataCollectionByAgentIdsCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateApplicationCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_json1_1UpdateApplicationCommandError(output, context)];
          }
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          contents = {};
          contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
          response = __assign({ $metadata: deserializeMetadata(output) }, contents);
          return [2 /*return*/, Promise.resolve(response)];
      }
    });
  });
};
var deserializeAws_json1_1UpdateApplicationCommandError = function (output, context) {
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
            case "AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "com.amazonaws.applicationdiscoveryservice#AuthorizationErrorException":
              return [3 /*break*/, 2];
            case "HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "com.amazonaws.applicationdiscoveryservice#HomeRegionNotSetException":
              return [3 /*break*/, 4];
            case "InvalidParameterException":
              return [3 /*break*/, 6];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterException":
              return [3 /*break*/, 6];
            case "InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "com.amazonaws.applicationdiscoveryservice#InvalidParameterValueException":
              return [3 /*break*/, 8];
            case "ServerInternalErrorException":
              return [3 /*break*/, 10];
            case "com.amazonaws.applicationdiscoveryservice#ServerInternalErrorException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_json1_1AuthorizationErrorExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_json1_1HomeRegionNotSetExceptionResponse(parsedOutput, context)];
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
          return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_json1_1ServerInternalErrorExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AuthorizationErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1AuthorizationErrorException(body, context);
      contents = __assign(
        { name: "AuthorizationErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1ConflictErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ConflictErrorException(body, context);
      contents = __assign(
        { name: "ConflictErrorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1HomeRegionNotSetExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1HomeRegionNotSetException(body, context);
      contents = __assign(
        { name: "HomeRegionNotSetException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1InvalidParameterValueExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
      contents = __assign(
        { name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_json1_1OperationNotPermittedExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
      contents = __assign(
        { name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) },
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
var deserializeAws_json1_1ServerInternalErrorExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
      body = parsedOutput.body;
      deserialized = deserializeAws_json1_1ServerInternalErrorException(body, context);
      contents = __assign(
        { name: "ServerInternalErrorException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) },
        deserialized
      );
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_json1_1AgentIds = function (input, context) {
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
var serializeAws_json1_1ApplicationIdsList = function (input, context) {
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
var serializeAws_json1_1AssociateConfigurationItemsToApplicationRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.applicationConfigurationId !== undefined &&
        input.applicationConfigurationId !== null && { applicationConfigurationId: input.applicationConfigurationId }
    ),
    input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }
  );
};
var serializeAws_json1_1BatchDeleteImportDataRequest = function (input, context) {
  return __assign(
    {},
    input.importTaskIds !== undefined &&
      input.importTaskIds !== null && {
        importTaskIds: serializeAws_json1_1ToDeleteIdentifierList(input.importTaskIds, context),
      }
  );
};
var serializeAws_json1_1ConfigurationIdList = function (input, context) {
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
var serializeAws_json1_1ContinuousExportIds = function (input, context) {
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
var serializeAws_json1_1CreateApplicationRequest = function (input, context) {
  return __assign(
    __assign({}, input.description !== undefined && input.description !== null && { description: input.description }),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_json1_1CreateTagsRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.configurationIds !== undefined &&
        input.configurationIds !== null && {
          configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
        }
    ),
    input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagSet(input.tags, context) }
  );
};
var serializeAws_json1_1DeleteApplicationsRequest = function (input, context) {
  return __assign(
    {},
    input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ApplicationIdsList(input.configurationIds, context),
      }
  );
};
var serializeAws_json1_1DeleteTagsRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.configurationIds !== undefined &&
        input.configurationIds !== null && {
          configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
        }
    ),
    input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagSet(input.tags, context) }
  );
};
var serializeAws_json1_1DescribeAgentsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.agentIds !== undefined &&
            input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }
        ),
        input.filters !== undefined &&
          input.filters !== null && { filters: serializeAws_json1_1Filters(input.filters, context) }
      ),
      input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
    ),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1DescribeConfigurationsRequest = function (input, context) {
  return __assign(
    {},
    input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }
  );
};
var serializeAws_json1_1DescribeContinuousExportsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.exportIds !== undefined &&
          input.exportIds !== null && { exportIds: serializeAws_json1_1ContinuousExportIds(input.exportIds, context) }
      ),
      input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
    ),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1DescribeExportConfigurationsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.exportIds !== undefined &&
          input.exportIds !== null && { exportIds: serializeAws_json1_1ExportIds(input.exportIds, context) }
      ),
      input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
    ),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1DescribeExportTasksRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.exportIds !== undefined &&
            input.exportIds !== null && { exportIds: serializeAws_json1_1ExportIds(input.exportIds, context) }
        ),
        input.filters !== undefined &&
          input.filters !== null && { filters: serializeAws_json1_1ExportFilters(input.filters, context) }
      ),
      input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
    ),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1DescribeImportTasksFilterList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ImportTaskFilter(entry, context);
    });
};
var serializeAws_json1_1DescribeImportTasksRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.filters !== undefined &&
          input.filters !== null && {
            filters: serializeAws_json1_1DescribeImportTasksFilterList(input.filters, context),
          }
      ),
      input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
    ),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1DescribeTagsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.filters !== undefined &&
          input.filters !== null && { filters: serializeAws_json1_1TagFilters(input.filters, context) }
      ),
      input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
    ),
    input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
  );
};
var serializeAws_json1_1DisassociateConfigurationItemsFromApplicationRequest = function (input, context) {
  return __assign(
    __assign(
      {},
      input.applicationConfigurationId !== undefined &&
        input.applicationConfigurationId !== null && { applicationConfigurationId: input.applicationConfigurationId }
    ),
    input.configurationIds !== undefined &&
      input.configurationIds !== null && {
        configurationIds: serializeAws_json1_1ConfigurationIdList(input.configurationIds, context),
      }
  );
};
var serializeAws_json1_1ExportDataFormats = function (input, context) {
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
var serializeAws_json1_1ExportFilter = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.condition !== undefined && input.condition !== null && { condition: input.condition }),
      input.name !== undefined && input.name !== null && { name: input.name }
    ),
    input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1FilterValues(input.values, context) }
  );
};
var serializeAws_json1_1ExportFilters = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1ExportFilter(entry, context);
    });
};
var serializeAws_json1_1ExportIds = function (input, context) {
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
var serializeAws_json1_1Filter = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.condition !== undefined && input.condition !== null && { condition: input.condition }),
      input.name !== undefined && input.name !== null && { name: input.name }
    ),
    input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1FilterValues(input.values, context) }
  );
};
var serializeAws_json1_1Filters = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};
var serializeAws_json1_1FilterValues = function (input, context) {
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
var serializeAws_json1_1GetDiscoverySummaryRequest = function (input, context) {
  return {};
};
var serializeAws_json1_1ImportTaskFilter = function (input, context) {
  return __assign(
    __assign({}, input.name !== undefined && input.name !== null && { name: input.name }),
    input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1ImportTaskFilterValueList(input.values, context) }
  );
};
var serializeAws_json1_1ImportTaskFilterValueList = function (input, context) {
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
var serializeAws_json1_1ListConfigurationsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.configurationType !== undefined &&
              input.configurationType !== null && { configurationType: input.configurationType }
          ),
          input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_json1_1Filters(input.filters, context) }
        ),
        input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
      ),
      input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
    ),
    input.orderBy !== undefined &&
      input.orderBy !== null && { orderBy: serializeAws_json1_1OrderByList(input.orderBy, context) }
  );
};
var serializeAws_json1_1ListServerNeighborsRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.configurationId !== undefined &&
              input.configurationId !== null && { configurationId: input.configurationId }
          ),
          input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
        ),
        input.neighborConfigurationIds !== undefined &&
          input.neighborConfigurationIds !== null && {
            neighborConfigurationIds: serializeAws_json1_1ConfigurationIdList(input.neighborConfigurationIds, context),
          }
      ),
      input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
    ),
    input.portInformationNeeded !== undefined &&
      input.portInformationNeeded !== null && { portInformationNeeded: input.portInformationNeeded }
  );
};
var serializeAws_json1_1OrderByElement = function (input, context) {
  return __assign(
    __assign({}, input.fieldName !== undefined && input.fieldName !== null && { fieldName: input.fieldName }),
    input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }
  );
};
var serializeAws_json1_1OrderByList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_json1_1OrderByElement(entry, context);
    });
};
var serializeAws_json1_1StartContinuousExportRequest = function (input, context) {
  return {};
};
var serializeAws_json1_1StartDataCollectionByAgentIdsRequest = function (input, context) {
  return __assign(
    {},
    input.agentIds !== undefined &&
      input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }
  );
};
var serializeAws_json1_1StartExportTaskRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }
        ),
        input.exportDataFormat !== undefined &&
          input.exportDataFormat !== null && {
            exportDataFormat: serializeAws_json1_1ExportDataFormats(input.exportDataFormat, context),
          }
      ),
      input.filters !== undefined &&
        input.filters !== null && { filters: serializeAws_json1_1ExportFilters(input.filters, context) }
    ),
    input.startTime !== undefined &&
      input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }
  );
};
var serializeAws_json1_1StartImportTaskRequest = function (input, context) {
  var _a;
  return __assign(
    __assign(
      {
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken(),
      },
      input.importUrl !== undefined && input.importUrl !== null && { importUrl: input.importUrl }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var serializeAws_json1_1StopContinuousExportRequest = function (input, context) {
  return __assign({}, input.exportId !== undefined && input.exportId !== null && { exportId: input.exportId });
};
var serializeAws_json1_1StopDataCollectionByAgentIdsRequest = function (input, context) {
  return __assign(
    {},
    input.agentIds !== undefined &&
      input.agentIds !== null && { agentIds: serializeAws_json1_1AgentIds(input.agentIds, context) }
  );
};
var serializeAws_json1_1Tag = function (input, context) {
  return __assign(
    __assign({}, input.key !== undefined && input.key !== null && { key: input.key }),
    input.value !== undefined && input.value !== null && { value: input.value }
  );
};
var serializeAws_json1_1TagFilter = function (input, context) {
  return __assign(
    __assign({}, input.name !== undefined && input.name !== null && { name: input.name }),
    input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1FilterValues(input.values, context) }
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
var serializeAws_json1_1TagSet = function (input, context) {
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
var serializeAws_json1_1ToDeleteIdentifierList = function (input, context) {
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
var serializeAws_json1_1UpdateApplicationRequest = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.configurationId !== undefined &&
          input.configurationId !== null && { configurationId: input.configurationId }
      ),
      input.description !== undefined && input.description !== null && { description: input.description }
    ),
    input.name !== undefined && input.name !== null && { name: input.name }
  );
};
var deserializeAws_json1_1AgentConfigurationStatus = function (output, context) {
  return {
    agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    operationSucceeded:
      output.operationSucceeded !== undefined && output.operationSucceeded !== null
        ? output.operationSucceeded
        : undefined,
  };
};
var deserializeAws_json1_1AgentConfigurationStatusList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AgentConfigurationStatus(entry, context);
    });
};
var deserializeAws_json1_1AgentInfo = function (output, context) {
  return {
    agentId: output.agentId !== undefined && output.agentId !== null ? output.agentId : undefined,
    agentNetworkInfoList:
      output.agentNetworkInfoList !== undefined && output.agentNetworkInfoList !== null
        ? deserializeAws_json1_1AgentNetworkInfoList(output.agentNetworkInfoList, context)
        : undefined,
    agentType: output.agentType !== undefined && output.agentType !== null ? output.agentType : undefined,
    collectionStatus:
      output.collectionStatus !== undefined && output.collectionStatus !== null ? output.collectionStatus : undefined,
    connectorId: output.connectorId !== undefined && output.connectorId !== null ? output.connectorId : undefined,
    health: output.health !== undefined && output.health !== null ? output.health : undefined,
    hostName: output.hostName !== undefined && output.hostName !== null ? output.hostName : undefined,
    lastHealthPingTime:
      output.lastHealthPingTime !== undefined && output.lastHealthPingTime !== null
        ? output.lastHealthPingTime
        : undefined,
    registeredTime:
      output.registeredTime !== undefined && output.registeredTime !== null ? output.registeredTime : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  };
};
var deserializeAws_json1_1AgentNetworkInfo = function (output, context) {
  return {
    ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    macAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
  };
};
var deserializeAws_json1_1AgentNetworkInfoList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AgentNetworkInfo(entry, context);
    });
};
var deserializeAws_json1_1AgentsInfo = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1AgentInfo(entry, context);
    });
};
var deserializeAws_json1_1AssociateConfigurationItemsToApplicationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1AuthorizationErrorException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1BatchDeleteImportDataError = function (output, context) {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorDescription:
      output.errorDescription !== undefined && output.errorDescription !== null ? output.errorDescription : undefined,
    importTaskId: output.importTaskId !== undefined && output.importTaskId !== null ? output.importTaskId : undefined,
  };
};
var deserializeAws_json1_1BatchDeleteImportDataErrorList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1BatchDeleteImportDataError(entry, context);
    });
};
var deserializeAws_json1_1BatchDeleteImportDataResponse = function (output, context) {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1BatchDeleteImportDataErrorList(output.errors, context)
        : undefined,
  };
};
var deserializeAws_json1_1Configuration = function (output, context) {
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
var deserializeAws_json1_1Configurations = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1Configuration(entry, context);
    });
};
var deserializeAws_json1_1ConfigurationTag = function (output, context) {
  return {
    configurationId:
      output.configurationId !== undefined && output.configurationId !== null ? output.configurationId : undefined,
    configurationType:
      output.configurationType !== undefined && output.configurationType !== null
        ? output.configurationType
        : undefined,
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    timeOfCreation:
      output.timeOfCreation !== undefined && output.timeOfCreation !== null
        ? new Date(Math.round(output.timeOfCreation * 1000))
        : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  };
};
var deserializeAws_json1_1ConfigurationTagSet = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ConfigurationTag(entry, context);
    });
};
var deserializeAws_json1_1ConflictErrorException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ContinuousExportDescription = function (output, context) {
  return {
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    schemaStorageConfig:
      output.schemaStorageConfig !== undefined && output.schemaStorageConfig !== null
        ? deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    statusDetail: output.statusDetail !== undefined && output.statusDetail !== null ? output.statusDetail : undefined,
    stopTime:
      output.stopTime !== undefined && output.stopTime !== null
        ? new Date(Math.round(output.stopTime * 1000))
        : undefined,
  };
};
var deserializeAws_json1_1ContinuousExportDescriptions = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ContinuousExportDescription(entry, context);
    });
};
var deserializeAws_json1_1CreateApplicationResponse = function (output, context) {
  return {
    configurationId:
      output.configurationId !== undefined && output.configurationId !== null ? output.configurationId : undefined,
  };
};
var deserializeAws_json1_1CreateTagsResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1CustomerAgentInfo = function (output, context) {
  return {
    activeAgents: output.activeAgents !== undefined && output.activeAgents !== null ? output.activeAgents : undefined,
    blackListedAgents:
      output.blackListedAgents !== undefined && output.blackListedAgents !== null
        ? output.blackListedAgents
        : undefined,
    healthyAgents:
      output.healthyAgents !== undefined && output.healthyAgents !== null ? output.healthyAgents : undefined,
    shutdownAgents:
      output.shutdownAgents !== undefined && output.shutdownAgents !== null ? output.shutdownAgents : undefined,
    totalAgents: output.totalAgents !== undefined && output.totalAgents !== null ? output.totalAgents : undefined,
    unhealthyAgents:
      output.unhealthyAgents !== undefined && output.unhealthyAgents !== null ? output.unhealthyAgents : undefined,
    unknownAgents:
      output.unknownAgents !== undefined && output.unknownAgents !== null ? output.unknownAgents : undefined,
  };
};
var deserializeAws_json1_1CustomerConnectorInfo = function (output, context) {
  return {
    activeConnectors:
      output.activeConnectors !== undefined && output.activeConnectors !== null ? output.activeConnectors : undefined,
    blackListedConnectors:
      output.blackListedConnectors !== undefined && output.blackListedConnectors !== null
        ? output.blackListedConnectors
        : undefined,
    healthyConnectors:
      output.healthyConnectors !== undefined && output.healthyConnectors !== null
        ? output.healthyConnectors
        : undefined,
    shutdownConnectors:
      output.shutdownConnectors !== undefined && output.shutdownConnectors !== null
        ? output.shutdownConnectors
        : undefined,
    totalConnectors:
      output.totalConnectors !== undefined && output.totalConnectors !== null ? output.totalConnectors : undefined,
    unhealthyConnectors:
      output.unhealthyConnectors !== undefined && output.unhealthyConnectors !== null
        ? output.unhealthyConnectors
        : undefined,
    unknownConnectors:
      output.unknownConnectors !== undefined && output.unknownConnectors !== null
        ? output.unknownConnectors
        : undefined,
  };
};
var deserializeAws_json1_1DeleteApplicationsResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DeleteTagsResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1DescribeAgentsResponse = function (output, context) {
  return {
    agentsInfo:
      output.agentsInfo !== undefined && output.agentsInfo !== null
        ? deserializeAws_json1_1AgentsInfo(output.agentsInfo, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeConfigurationsAttribute = function (output, context) {
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
var deserializeAws_json1_1DescribeConfigurationsAttributes = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1DescribeConfigurationsAttribute(entry, context);
    });
};
var deserializeAws_json1_1DescribeConfigurationsResponse = function (output, context) {
  return {
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_json1_1DescribeConfigurationsAttributes(output.configurations, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeContinuousExportsResponse = function (output, context) {
  return {
    descriptions:
      output.descriptions !== undefined && output.descriptions !== null
        ? deserializeAws_json1_1ContinuousExportDescriptions(output.descriptions, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeExportConfigurationsResponse = function (output, context) {
  return {
    exportsInfo:
      output.exportsInfo !== undefined && output.exportsInfo !== null
        ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeExportTasksResponse = function (output, context) {
  return {
    exportsInfo:
      output.exportsInfo !== undefined && output.exportsInfo !== null
        ? deserializeAws_json1_1ExportsInfo(output.exportsInfo, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1DescribeImportTasksResponse = function (output, context) {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    tasks:
      output.tasks !== undefined && output.tasks !== null
        ? deserializeAws_json1_1ImportTaskList(output.tasks, context)
        : undefined,
  };
};
var deserializeAws_json1_1DescribeTagsResponse = function (output, context) {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1ConfigurationTagSet(output.tags, context)
        : undefined,
  };
};
var deserializeAws_json1_1DisassociateConfigurationItemsFromApplicationResponse = function (output, context) {
  return {};
};
var deserializeAws_json1_1ExportConfigurationsResponse = function (output, context) {
  return {
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
  };
};
var deserializeAws_json1_1ExportInfo = function (output, context) {
  return {
    configurationsDownloadUrl:
      output.configurationsDownloadUrl !== undefined && output.configurationsDownloadUrl !== null
        ? output.configurationsDownloadUrl
        : undefined,
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
    exportRequestTime:
      output.exportRequestTime !== undefined && output.exportRequestTime !== null
        ? new Date(Math.round(output.exportRequestTime * 1000))
        : undefined,
    exportStatus: output.exportStatus !== undefined && output.exportStatus !== null ? output.exportStatus : undefined,
    isTruncated: output.isTruncated !== undefined && output.isTruncated !== null ? output.isTruncated : undefined,
    requestedEndTime:
      output.requestedEndTime !== undefined && output.requestedEndTime !== null
        ? new Date(Math.round(output.requestedEndTime * 1000))
        : undefined,
    requestedStartTime:
      output.requestedStartTime !== undefined && output.requestedStartTime !== null
        ? new Date(Math.round(output.requestedStartTime * 1000))
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
  };
};
var deserializeAws_json1_1ExportsInfo = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ExportInfo(entry, context);
    });
};
var deserializeAws_json1_1GetDiscoverySummaryResponse = function (output, context) {
  return {
    agentSummary:
      output.agentSummary !== undefined && output.agentSummary !== null
        ? deserializeAws_json1_1CustomerAgentInfo(output.agentSummary, context)
        : undefined,
    applications: output.applications !== undefined && output.applications !== null ? output.applications : undefined,
    connectorSummary:
      output.connectorSummary !== undefined && output.connectorSummary !== null
        ? deserializeAws_json1_1CustomerConnectorInfo(output.connectorSummary, context)
        : undefined,
    servers: output.servers !== undefined && output.servers !== null ? output.servers : undefined,
    serversMappedToApplications:
      output.serversMappedToApplications !== undefined && output.serversMappedToApplications !== null
        ? output.serversMappedToApplications
        : undefined,
    serversMappedtoTags:
      output.serversMappedtoTags !== undefined && output.serversMappedtoTags !== null
        ? output.serversMappedtoTags
        : undefined,
  };
};
var deserializeAws_json1_1HomeRegionNotSetException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ImportTask = function (output, context) {
  return {
    applicationImportFailure:
      output.applicationImportFailure !== undefined && output.applicationImportFailure !== null
        ? output.applicationImportFailure
        : undefined,
    applicationImportSuccess:
      output.applicationImportSuccess !== undefined && output.applicationImportSuccess !== null
        ? output.applicationImportSuccess
        : undefined,
    clientRequestToken:
      output.clientRequestToken !== undefined && output.clientRequestToken !== null
        ? output.clientRequestToken
        : undefined,
    errorsAndFailedEntriesZip:
      output.errorsAndFailedEntriesZip !== undefined && output.errorsAndFailedEntriesZip !== null
        ? output.errorsAndFailedEntriesZip
        : undefined,
    importCompletionTime:
      output.importCompletionTime !== undefined && output.importCompletionTime !== null
        ? new Date(Math.round(output.importCompletionTime * 1000))
        : undefined,
    importDeletedTime:
      output.importDeletedTime !== undefined && output.importDeletedTime !== null
        ? new Date(Math.round(output.importDeletedTime * 1000))
        : undefined,
    importRequestTime:
      output.importRequestTime !== undefined && output.importRequestTime !== null
        ? new Date(Math.round(output.importRequestTime * 1000))
        : undefined,
    importTaskId: output.importTaskId !== undefined && output.importTaskId !== null ? output.importTaskId : undefined,
    importUrl: output.importUrl !== undefined && output.importUrl !== null ? output.importUrl : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    serverImportFailure:
      output.serverImportFailure !== undefined && output.serverImportFailure !== null
        ? output.serverImportFailure
        : undefined,
    serverImportSuccess:
      output.serverImportSuccess !== undefined && output.serverImportSuccess !== null
        ? output.serverImportSuccess
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  };
};
var deserializeAws_json1_1ImportTaskList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1ImportTask(entry, context);
    });
};
var deserializeAws_json1_1InvalidParameterException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1InvalidParameterValueException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1ListConfigurationsResponse = function (output, context) {
  return {
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_json1_1Configurations(output.configurations, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1ListServerNeighborsResponse = function (output, context) {
  return {
    knownDependencyCount:
      output.knownDependencyCount !== undefined && output.knownDependencyCount !== null
        ? output.knownDependencyCount
        : undefined,
    neighbors:
      output.neighbors !== undefined && output.neighbors !== null
        ? deserializeAws_json1_1NeighborDetailsList(output.neighbors, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  };
};
var deserializeAws_json1_1NeighborConnectionDetail = function (output, context) {
  return {
    connectionsCount:
      output.connectionsCount !== undefined && output.connectionsCount !== null ? output.connectionsCount : undefined,
    destinationPort:
      output.destinationPort !== undefined && output.destinationPort !== null ? output.destinationPort : undefined,
    destinationServerId:
      output.destinationServerId !== undefined && output.destinationServerId !== null
        ? output.destinationServerId
        : undefined,
    sourceServerId:
      output.sourceServerId !== undefined && output.sourceServerId !== null ? output.sourceServerId : undefined,
    transportProtocol:
      output.transportProtocol !== undefined && output.transportProtocol !== null
        ? output.transportProtocol
        : undefined,
  };
};
var deserializeAws_json1_1NeighborDetailsList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_json1_1NeighborConnectionDetail(entry, context);
    });
};
var deserializeAws_json1_1OperationNotPermittedException = function (output, context) {
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
var deserializeAws_json1_1SchemaStorageConfig = function (output, context) {
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
var deserializeAws_json1_1ServerInternalErrorException = function (output, context) {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  };
};
var deserializeAws_json1_1StartContinuousExportResponse = function (output, context) {
  return {
    dataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    schemaStorageConfig:
      output.schemaStorageConfig !== undefined && output.schemaStorageConfig !== null
        ? deserializeAws_json1_1SchemaStorageConfig(output.schemaStorageConfig, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
  };
};
var deserializeAws_json1_1StartDataCollectionByAgentIdsResponse = function (output, context) {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus !== undefined && output.agentsConfigurationStatus !== null
        ? deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  };
};
var deserializeAws_json1_1StartExportTaskResponse = function (output, context) {
  return {
    exportId: output.exportId !== undefined && output.exportId !== null ? output.exportId : undefined,
  };
};
var deserializeAws_json1_1StartImportTaskResponse = function (output, context) {
  return {
    task:
      output.task !== undefined && output.task !== null
        ? deserializeAws_json1_1ImportTask(output.task, context)
        : undefined,
  };
};
var deserializeAws_json1_1StopContinuousExportResponse = function (output, context) {
  return {
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    stopTime:
      output.stopTime !== undefined && output.stopTime !== null
        ? new Date(Math.round(output.stopTime * 1000))
        : undefined,
  };
};
var deserializeAws_json1_1StopDataCollectionByAgentIdsResponse = function (output, context) {
  return {
    agentsConfigurationStatus:
      output.agentsConfigurationStatus !== undefined && output.agentsConfigurationStatus !== null
        ? deserializeAws_json1_1AgentConfigurationStatusList(output.agentsConfigurationStatus, context)
        : undefined,
  };
};
var deserializeAws_json1_1UpdateApplicationResponse = function (output, context) {
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
