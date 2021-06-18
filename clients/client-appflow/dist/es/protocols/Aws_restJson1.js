import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateConnectorProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/create-connector-profile";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      {},
                      input.connectionMode !== undefined &&
                        input.connectionMode !== null && { connectionMode: input.connectionMode }
                    ),
                    input.connectorProfileConfig !== undefined &&
                      input.connectorProfileConfig !== null && {
                        connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(
                          input.connectorProfileConfig,
                          context
                        ),
                      }
                  ),
                  input.connectorProfileName !== undefined &&
                    input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
                ),
                input.connectorType !== undefined &&
                  input.connectorType !== null && { connectorType: input.connectorType }
              ),
              input.kmsArn !== undefined && input.kmsArn !== null && { kmsArn: input.kmsArn }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1CreateFlowCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/create-flow";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        __assign(
                          __assign(
                            {},
                            input.description !== undefined &&
                              input.description !== null && { description: input.description }
                          ),
                          input.destinationFlowConfigList !== undefined &&
                            input.destinationFlowConfigList !== null && {
                              destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
                                input.destinationFlowConfigList,
                                context
                              ),
                            }
                        ),
                        input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }
                      ),
                      input.kmsArn !== undefined && input.kmsArn !== null && { kmsArn: input.kmsArn }
                    ),
                    input.sourceFlowConfig !== undefined &&
                      input.sourceFlowConfig !== null && {
                        sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
                      }
                  ),
                  input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
                ),
                input.tasks !== undefined &&
                  input.tasks !== null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }
              ),
              input.triggerConfig !== undefined &&
                input.triggerConfig !== null && {
                  triggerConfig: serializeAws_restJson1TriggerConfig(input.triggerConfig, context),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteConnectorProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/delete-connector-profile";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.connectorProfileName !== undefined &&
                  input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
              ),
              input.forceDelete !== undefined && input.forceDelete !== null && { forceDelete: input.forceDelete }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DeleteFlowCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/delete-flow";
          body = JSON.stringify(
            __assign(
              __assign({}, input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
              input.forceDelete !== undefined && input.forceDelete !== null && { forceDelete: input.forceDelete }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeConnectorEntityCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/describe-connector-entity";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.connectorEntityName !== undefined &&
                    input.connectorEntityName !== null && { connectorEntityName: input.connectorEntityName }
                ),
                input.connectorProfileName !== undefined &&
                  input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
              ),
              input.connectorType !== undefined &&
                input.connectorType !== null && { connectorType: input.connectorType }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeConnectorProfilesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/describe-connector-profiles";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    {},
                    input.connectorProfileNames !== undefined &&
                      input.connectorProfileNames !== null && {
                        connectorProfileNames: serializeAws_restJson1ConnectorProfileNameList(
                          input.connectorProfileNames,
                          context
                        ),
                      }
                  ),
                  input.connectorType !== undefined &&
                    input.connectorType !== null && { connectorType: input.connectorType }
                ),
                input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeConnectorsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/describe-connectors";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.connectorTypes !== undefined &&
                  input.connectorTypes !== null && {
                    connectorTypes: serializeAws_restJson1ConnectorTypeList(input.connectorTypes, context),
                  }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeFlowCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/describe-flow";
          body = JSON.stringify(
            __assign({}, input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName })
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1DescribeFlowExecutionRecordsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/describe-flow-execution-records";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign({}, input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }),
                input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListConnectorEntitiesCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/list-connector-entities";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.connectorProfileName !== undefined &&
                    input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
                ),
                input.connectorType !== undefined &&
                  input.connectorType !== null && { connectorType: input.connectorType }
              ),
              input.entitiesPath !== undefined && input.entitiesPath !== null && { entitiesPath: input.entitiesPath }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListFlowsCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/list-flows";
          body = JSON.stringify(
            __assign(
              __assign(
                {},
                input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }
              ),
              input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "GET",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1StartFlowCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/start-flow";
          body = JSON.stringify(
            __assign({}, input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName })
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1StopFlowCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/stop-flow";
          body = JSON.stringify(
            __assign({}, input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName })
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1TagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          body = JSON.stringify(
            __assign(
              {},
              input.tags !== undefined &&
                input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UntagResourceCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/tags/{resourceArn}";
          if (input.resourceArn !== undefined) {
            labelValue = input.resourceArn;
            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: resourceArn.");
            }
            resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: resourceArn.");
          }
          query = __assign(
            {},
            input.tagKeys !== undefined && {
              tagKeys: (input.tagKeys || []).map(function (_entry) {
                return _entry;
              }),
            }
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "DELETE",
              headers: headers,
              path: resolvedPath,
              query: query,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateConnectorProfileCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/update-connector-profile";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  {},
                  input.connectionMode !== undefined &&
                    input.connectionMode !== null && { connectionMode: input.connectionMode }
                ),
                input.connectorProfileConfig !== undefined &&
                  input.connectorProfileConfig !== null && {
                    connectorProfileConfig: serializeAws_restJson1ConnectorProfileConfig(
                      input.connectorProfileConfig,
                      context
                    ),
                  }
              ),
              input.connectorProfileName !== undefined &&
                input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var serializeAws_restJson1UpdateFlowCommand = function (input, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json",
          };
          resolvedPath = "/update-flow";
          body = JSON.stringify(
            __assign(
              __assign(
                __assign(
                  __assign(
                    __assign(
                      __assign(
                        {},
                        input.description !== undefined &&
                          input.description !== null && { description: input.description }
                      ),
                      input.destinationFlowConfigList !== undefined &&
                        input.destinationFlowConfigList !== null && {
                          destinationFlowConfigList: serializeAws_restJson1DestinationFlowConfigList(
                            input.destinationFlowConfigList,
                            context
                          ),
                        }
                    ),
                    input.flowName !== undefined && input.flowName !== null && { flowName: input.flowName }
                  ),
                  input.sourceFlowConfig !== undefined &&
                    input.sourceFlowConfig !== null && {
                      sourceFlowConfig: serializeAws_restJson1SourceFlowConfig(input.sourceFlowConfig, context),
                    }
                ),
                input.tasks !== undefined &&
                  input.tasks !== null && { tasks: serializeAws_restJson1Tasks(input.tasks, context) }
              ),
              input.triggerConfig !== undefined &&
                input.triggerConfig !== null && {
                  triggerConfig: serializeAws_restJson1TriggerConfig(input.triggerConfig, context),
                }
            )
          );
          return [4 /*yield*/, context.endpoint()];
        case 1:
          (_a = _c.sent()),
            (hostname = _a.hostname),
            (_b = _a.protocol),
            (protocol = _b === void 0 ? "https" : _b),
            (port = _a.port);
          return [
            2 /*return*/,
            new __HttpRequest({
              protocol: protocol,
              hostname: hostname,
              port: port,
              method: "POST",
              headers: headers,
              path: resolvedPath,
              body: body,
            }),
          ];
      }
    });
  });
};
export var deserializeAws_restJson1CreateConnectorProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateConnectorProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            connectorProfileArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.connectorProfileArn !== undefined && data.connectorProfileArn !== null) {
            contents.connectorProfileArn = data.connectorProfileArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateConnectorProfileCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 6];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#ServiceQuotaExceededException":
              return [3 /*break*/, 8];
            case "ValidationException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFlowCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1CreateFlowCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            flowArn: undefined,
            flowStatus: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.flowArn !== undefined && data.flowArn !== null) {
            contents.flowArn = data.flowArn;
          }
          if (data.flowStatus !== undefined && data.flowStatus !== null) {
            contents.flowStatus = data.flowStatus;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1CreateFlowCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "ConnectorServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ConnectorServerException":
              return [3 /*break*/, 6];
            case "InternalServerException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appflow#ServiceQuotaExceededException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteConnectorProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteConnectorProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteConnectorProfileCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFlowCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DeleteFlowCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DeleteFlowCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeConnectorEntityCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeConnectorEntityCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            connectorEntityFields: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.connectorEntityFields !== undefined && data.connectorEntityFields !== null) {
            contents.connectorEntityFields = deserializeAws_restJson1ConnectorEntityFieldList(
              data.connectorEntityFields,
              context
            );
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeConnectorEntityCommandError = function (output, context) {
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
            case "ConnectorAuthenticationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConnectorAuthenticationException":
              return [3 /*break*/, 2];
            case "ConnectorServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ConnectorServerException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ValidationException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeConnectorProfilesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeConnectorProfilesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            connectorProfileDetails: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.connectorProfileDetails !== undefined && data.connectorProfileDetails !== null) {
            contents.connectorProfileDetails = deserializeAws_restJson1ConnectorProfileDetailList(
              data.connectorProfileDetails,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeConnectorProfilesCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ValidationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeConnectorsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeConnectorsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            connectorConfigurations: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.connectorConfigurations !== undefined && data.connectorConfigurations !== null) {
            contents.connectorConfigurations = deserializeAws_restJson1ConnectorConfigurationsMap(
              data.connectorConfigurations,
              context
            );
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeConnectorsCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ValidationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeFlowCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeFlowCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            createdAt: undefined,
            createdBy: undefined,
            description: undefined,
            destinationFlowConfigList: undefined,
            flowArn: undefined,
            flowName: undefined,
            flowStatus: undefined,
            flowStatusMessage: undefined,
            kmsArn: undefined,
            lastRunExecutionDetails: undefined,
            lastUpdatedAt: undefined,
            lastUpdatedBy: undefined,
            sourceFlowConfig: undefined,
            tags: undefined,
            tasks: undefined,
            triggerConfig: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.createdAt !== undefined && data.createdAt !== null) {
            contents.createdAt = new Date(Math.round(data.createdAt * 1000));
          }
          if (data.createdBy !== undefined && data.createdBy !== null) {
            contents.createdBy = data.createdBy;
          }
          if (data.description !== undefined && data.description !== null) {
            contents.description = data.description;
          }
          if (data.destinationFlowConfigList !== undefined && data.destinationFlowConfigList !== null) {
            contents.destinationFlowConfigList = deserializeAws_restJson1DestinationFlowConfigList(
              data.destinationFlowConfigList,
              context
            );
          }
          if (data.flowArn !== undefined && data.flowArn !== null) {
            contents.flowArn = data.flowArn;
          }
          if (data.flowName !== undefined && data.flowName !== null) {
            contents.flowName = data.flowName;
          }
          if (data.flowStatus !== undefined && data.flowStatus !== null) {
            contents.flowStatus = data.flowStatus;
          }
          if (data.flowStatusMessage !== undefined && data.flowStatusMessage !== null) {
            contents.flowStatusMessage = data.flowStatusMessage;
          }
          if (data.kmsArn !== undefined && data.kmsArn !== null) {
            contents.kmsArn = data.kmsArn;
          }
          if (data.lastRunExecutionDetails !== undefined && data.lastRunExecutionDetails !== null) {
            contents.lastRunExecutionDetails = deserializeAws_restJson1ExecutionDetails(
              data.lastRunExecutionDetails,
              context
            );
          }
          if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
            contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
          }
          if (data.lastUpdatedBy !== undefined && data.lastUpdatedBy !== null) {
            contents.lastUpdatedBy = data.lastUpdatedBy;
          }
          if (data.sourceFlowConfig !== undefined && data.sourceFlowConfig !== null) {
            contents.sourceFlowConfig = deserializeAws_restJson1SourceFlowConfig(data.sourceFlowConfig, context);
          }
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
          }
          if (data.tasks !== undefined && data.tasks !== null) {
            contents.tasks = deserializeAws_restJson1Tasks(data.tasks, context);
          }
          if (data.triggerConfig !== undefined && data.triggerConfig !== null) {
            contents.triggerConfig = deserializeAws_restJson1TriggerConfig(data.triggerConfig, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeFlowCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeFlowExecutionRecordsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            flowExecutions: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.flowExecutions !== undefined && data.flowExecutions !== null) {
            contents.flowExecutions = deserializeAws_restJson1FlowExecutionList(data.flowExecutions, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1DescribeFlowExecutionRecordsCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListConnectorEntitiesCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListConnectorEntitiesCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            connectorEntityMap: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.connectorEntityMap !== undefined && data.connectorEntityMap !== null) {
            contents.connectorEntityMap = deserializeAws_restJson1ConnectorEntityMap(data.connectorEntityMap, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListConnectorEntitiesCommandError = function (output, context) {
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
            case "ConnectorAuthenticationException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConnectorAuthenticationException":
              return [3 /*break*/, 2];
            case "ConnectorServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ConnectorServerException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ValidationException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFlowsCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListFlowsCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            flows: undefined,
            nextToken: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.flows !== undefined && data.flows !== null) {
            contents.flows = deserializeAws_restJson1FlowList(data.flows, context);
          }
          if (data.nextToken !== undefined && data.nextToken !== null) {
            contents.nextToken = data.nextToken;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListFlowsCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ValidationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 4];
          }
          return [3 /*break*/, 6];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_f.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 7];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            tags: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.tags !== undefined && data.tags !== null) {
            contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartFlowCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StartFlowCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            executionId: undefined,
            flowArn: undefined,
            flowStatus: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.executionId !== undefined && data.executionId !== null) {
            contents.executionId = data.executionId;
          }
          if (data.flowArn !== undefined && data.flowArn !== null) {
            contents.flowArn = data.flowArn;
          }
          if (data.flowStatus !== undefined && data.flowStatus !== null) {
            contents.flowStatus = data.flowStatus;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StartFlowCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#ServiceQuotaExceededException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopFlowCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1StopFlowCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            flowArn: undefined,
            flowStatus: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.flowArn !== undefined && data.flowArn !== null) {
            contents.flowArn = data.flowArn;
          }
          if (data.flowStatus !== undefined && data.flowStatus !== null) {
            contents.flowStatus = data.flowStatus;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1StopFlowCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "InternalServerException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 4];
            case "ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 6];
            case "UnsupportedOperationException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#UnsupportedOperationException":
              return [3 /*break*/, 8];
          }
          return [3 /*break*/, 10];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_h.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 11];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1TagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1TagResourceCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
          };
          return [4 /*yield*/, collectBody(output.body, context)];
        case 1:
          _a.sent();
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) {
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
            case "InternalServerException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 2];
            case "ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 4];
            case "ValidationException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 6];
          }
          return [3 /*break*/, 8];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_g.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 9];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateConnectorProfileCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateConnectorProfileCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            connectorProfileArn: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.connectorProfileArn !== undefined && data.connectorProfileArn !== null) {
            contents.connectorProfileArn = data.connectorProfileArn;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateConnectorProfileCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "InternalServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 6];
            case "ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 8];
            case "ValidationException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 10];
          }
          return [3 /*break*/, 12];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_j.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 13];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFlowCommand = function (output, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1UpdateFlowCommandError(output, context)];
          }
          contents = {
            $metadata: deserializeMetadata(output),
            flowStatus: undefined,
          };
          return [4 /*yield*/, parseBody(output.body, context)];
        case 1:
          data = _a.sent();
          if (data.flowStatus !== undefined && data.flowStatus !== null) {
            contents.flowStatus = data.flowStatus;
          }
          return [2 /*return*/, Promise.resolve(contents)];
      }
    });
  });
};
var deserializeAws_restJson1UpdateFlowCommandError = function (output, context) {
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
            case "ConflictException":
              return [3 /*break*/, 2];
            case "com.amazonaws.appflow#ConflictException":
              return [3 /*break*/, 2];
            case "ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "com.amazonaws.appflow#ConnectorAuthenticationException":
              return [3 /*break*/, 4];
            case "ConnectorServerException":
              return [3 /*break*/, 6];
            case "com.amazonaws.appflow#ConnectorServerException":
              return [3 /*break*/, 6];
            case "InternalServerException":
              return [3 /*break*/, 8];
            case "com.amazonaws.appflow#InternalServerException":
              return [3 /*break*/, 8];
            case "ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "com.amazonaws.appflow#ResourceNotFoundException":
              return [3 /*break*/, 10];
            case "ServiceQuotaExceededException":
              return [3 /*break*/, 12];
            case "com.amazonaws.appflow#ServiceQuotaExceededException":
              return [3 /*break*/, 12];
            case "ValidationException":
              return [3 /*break*/, 14];
            case "com.amazonaws.appflow#ValidationException":
              return [3 /*break*/, 14];
          }
          return [3 /*break*/, 16];
        case 2:
          _c = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
        case 3:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _c.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 4:
          _d = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorAuthenticationExceptionResponse(parsedOutput, context)];
        case 5:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _d.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 6:
          _e = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ConnectorServerExceptionResponse(parsedOutput, context)];
        case 7:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _e.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 8:
          _f = [{}];
          return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
        case 9:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _f.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 10:
          _g = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
        case 11:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _g.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 12:
          _h = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
        case 13:
          response = __assign.apply(void 0, [
            __assign.apply(void 0, _h.concat([_l.sent()])),
            { name: errorCode, $metadata: deserializeMetadata(output) },
          ]);
          return [3 /*break*/, 17];
        case 14:
          _j = [{}];
          return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ConnectorAuthenticationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ConnectorAuthenticationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ConnectorServerExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ConnectorServerException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1UnsupportedOperationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) {
  return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
      contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
      };
      data = parsedOutput.body;
      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }
      return [2 /*return*/, contents];
    });
  });
};
var serializeAws_restJson1AggregationConfig = function (input, context) {
  return __assign(
    {},
    input.aggregationType !== undefined && input.aggregationType !== null && { aggregationType: input.aggregationType }
  );
};
var serializeAws_restJson1AmplitudeConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign({}, input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
    input.secretKey !== undefined && input.secretKey !== null && { secretKey: input.secretKey }
  );
};
var serializeAws_restJson1AmplitudeConnectorProfileProperties = function (input, context) {
  return {};
};
var serializeAws_restJson1AmplitudeSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1ConnectorOAuthRequest = function (input, context) {
  return __assign(
    __assign({}, input.authCode !== undefined && input.authCode !== null && { authCode: input.authCode }),
    input.redirectUri !== undefined && input.redirectUri !== null && { redirectUri: input.redirectUri }
  );
};
var serializeAws_restJson1ConnectorOperator = function (input, context) {
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
                              input.Amplitude !== undefined &&
                                input.Amplitude !== null && { Amplitude: input.Amplitude }
                            ),
                            input.Datadog !== undefined && input.Datadog !== null && { Datadog: input.Datadog }
                          ),
                          input.Dynatrace !== undefined && input.Dynatrace !== null && { Dynatrace: input.Dynatrace }
                        ),
                        input.GoogleAnalytics !== undefined &&
                          input.GoogleAnalytics !== null && { GoogleAnalytics: input.GoogleAnalytics }
                      ),
                      input.InforNexus !== undefined && input.InforNexus !== null && { InforNexus: input.InforNexus }
                    ),
                    input.Marketo !== undefined && input.Marketo !== null && { Marketo: input.Marketo }
                  ),
                  input.S3 !== undefined && input.S3 !== null && { S3: input.S3 }
                ),
                input.Salesforce !== undefined && input.Salesforce !== null && { Salesforce: input.Salesforce }
              ),
              input.ServiceNow !== undefined && input.ServiceNow !== null && { ServiceNow: input.ServiceNow }
            ),
            input.Singular !== undefined && input.Singular !== null && { Singular: input.Singular }
          ),
          input.Slack !== undefined && input.Slack !== null && { Slack: input.Slack }
        ),
        input.Trendmicro !== undefined && input.Trendmicro !== null && { Trendmicro: input.Trendmicro }
      ),
      input.Veeva !== undefined && input.Veeva !== null && { Veeva: input.Veeva }
    ),
    input.Zendesk !== undefined && input.Zendesk !== null && { Zendesk: input.Zendesk }
  );
};
var serializeAws_restJson1ConnectorProfileConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.connectorProfileCredentials !== undefined &&
        input.connectorProfileCredentials !== null && {
          connectorProfileCredentials: serializeAws_restJson1ConnectorProfileCredentials(
            input.connectorProfileCredentials,
            context
          ),
        }
    ),
    input.connectorProfileProperties !== undefined &&
      input.connectorProfileProperties !== null && {
        connectorProfileProperties: serializeAws_restJson1ConnectorProfileProperties(
          input.connectorProfileProperties,
          context
        ),
      }
  );
};
var serializeAws_restJson1ConnectorProfileCredentials = function (input, context) {
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
                              __assign(
                                __assign(
                                  {},
                                  input.Amplitude !== undefined &&
                                    input.Amplitude !== null && {
                                      Amplitude: serializeAws_restJson1AmplitudeConnectorProfileCredentials(
                                        input.Amplitude,
                                        context
                                      ),
                                    }
                                ),
                                input.Datadog !== undefined &&
                                  input.Datadog !== null && {
                                    Datadog: serializeAws_restJson1DatadogConnectorProfileCredentials(
                                      input.Datadog,
                                      context
                                    ),
                                  }
                              ),
                              input.Dynatrace !== undefined &&
                                input.Dynatrace !== null && {
                                  Dynatrace: serializeAws_restJson1DynatraceConnectorProfileCredentials(
                                    input.Dynatrace,
                                    context
                                  ),
                                }
                            ),
                            input.GoogleAnalytics !== undefined &&
                              input.GoogleAnalytics !== null && {
                                GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials(
                                  input.GoogleAnalytics,
                                  context
                                ),
                              }
                          ),
                          input.Honeycode !== undefined &&
                            input.Honeycode !== null && {
                              Honeycode: serializeAws_restJson1HoneycodeConnectorProfileCredentials(
                                input.Honeycode,
                                context
                              ),
                            }
                        ),
                        input.InforNexus !== undefined &&
                          input.InforNexus !== null && {
                            InforNexus: serializeAws_restJson1InforNexusConnectorProfileCredentials(
                              input.InforNexus,
                              context
                            ),
                          }
                      ),
                      input.Marketo !== undefined &&
                        input.Marketo !== null && {
                          Marketo: serializeAws_restJson1MarketoConnectorProfileCredentials(input.Marketo, context),
                        }
                    ),
                    input.Redshift !== undefined &&
                      input.Redshift !== null && {
                        Redshift: serializeAws_restJson1RedshiftConnectorProfileCredentials(input.Redshift, context),
                      }
                  ),
                  input.Salesforce !== undefined &&
                    input.Salesforce !== null && {
                      Salesforce: serializeAws_restJson1SalesforceConnectorProfileCredentials(
                        input.Salesforce,
                        context
                      ),
                    }
                ),
                input.ServiceNow !== undefined &&
                  input.ServiceNow !== null && {
                    ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileCredentials(input.ServiceNow, context),
                  }
              ),
              input.Singular !== undefined &&
                input.Singular !== null && {
                  Singular: serializeAws_restJson1SingularConnectorProfileCredentials(input.Singular, context),
                }
            ),
            input.Slack !== undefined &&
              input.Slack !== null && {
                Slack: serializeAws_restJson1SlackConnectorProfileCredentials(input.Slack, context),
              }
          ),
          input.Snowflake !== undefined &&
            input.Snowflake !== null && {
              Snowflake: serializeAws_restJson1SnowflakeConnectorProfileCredentials(input.Snowflake, context),
            }
        ),
        input.Trendmicro !== undefined &&
          input.Trendmicro !== null && {
            Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileCredentials(input.Trendmicro, context),
          }
      ),
      input.Veeva !== undefined &&
        input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaConnectorProfileCredentials(input.Veeva, context) }
    ),
    input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskConnectorProfileCredentials(input.Zendesk, context),
      }
  );
};
var serializeAws_restJson1ConnectorProfileNameList = function (input, context) {
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
var serializeAws_restJson1ConnectorProfileProperties = function (input, context) {
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
                              __assign(
                                __assign(
                                  {},
                                  input.Amplitude !== undefined &&
                                    input.Amplitude !== null && {
                                      Amplitude: serializeAws_restJson1AmplitudeConnectorProfileProperties(
                                        input.Amplitude,
                                        context
                                      ),
                                    }
                                ),
                                input.Datadog !== undefined &&
                                  input.Datadog !== null && {
                                    Datadog: serializeAws_restJson1DatadogConnectorProfileProperties(
                                      input.Datadog,
                                      context
                                    ),
                                  }
                              ),
                              input.Dynatrace !== undefined &&
                                input.Dynatrace !== null && {
                                  Dynatrace: serializeAws_restJson1DynatraceConnectorProfileProperties(
                                    input.Dynatrace,
                                    context
                                  ),
                                }
                            ),
                            input.GoogleAnalytics !== undefined &&
                              input.GoogleAnalytics !== null && {
                                GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(
                                  input.GoogleAnalytics,
                                  context
                                ),
                              }
                          ),
                          input.Honeycode !== undefined &&
                            input.Honeycode !== null && {
                              Honeycode: serializeAws_restJson1HoneycodeConnectorProfileProperties(
                                input.Honeycode,
                                context
                              ),
                            }
                        ),
                        input.InforNexus !== undefined &&
                          input.InforNexus !== null && {
                            InforNexus: serializeAws_restJson1InforNexusConnectorProfileProperties(
                              input.InforNexus,
                              context
                            ),
                          }
                      ),
                      input.Marketo !== undefined &&
                        input.Marketo !== null && {
                          Marketo: serializeAws_restJson1MarketoConnectorProfileProperties(input.Marketo, context),
                        }
                    ),
                    input.Redshift !== undefined &&
                      input.Redshift !== null && {
                        Redshift: serializeAws_restJson1RedshiftConnectorProfileProperties(input.Redshift, context),
                      }
                  ),
                  input.Salesforce !== undefined &&
                    input.Salesforce !== null && {
                      Salesforce: serializeAws_restJson1SalesforceConnectorProfileProperties(input.Salesforce, context),
                    }
                ),
                input.ServiceNow !== undefined &&
                  input.ServiceNow !== null && {
                    ServiceNow: serializeAws_restJson1ServiceNowConnectorProfileProperties(input.ServiceNow, context),
                  }
              ),
              input.Singular !== undefined &&
                input.Singular !== null && {
                  Singular: serializeAws_restJson1SingularConnectorProfileProperties(input.Singular, context),
                }
            ),
            input.Slack !== undefined &&
              input.Slack !== null && {
                Slack: serializeAws_restJson1SlackConnectorProfileProperties(input.Slack, context),
              }
          ),
          input.Snowflake !== undefined &&
            input.Snowflake !== null && {
              Snowflake: serializeAws_restJson1SnowflakeConnectorProfileProperties(input.Snowflake, context),
            }
        ),
        input.Trendmicro !== undefined &&
          input.Trendmicro !== null && {
            Trendmicro: serializeAws_restJson1TrendmicroConnectorProfileProperties(input.Trendmicro, context),
          }
      ),
      input.Veeva !== undefined &&
        input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaConnectorProfileProperties(input.Veeva, context) }
    ),
    input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskConnectorProfileProperties(input.Zendesk, context),
      }
  );
};
var serializeAws_restJson1ConnectorTypeList = function (input, context) {
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
var serializeAws_restJson1CustomerProfilesDestinationProperties = function (input, context) {
  return __assign(
    __assign({}, input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    input.objectTypeName !== undefined && input.objectTypeName !== null && { objectTypeName: input.objectTypeName }
  );
};
var serializeAws_restJson1DatadogConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign({}, input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey }),
    input.applicationKey !== undefined && input.applicationKey !== null && { applicationKey: input.applicationKey }
  );
};
var serializeAws_restJson1DatadogConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1DatadogSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1DestinationConnectorProperties = function (input, context) {
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
                      input.CustomerProfiles !== undefined &&
                        input.CustomerProfiles !== null && {
                          CustomerProfiles: serializeAws_restJson1CustomerProfilesDestinationProperties(
                            input.CustomerProfiles,
                            context
                          ),
                        }
                    ),
                    input.EventBridge !== undefined &&
                      input.EventBridge !== null && {
                        EventBridge: serializeAws_restJson1EventBridgeDestinationProperties(input.EventBridge, context),
                      }
                  ),
                  input.Honeycode !== undefined &&
                    input.Honeycode !== null && {
                      Honeycode: serializeAws_restJson1HoneycodeDestinationProperties(input.Honeycode, context),
                    }
                ),
                input.LookoutMetrics !== undefined &&
                  input.LookoutMetrics !== null && {
                    LookoutMetrics: serializeAws_restJson1LookoutMetricsDestinationProperties(
                      input.LookoutMetrics,
                      context
                    ),
                  }
              ),
              input.Redshift !== undefined &&
                input.Redshift !== null && {
                  Redshift: serializeAws_restJson1RedshiftDestinationProperties(input.Redshift, context),
                }
            ),
            input.S3 !== undefined &&
              input.S3 !== null && { S3: serializeAws_restJson1S3DestinationProperties(input.S3, context) }
          ),
          input.Salesforce !== undefined &&
            input.Salesforce !== null && {
              Salesforce: serializeAws_restJson1SalesforceDestinationProperties(input.Salesforce, context),
            }
        ),
        input.Snowflake !== undefined &&
          input.Snowflake !== null && {
            Snowflake: serializeAws_restJson1SnowflakeDestinationProperties(input.Snowflake, context),
          }
      ),
      input.Upsolver !== undefined &&
        input.Upsolver !== null && {
          Upsolver: serializeAws_restJson1UpsolverDestinationProperties(input.Upsolver, context),
        }
    ),
    input.Zendesk !== undefined &&
      input.Zendesk !== null && {
        Zendesk: serializeAws_restJson1ZendeskDestinationProperties(input.Zendesk, context),
      }
  );
};
var serializeAws_restJson1DestinationFlowConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.connectorProfileName !== undefined &&
          input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
      ),
      input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }
    ),
    input.destinationConnectorProperties !== undefined &&
      input.destinationConnectorProperties !== null && {
        destinationConnectorProperties: serializeAws_restJson1DestinationConnectorProperties(
          input.destinationConnectorProperties,
          context
        ),
      }
  );
};
var serializeAws_restJson1DestinationFlowConfigList = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1DestinationFlowConfig(entry, context);
    });
};
var serializeAws_restJson1DynatraceConnectorProfileCredentials = function (input, context) {
  return __assign({}, input.apiToken !== undefined && input.apiToken !== null && { apiToken: input.apiToken });
};
var serializeAws_restJson1DynatraceConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1DynatraceSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1ErrorHandlingConfig = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
      input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
    ),
    input.failOnFirstDestinationError !== undefined &&
      input.failOnFirstDestinationError !== null && { failOnFirstDestinationError: input.failOnFirstDestinationError }
  );
};
var serializeAws_restJson1EventBridgeDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      {},
      input.errorHandlingConfig !== undefined &&
        input.errorHandlingConfig !== null && {
          errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
        }
    ),
    input.object !== undefined && input.object !== null && { object: input.object }
  );
};
var serializeAws_restJson1GoogleAnalyticsConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }
          ),
          input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }
        ),
        input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }
      ),
      input.oAuthRequest !== undefined &&
        input.oAuthRequest !== null && {
          oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
        }
    ),
    input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }
  );
};
var serializeAws_restJson1GoogleAnalyticsConnectorProfileProperties = function (input, context) {
  return {};
};
var serializeAws_restJson1GoogleAnalyticsSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1HoneycodeConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }),
      input.oAuthRequest !== undefined &&
        input.oAuthRequest !== null && {
          oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
        }
    ),
    input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }
  );
};
var serializeAws_restJson1HoneycodeConnectorProfileProperties = function (input, context) {
  return {};
};
var serializeAws_restJson1HoneycodeDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      {},
      input.errorHandlingConfig !== undefined &&
        input.errorHandlingConfig !== null && {
          errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
        }
    ),
    input.object !== undefined && input.object !== null && { object: input.object }
  );
};
var serializeAws_restJson1IdFieldNameList = function (input, context) {
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
var serializeAws_restJson1IncrementalPullConfig = function (input, context) {
  return __assign(
    {},
    input.datetimeTypeFieldName !== undefined &&
      input.datetimeTypeFieldName !== null && { datetimeTypeFieldName: input.datetimeTypeFieldName }
  );
};
var serializeAws_restJson1InforNexusConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.accessKeyId !== undefined && input.accessKeyId !== null && { accessKeyId: input.accessKeyId }
        ),
        input.datakey !== undefined && input.datakey !== null && { datakey: input.datakey }
      ),
      input.secretAccessKey !== undefined &&
        input.secretAccessKey !== null && { secretAccessKey: input.secretAccessKey }
    ),
    input.userId !== undefined && input.userId !== null && { userId: input.userId }
  );
};
var serializeAws_restJson1InforNexusConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1InforNexusSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1LookoutMetricsDestinationProperties = function (input, context) {
  return {};
};
var serializeAws_restJson1MarketoConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }
        ),
        input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }
      ),
      input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }
    ),
    input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }
  );
};
var serializeAws_restJson1MarketoConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1MarketoSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1PrefixConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.prefixFormat !== undefined && input.prefixFormat !== null && { prefixFormat: input.prefixFormat }
    ),
    input.prefixType !== undefined && input.prefixType !== null && { prefixType: input.prefixType }
  );
};
var serializeAws_restJson1RedshiftConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign({}, input.password !== undefined && input.password !== null && { password: input.password }),
    input.username !== undefined && input.username !== null && { username: input.username }
  );
};
var serializeAws_restJson1RedshiftConnectorProfileProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign({}, input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
        input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
      ),
      input.databaseUrl !== undefined && input.databaseUrl !== null && { databaseUrl: input.databaseUrl }
    ),
    input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }
  );
};
var serializeAws_restJson1RedshiftDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
        ),
        input.errorHandlingConfig !== undefined &&
          input.errorHandlingConfig !== null && {
            errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
          }
      ),
      input.intermediateBucketName !== undefined &&
        input.intermediateBucketName !== null && { intermediateBucketName: input.intermediateBucketName }
    ),
    input.object !== undefined && input.object !== null && { object: input.object }
  );
};
var serializeAws_restJson1S3DestinationProperties = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
      input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
    ),
    input.s3OutputFormatConfig !== undefined &&
      input.s3OutputFormatConfig !== null && {
        s3OutputFormatConfig: serializeAws_restJson1S3OutputFormatConfig(input.s3OutputFormatConfig, context),
      }
  );
};
var serializeAws_restJson1S3OutputFormatConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.aggregationConfig !== undefined &&
          input.aggregationConfig !== null && {
            aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
          }
      ),
      input.fileType !== undefined && input.fileType !== null && { fileType: input.fileType }
    ),
    input.prefixConfig !== undefined &&
      input.prefixConfig !== null && { prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context) }
  );
};
var serializeAws_restJson1S3SourceProperties = function (input, context) {
  return __assign(
    __assign({}, input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
  );
};
var serializeAws_restJson1SalesforceConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }
        ),
        input.clientCredentialsArn !== undefined &&
          input.clientCredentialsArn !== null && { clientCredentialsArn: input.clientCredentialsArn }
      ),
      input.oAuthRequest !== undefined &&
        input.oAuthRequest !== null && {
          oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
        }
    ),
    input.refreshToken !== undefined && input.refreshToken !== null && { refreshToken: input.refreshToken }
  );
};
var serializeAws_restJson1SalesforceConnectorProfileProperties = function (input, context) {
  return __assign(
    __assign({}, input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }),
    input.isSandboxEnvironment !== undefined &&
      input.isSandboxEnvironment !== null && { isSandboxEnvironment: input.isSandboxEnvironment }
  );
};
var serializeAws_restJson1SalesforceDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.errorHandlingConfig !== undefined &&
            input.errorHandlingConfig !== null && {
              errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
            }
        ),
        input.idFieldNames !== undefined &&
          input.idFieldNames !== null && {
            idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
          }
      ),
      input.object !== undefined && input.object !== null && { object: input.object }
    ),
    input.writeOperationType !== undefined &&
      input.writeOperationType !== null && { writeOperationType: input.writeOperationType }
  );
};
var serializeAws_restJson1SalesforceSourceProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.enableDynamicFieldUpdate !== undefined &&
          input.enableDynamicFieldUpdate !== null && { enableDynamicFieldUpdate: input.enableDynamicFieldUpdate }
      ),
      input.includeDeletedRecords !== undefined &&
        input.includeDeletedRecords !== null && { includeDeletedRecords: input.includeDeletedRecords }
    ),
    input.object !== undefined && input.object !== null && { object: input.object }
  );
};
var serializeAws_restJson1ScheduledTriggerProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.dataPullMode !== undefined && input.dataPullMode !== null && { dataPullMode: input.dataPullMode }
              ),
              input.firstExecutionFrom !== undefined &&
                input.firstExecutionFrom !== null && {
                  firstExecutionFrom: Math.round(input.firstExecutionFrom.getTime() / 1000),
                }
            ),
            input.scheduleEndTime !== undefined &&
              input.scheduleEndTime !== null && { scheduleEndTime: Math.round(input.scheduleEndTime.getTime() / 1000) }
          ),
          input.scheduleExpression !== undefined &&
            input.scheduleExpression !== null && { scheduleExpression: input.scheduleExpression }
        ),
        input.scheduleOffset !== undefined && input.scheduleOffset !== null && { scheduleOffset: input.scheduleOffset }
      ),
      input.scheduleStartTime !== undefined &&
        input.scheduleStartTime !== null && { scheduleStartTime: Math.round(input.scheduleStartTime.getTime() / 1000) }
    ),
    input.timezone !== undefined && input.timezone !== null && { timezone: input.timezone }
  );
};
var serializeAws_restJson1ServiceNowConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign({}, input.password !== undefined && input.password !== null && { password: input.password }),
    input.username !== undefined && input.username !== null && { username: input.username }
  );
};
var serializeAws_restJson1ServiceNowConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1ServiceNowSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1SingularConnectorProfileCredentials = function (input, context) {
  return __assign({}, input.apiKey !== undefined && input.apiKey !== null && { apiKey: input.apiKey });
};
var serializeAws_restJson1SingularConnectorProfileProperties = function (input, context) {
  return {};
};
var serializeAws_restJson1SingularSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1SlackConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }
        ),
        input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }
      ),
      input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }
    ),
    input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }
  );
};
var serializeAws_restJson1SlackConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1SlackSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1SnowflakeConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign({}, input.password !== undefined && input.password !== null && { password: input.password }),
    input.username !== undefined && input.username !== null && { username: input.username }
  );
};
var serializeAws_restJson1SnowflakeConnectorProfileProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            __assign(
              __assign(
                {},
                input.accountName !== undefined && input.accountName !== null && { accountName: input.accountName }
              ),
              input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }
            ),
            input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
          ),
          input.privateLinkServiceName !== undefined &&
            input.privateLinkServiceName !== null && { privateLinkServiceName: input.privateLinkServiceName }
        ),
        input.region !== undefined && input.region !== null && { region: input.region }
      ),
      input.stage !== undefined && input.stage !== null && { stage: input.stage }
    ),
    input.warehouse !== undefined && input.warehouse !== null && { warehouse: input.warehouse }
  );
};
var serializeAws_restJson1SnowflakeDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
        ),
        input.errorHandlingConfig !== undefined &&
          input.errorHandlingConfig !== null && {
            errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
          }
      ),
      input.intermediateBucketName !== undefined &&
        input.intermediateBucketName !== null && { intermediateBucketName: input.intermediateBucketName }
    ),
    input.object !== undefined && input.object !== null && { object: input.object }
  );
};
var serializeAws_restJson1SourceConnectorProperties = function (input, context) {
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
                              input.Amplitude !== undefined &&
                                input.Amplitude !== null && {
                                  Amplitude: serializeAws_restJson1AmplitudeSourceProperties(input.Amplitude, context),
                                }
                            ),
                            input.Datadog !== undefined &&
                              input.Datadog !== null && {
                                Datadog: serializeAws_restJson1DatadogSourceProperties(input.Datadog, context),
                              }
                          ),
                          input.Dynatrace !== undefined &&
                            input.Dynatrace !== null && {
                              Dynatrace: serializeAws_restJson1DynatraceSourceProperties(input.Dynatrace, context),
                            }
                        ),
                        input.GoogleAnalytics !== undefined &&
                          input.GoogleAnalytics !== null && {
                            GoogleAnalytics: serializeAws_restJson1GoogleAnalyticsSourceProperties(
                              input.GoogleAnalytics,
                              context
                            ),
                          }
                      ),
                      input.InforNexus !== undefined &&
                        input.InforNexus !== null && {
                          InforNexus: serializeAws_restJson1InforNexusSourceProperties(input.InforNexus, context),
                        }
                    ),
                    input.Marketo !== undefined &&
                      input.Marketo !== null && {
                        Marketo: serializeAws_restJson1MarketoSourceProperties(input.Marketo, context),
                      }
                  ),
                  input.S3 !== undefined &&
                    input.S3 !== null && { S3: serializeAws_restJson1S3SourceProperties(input.S3, context) }
                ),
                input.Salesforce !== undefined &&
                  input.Salesforce !== null && {
                    Salesforce: serializeAws_restJson1SalesforceSourceProperties(input.Salesforce, context),
                  }
              ),
              input.ServiceNow !== undefined &&
                input.ServiceNow !== null && {
                  ServiceNow: serializeAws_restJson1ServiceNowSourceProperties(input.ServiceNow, context),
                }
            ),
            input.Singular !== undefined &&
              input.Singular !== null && {
                Singular: serializeAws_restJson1SingularSourceProperties(input.Singular, context),
              }
          ),
          input.Slack !== undefined &&
            input.Slack !== null && { Slack: serializeAws_restJson1SlackSourceProperties(input.Slack, context) }
        ),
        input.Trendmicro !== undefined &&
          input.Trendmicro !== null && {
            Trendmicro: serializeAws_restJson1TrendmicroSourceProperties(input.Trendmicro, context),
          }
      ),
      input.Veeva !== undefined &&
        input.Veeva !== null && { Veeva: serializeAws_restJson1VeevaSourceProperties(input.Veeva, context) }
    ),
    input.Zendesk !== undefined &&
      input.Zendesk !== null && { Zendesk: serializeAws_restJson1ZendeskSourceProperties(input.Zendesk, context) }
  );
};
var serializeAws_restJson1SourceFields = function (input, context) {
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
var serializeAws_restJson1SourceFlowConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.connectorProfileName !== undefined &&
            input.connectorProfileName !== null && { connectorProfileName: input.connectorProfileName }
        ),
        input.connectorType !== undefined && input.connectorType !== null && { connectorType: input.connectorType }
      ),
      input.incrementalPullConfig !== undefined &&
        input.incrementalPullConfig !== null && {
          incrementalPullConfig: serializeAws_restJson1IncrementalPullConfig(input.incrementalPullConfig, context),
        }
    ),
    input.sourceConnectorProperties !== undefined &&
      input.sourceConnectorProperties !== null && {
        sourceConnectorProperties: serializeAws_restJson1SourceConnectorProperties(
          input.sourceConnectorProperties,
          context
        ),
      }
  );
};
var serializeAws_restJson1TagMap = function (input, context) {
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
var serializeAws_restJson1Task = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          __assign(
            {},
            input.connectorOperator !== undefined &&
              input.connectorOperator !== null && {
                connectorOperator: serializeAws_restJson1ConnectorOperator(input.connectorOperator, context),
              }
          ),
          input.destinationField !== undefined &&
            input.destinationField !== null && { destinationField: input.destinationField }
        ),
        input.sourceFields !== undefined &&
          input.sourceFields !== null && {
            sourceFields: serializeAws_restJson1SourceFields(input.sourceFields, context),
          }
      ),
      input.taskProperties !== undefined &&
        input.taskProperties !== null && {
          taskProperties: serializeAws_restJson1TaskPropertiesMap(input.taskProperties, context),
        }
    ),
    input.taskType !== undefined && input.taskType !== null && { taskType: input.taskType }
  );
};
var serializeAws_restJson1TaskPropertiesMap = function (input, context) {
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
var serializeAws_restJson1Tasks = function (input, context) {
  return input
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1Task(entry, context);
    });
};
var serializeAws_restJson1TrendmicroConnectorProfileCredentials = function (input, context) {
  return __assign(
    {},
    input.apiSecretKey !== undefined && input.apiSecretKey !== null && { apiSecretKey: input.apiSecretKey }
  );
};
var serializeAws_restJson1TrendmicroConnectorProfileProperties = function (input, context) {
  return {};
};
var serializeAws_restJson1TrendmicroSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1TriggerConfig = function (input, context) {
  return __assign(
    __assign(
      {},
      input.triggerProperties !== undefined &&
        input.triggerProperties !== null && {
          triggerProperties: serializeAws_restJson1TriggerProperties(input.triggerProperties, context),
        }
    ),
    input.triggerType !== undefined && input.triggerType !== null && { triggerType: input.triggerType }
  );
};
var serializeAws_restJson1TriggerProperties = function (input, context) {
  return __assign(
    {},
    input.Scheduled !== undefined &&
      input.Scheduled !== null && {
        Scheduled: serializeAws_restJson1ScheduledTriggerProperties(input.Scheduled, context),
      }
  );
};
var serializeAws_restJson1UpsolverDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      __assign({}, input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
      input.bucketPrefix !== undefined && input.bucketPrefix !== null && { bucketPrefix: input.bucketPrefix }
    ),
    input.s3OutputFormatConfig !== undefined &&
      input.s3OutputFormatConfig !== null && {
        s3OutputFormatConfig: serializeAws_restJson1UpsolverS3OutputFormatConfig(input.s3OutputFormatConfig, context),
      }
  );
};
var serializeAws_restJson1UpsolverS3OutputFormatConfig = function (input, context) {
  return __assign(
    __assign(
      __assign(
        {},
        input.aggregationConfig !== undefined &&
          input.aggregationConfig !== null && {
            aggregationConfig: serializeAws_restJson1AggregationConfig(input.aggregationConfig, context),
          }
      ),
      input.fileType !== undefined && input.fileType !== null && { fileType: input.fileType }
    ),
    input.prefixConfig !== undefined &&
      input.prefixConfig !== null && { prefixConfig: serializeAws_restJson1PrefixConfig(input.prefixConfig, context) }
  );
};
var serializeAws_restJson1VeevaConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign({}, input.password !== undefined && input.password !== null && { password: input.password }),
    input.username !== undefined && input.username !== null && { username: input.username }
  );
};
var serializeAws_restJson1VeevaConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1VeevaSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var serializeAws_restJson1ZendeskConnectorProfileCredentials = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.accessToken !== undefined && input.accessToken !== null && { accessToken: input.accessToken }
        ),
        input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }
      ),
      input.clientSecret !== undefined && input.clientSecret !== null && { clientSecret: input.clientSecret }
    ),
    input.oAuthRequest !== undefined &&
      input.oAuthRequest !== null && {
        oAuthRequest: serializeAws_restJson1ConnectorOAuthRequest(input.oAuthRequest, context),
      }
  );
};
var serializeAws_restJson1ZendeskConnectorProfileProperties = function (input, context) {
  return __assign(
    {},
    input.instanceUrl !== undefined && input.instanceUrl !== null && { instanceUrl: input.instanceUrl }
  );
};
var serializeAws_restJson1ZendeskDestinationProperties = function (input, context) {
  return __assign(
    __assign(
      __assign(
        __assign(
          {},
          input.errorHandlingConfig !== undefined &&
            input.errorHandlingConfig !== null && {
              errorHandlingConfig: serializeAws_restJson1ErrorHandlingConfig(input.errorHandlingConfig, context),
            }
        ),
        input.idFieldNames !== undefined &&
          input.idFieldNames !== null && {
            idFieldNames: serializeAws_restJson1IdFieldNameList(input.idFieldNames, context),
          }
      ),
      input.object !== undefined && input.object !== null && { object: input.object }
    ),
    input.writeOperationType !== undefined &&
      input.writeOperationType !== null && { writeOperationType: input.writeOperationType }
  );
};
var serializeAws_restJson1ZendeskSourceProperties = function (input, context) {
  return __assign({}, input.object !== undefined && input.object !== null && { object: input.object });
};
var deserializeAws_restJson1AggregationConfig = function (output, context) {
  return {
    aggregationType:
      output.aggregationType !== undefined && output.aggregationType !== null ? output.aggregationType : undefined,
  };
};
var deserializeAws_restJson1AmplitudeConnectorProfileProperties = function (output, context) {
  return {};
};
var deserializeAws_restJson1AmplitudeMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1AmplitudeSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1ConnectorConfiguration = function (output, context) {
  return {
    canUseAsDestination:
      output.canUseAsDestination !== undefined && output.canUseAsDestination !== null
        ? output.canUseAsDestination
        : undefined,
    canUseAsSource:
      output.canUseAsSource !== undefined && output.canUseAsSource !== null ? output.canUseAsSource : undefined,
    connectorMetadata:
      output.connectorMetadata !== undefined && output.connectorMetadata !== null
        ? deserializeAws_restJson1ConnectorMetadata(output.connectorMetadata, context)
        : undefined,
    isPrivateLinkEnabled:
      output.isPrivateLinkEnabled !== undefined && output.isPrivateLinkEnabled !== null
        ? output.isPrivateLinkEnabled
        : undefined,
    isPrivateLinkEndpointUrlRequired:
      output.isPrivateLinkEndpointUrlRequired !== undefined && output.isPrivateLinkEndpointUrlRequired !== null
        ? output.isPrivateLinkEndpointUrlRequired
        : undefined,
    supportedDestinationConnectors:
      output.supportedDestinationConnectors !== undefined && output.supportedDestinationConnectors !== null
        ? deserializeAws_restJson1ConnectorTypeList(output.supportedDestinationConnectors, context)
        : undefined,
    supportedSchedulingFrequencies:
      output.supportedSchedulingFrequencies !== undefined && output.supportedSchedulingFrequencies !== null
        ? deserializeAws_restJson1SchedulingFrequencyTypeList(output.supportedSchedulingFrequencies, context)
        : undefined,
    supportedTriggerTypes:
      output.supportedTriggerTypes !== undefined && output.supportedTriggerTypes !== null
        ? deserializeAws_restJson1TriggerTypeList(output.supportedTriggerTypes, context)
        : undefined,
  };
};
var deserializeAws_restJson1ConnectorConfigurationsMap = function (output, context) {
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
      ((_b = {}), (_b[key] = deserializeAws_restJson1ConnectorConfiguration(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1ConnectorEntity = function (output, context) {
  return {
    hasNestedEntities:
      output.hasNestedEntities !== undefined && output.hasNestedEntities !== null
        ? output.hasNestedEntities
        : undefined,
    label: output.label !== undefined && output.label !== null ? output.label : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
var deserializeAws_restJson1ConnectorEntityField = function (output, context) {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    destinationProperties:
      output.destinationProperties !== undefined && output.destinationProperties !== null
        ? deserializeAws_restJson1DestinationFieldProperties(output.destinationProperties, context)
        : undefined,
    identifier: output.identifier !== undefined && output.identifier !== null ? output.identifier : undefined,
    label: output.label !== undefined && output.label !== null ? output.label : undefined,
    sourceProperties:
      output.sourceProperties !== undefined && output.sourceProperties !== null
        ? deserializeAws_restJson1SourceFieldProperties(output.sourceProperties, context)
        : undefined,
    supportedFieldTypeDetails:
      output.supportedFieldTypeDetails !== undefined && output.supportedFieldTypeDetails !== null
        ? deserializeAws_restJson1SupportedFieldTypeDetails(output.supportedFieldTypeDetails, context)
        : undefined,
  };
};
var deserializeAws_restJson1ConnectorEntityFieldList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConnectorEntityField(entry, context);
    });
};
var deserializeAws_restJson1ConnectorEntityList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConnectorEntity(entry, context);
    });
};
var deserializeAws_restJson1ConnectorEntityMap = function (output, context) {
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
      ((_b = {}), (_b[key] = deserializeAws_restJson1ConnectorEntityList(value, context)), _b)
    );
  }, {});
};
var deserializeAws_restJson1ConnectorMetadata = function (output, context) {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeMetadata(output.Amplitude, context)
        : undefined,
    CustomerProfiles:
      output.CustomerProfiles !== undefined && output.CustomerProfiles !== null
        ? deserializeAws_restJson1CustomerProfilesMetadata(output.CustomerProfiles, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogMetadata(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceMetadata(output.Dynatrace, context)
        : undefined,
    EventBridge:
      output.EventBridge !== undefined && output.EventBridge !== null
        ? deserializeAws_restJson1EventBridgeMetadata(output.EventBridge, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsMetadata(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeMetadata(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusMetadata(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoMetadata(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftMetadata(output.Redshift, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3Metadata(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceMetadata(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowMetadata(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularMetadata(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackMetadata(output.Slack, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeMetadata(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroMetadata(output.Trendmicro, context)
        : undefined,
    Upsolver:
      output.Upsolver !== undefined && output.Upsolver !== null
        ? deserializeAws_restJson1UpsolverMetadata(output.Upsolver, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaMetadata(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskMetadata(output.Zendesk, context)
        : undefined,
  };
};
var deserializeAws_restJson1ConnectorOperator = function (output, context) {
  return {
    Amplitude: output.Amplitude !== undefined && output.Amplitude !== null ? output.Amplitude : undefined,
    Datadog: output.Datadog !== undefined && output.Datadog !== null ? output.Datadog : undefined,
    Dynatrace: output.Dynatrace !== undefined && output.Dynatrace !== null ? output.Dynatrace : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null ? output.GoogleAnalytics : undefined,
    InforNexus: output.InforNexus !== undefined && output.InforNexus !== null ? output.InforNexus : undefined,
    Marketo: output.Marketo !== undefined && output.Marketo !== null ? output.Marketo : undefined,
    S3: output.S3 !== undefined && output.S3 !== null ? output.S3 : undefined,
    Salesforce: output.Salesforce !== undefined && output.Salesforce !== null ? output.Salesforce : undefined,
    ServiceNow: output.ServiceNow !== undefined && output.ServiceNow !== null ? output.ServiceNow : undefined,
    Singular: output.Singular !== undefined && output.Singular !== null ? output.Singular : undefined,
    Slack: output.Slack !== undefined && output.Slack !== null ? output.Slack : undefined,
    Trendmicro: output.Trendmicro !== undefined && output.Trendmicro !== null ? output.Trendmicro : undefined,
    Veeva: output.Veeva !== undefined && output.Veeva !== null ? output.Veeva : undefined,
    Zendesk: output.Zendesk !== undefined && output.Zendesk !== null ? output.Zendesk : undefined,
  };
};
var deserializeAws_restJson1ConnectorProfile = function (output, context) {
  return {
    connectionMode:
      output.connectionMode !== undefined && output.connectionMode !== null ? output.connectionMode : undefined,
    connectorProfileArn:
      output.connectorProfileArn !== undefined && output.connectorProfileArn !== null
        ? output.connectorProfileArn
        : undefined,
    connectorProfileName:
      output.connectorProfileName !== undefined && output.connectorProfileName !== null
        ? output.connectorProfileName
        : undefined,
    connectorProfileProperties:
      output.connectorProfileProperties !== undefined && output.connectorProfileProperties !== null
        ? deserializeAws_restJson1ConnectorProfileProperties(output.connectorProfileProperties, context)
        : undefined,
    connectorType:
      output.connectorType !== undefined && output.connectorType !== null ? output.connectorType : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    credentialsArn:
      output.credentialsArn !== undefined && output.credentialsArn !== null ? output.credentialsArn : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1ConnectorProfileDetailList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ConnectorProfile(entry, context);
    });
};
var deserializeAws_restJson1ConnectorProfileProperties = function (output, context) {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeConnectorProfileProperties(output.Amplitude, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogConnectorProfileProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceConnectorProfileProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties(output.GoogleAnalytics, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeConnectorProfileProperties(output.Honeycode, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusConnectorProfileProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoConnectorProfileProperties(output.Marketo, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftConnectorProfileProperties(output.Redshift, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceConnectorProfileProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowConnectorProfileProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularConnectorProfileProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackConnectorProfileProperties(output.Slack, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeConnectorProfileProperties(output.Snowflake, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroConnectorProfileProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaConnectorProfileProperties(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskConnectorProfileProperties(output.Zendesk, context)
        : undefined,
  };
};
var deserializeAws_restJson1ConnectorTypeList = function (output, context) {
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
var deserializeAws_restJson1CustomerProfilesDestinationProperties = function (output, context) {
  return {
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    objectTypeName:
      output.objectTypeName !== undefined && output.objectTypeName !== null ? output.objectTypeName : undefined,
  };
};
var deserializeAws_restJson1CustomerProfilesMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1DatadogConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1DatadogMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1DatadogSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1DestinationConnectorProperties = function (output, context) {
  return {
    CustomerProfiles:
      output.CustomerProfiles !== undefined && output.CustomerProfiles !== null
        ? deserializeAws_restJson1CustomerProfilesDestinationProperties(output.CustomerProfiles, context)
        : undefined,
    EventBridge:
      output.EventBridge !== undefined && output.EventBridge !== null
        ? deserializeAws_restJson1EventBridgeDestinationProperties(output.EventBridge, context)
        : undefined,
    Honeycode:
      output.Honeycode !== undefined && output.Honeycode !== null
        ? deserializeAws_restJson1HoneycodeDestinationProperties(output.Honeycode, context)
        : undefined,
    LookoutMetrics:
      output.LookoutMetrics !== undefined && output.LookoutMetrics !== null
        ? deserializeAws_restJson1LookoutMetricsDestinationProperties(output.LookoutMetrics, context)
        : undefined,
    Redshift:
      output.Redshift !== undefined && output.Redshift !== null
        ? deserializeAws_restJson1RedshiftDestinationProperties(output.Redshift, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3DestinationProperties(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceDestinationProperties(output.Salesforce, context)
        : undefined,
    Snowflake:
      output.Snowflake !== undefined && output.Snowflake !== null
        ? deserializeAws_restJson1SnowflakeDestinationProperties(output.Snowflake, context)
        : undefined,
    Upsolver:
      output.Upsolver !== undefined && output.Upsolver !== null
        ? deserializeAws_restJson1UpsolverDestinationProperties(output.Upsolver, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskDestinationProperties(output.Zendesk, context)
        : undefined,
  };
};
var deserializeAws_restJson1DestinationFieldProperties = function (output, context) {
  return {
    isCreatable: output.isCreatable !== undefined && output.isCreatable !== null ? output.isCreatable : undefined,
    isNullable: output.isNullable !== undefined && output.isNullable !== null ? output.isNullable : undefined,
    isUpdatable: output.isUpdatable !== undefined && output.isUpdatable !== null ? output.isUpdatable : undefined,
    isUpsertable: output.isUpsertable !== undefined && output.isUpsertable !== null ? output.isUpsertable : undefined,
    supportedWriteOperations:
      output.supportedWriteOperations !== undefined && output.supportedWriteOperations !== null
        ? deserializeAws_restJson1SupportedWriteOperationList(output.supportedWriteOperations, context)
        : undefined,
  };
};
var deserializeAws_restJson1DestinationFlowConfig = function (output, context) {
  return {
    connectorProfileName:
      output.connectorProfileName !== undefined && output.connectorProfileName !== null
        ? output.connectorProfileName
        : undefined,
    connectorType:
      output.connectorType !== undefined && output.connectorType !== null ? output.connectorType : undefined,
    destinationConnectorProperties:
      output.destinationConnectorProperties !== undefined && output.destinationConnectorProperties !== null
        ? deserializeAws_restJson1DestinationConnectorProperties(output.destinationConnectorProperties, context)
        : undefined,
  };
};
var deserializeAws_restJson1DestinationFlowConfigList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DestinationFlowConfig(entry, context);
    });
};
var deserializeAws_restJson1DynatraceConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1DynatraceMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1DynatraceSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1ErrorHandlingConfig = function (output, context) {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    failOnFirstDestinationError:
      output.failOnFirstDestinationError !== undefined && output.failOnFirstDestinationError !== null
        ? output.failOnFirstDestinationError
        : undefined,
  };
};
var deserializeAws_restJson1ErrorInfo = function (output, context) {
  return {
    executionMessage:
      output.executionMessage !== undefined && output.executionMessage !== null ? output.executionMessage : undefined,
    putFailuresCount:
      output.putFailuresCount !== undefined && output.putFailuresCount !== null ? output.putFailuresCount : undefined,
  };
};
var deserializeAws_restJson1EventBridgeDestinationProperties = function (output, context) {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1EventBridgeMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1ExecutionDetails = function (output, context) {
  return {
    mostRecentExecutionMessage:
      output.mostRecentExecutionMessage !== undefined && output.mostRecentExecutionMessage !== null
        ? output.mostRecentExecutionMessage
        : undefined,
    mostRecentExecutionStatus:
      output.mostRecentExecutionStatus !== undefined && output.mostRecentExecutionStatus !== null
        ? output.mostRecentExecutionStatus
        : undefined,
    mostRecentExecutionTime:
      output.mostRecentExecutionTime !== undefined && output.mostRecentExecutionTime !== null
        ? new Date(Math.round(output.mostRecentExecutionTime * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1ExecutionRecord = function (output, context) {
  return {
    dataPullEndTime:
      output.dataPullEndTime !== undefined && output.dataPullEndTime !== null
        ? new Date(Math.round(output.dataPullEndTime * 1000))
        : undefined,
    dataPullStartTime:
      output.dataPullStartTime !== undefined && output.dataPullStartTime !== null
        ? new Date(Math.round(output.dataPullStartTime * 1000))
        : undefined,
    executionId: output.executionId !== undefined && output.executionId !== null ? output.executionId : undefined,
    executionResult:
      output.executionResult !== undefined && output.executionResult !== null
        ? deserializeAws_restJson1ExecutionResult(output.executionResult, context)
        : undefined,
    executionStatus:
      output.executionStatus !== undefined && output.executionStatus !== null ? output.executionStatus : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? new Date(Math.round(output.startedAt * 1000))
        : undefined,
  };
};
var deserializeAws_restJson1ExecutionResult = function (output, context) {
  return {
    bytesProcessed:
      output.bytesProcessed !== undefined && output.bytesProcessed !== null ? output.bytesProcessed : undefined,
    bytesWritten: output.bytesWritten !== undefined && output.bytesWritten !== null ? output.bytesWritten : undefined,
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
        : undefined,
    recordsProcessed:
      output.recordsProcessed !== undefined && output.recordsProcessed !== null ? output.recordsProcessed : undefined,
  };
};
var deserializeAws_restJson1FieldTypeDetails = function (output, context) {
  return {
    fieldType: output.fieldType !== undefined && output.fieldType !== null ? output.fieldType : undefined,
    filterOperators:
      output.filterOperators !== undefined && output.filterOperators !== null
        ? deserializeAws_restJson1FilterOperatorList(output.filterOperators, context)
        : undefined,
    supportedValues:
      output.supportedValues !== undefined && output.supportedValues !== null
        ? deserializeAws_restJson1SupportedValueList(output.supportedValues, context)
        : undefined,
  };
};
var deserializeAws_restJson1FilterOperatorList = function (output, context) {
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
var deserializeAws_restJson1FlowDefinition = function (output, context) {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    destinationConnectorType:
      output.destinationConnectorType !== undefined && output.destinationConnectorType !== null
        ? output.destinationConnectorType
        : undefined,
    flowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
    flowName: output.flowName !== undefined && output.flowName !== null ? output.flowName : undefined,
    flowStatus: output.flowStatus !== undefined && output.flowStatus !== null ? output.flowStatus : undefined,
    lastRunExecutionDetails:
      output.lastRunExecutionDetails !== undefined && output.lastRunExecutionDetails !== null
        ? deserializeAws_restJson1ExecutionDetails(output.lastRunExecutionDetails, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lastUpdatedBy:
      output.lastUpdatedBy !== undefined && output.lastUpdatedBy !== null ? output.lastUpdatedBy : undefined,
    sourceConnectorType:
      output.sourceConnectorType !== undefined && output.sourceConnectorType !== null
        ? output.sourceConnectorType
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
  };
};
var deserializeAws_restJson1FlowExecutionList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ExecutionRecord(entry, context);
    });
};
var deserializeAws_restJson1FlowList = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FlowDefinition(entry, context);
    });
};
var deserializeAws_restJson1GoogleAnalyticsConnectorProfileProperties = function (output, context) {
  return {};
};
var deserializeAws_restJson1GoogleAnalyticsMetadata = function (output, context) {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
var deserializeAws_restJson1GoogleAnalyticsSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1HoneycodeConnectorProfileProperties = function (output, context) {
  return {};
};
var deserializeAws_restJson1HoneycodeDestinationProperties = function (output, context) {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1HoneycodeMetadata = function (output, context) {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
var deserializeAws_restJson1IdFieldNameList = function (output, context) {
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
var deserializeAws_restJson1IncrementalPullConfig = function (output, context) {
  return {
    datetimeTypeFieldName:
      output.datetimeTypeFieldName !== undefined && output.datetimeTypeFieldName !== null
        ? output.datetimeTypeFieldName
        : undefined,
  };
};
var deserializeAws_restJson1InforNexusConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1InforNexusMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1InforNexusSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1LookoutMetricsDestinationProperties = function (output, context) {
  return {};
};
var deserializeAws_restJson1MarketoConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1MarketoMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1MarketoSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1OAuthScopeList = function (output, context) {
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
var deserializeAws_restJson1PrefixConfig = function (output, context) {
  return {
    prefixFormat: output.prefixFormat !== undefined && output.prefixFormat !== null ? output.prefixFormat : undefined,
    prefixType: output.prefixType !== undefined && output.prefixType !== null ? output.prefixType : undefined,
  };
};
var deserializeAws_restJson1RedshiftConnectorProfileProperties = function (output, context) {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    databaseUrl: output.databaseUrl !== undefined && output.databaseUrl !== null ? output.databaseUrl : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
  };
};
var deserializeAws_restJson1RedshiftDestinationProperties = function (output, context) {
  return {
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName:
      output.intermediateBucketName !== undefined && output.intermediateBucketName !== null
        ? output.intermediateBucketName
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1RedshiftMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1RegionList = function (output, context) {
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
var deserializeAws_restJson1S3DestinationProperties = function (output, context) {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    s3OutputFormatConfig:
      output.s3OutputFormatConfig !== undefined && output.s3OutputFormatConfig !== null
        ? deserializeAws_restJson1S3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  };
};
var deserializeAws_restJson1S3Metadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1S3OutputFormatConfig = function (output, context) {
  return {
    aggregationConfig:
      output.aggregationConfig !== undefined && output.aggregationConfig !== null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: output.fileType !== undefined && output.fileType !== null ? output.fileType : undefined,
    prefixConfig:
      output.prefixConfig !== undefined && output.prefixConfig !== null
        ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context)
        : undefined,
  };
};
var deserializeAws_restJson1S3SourceProperties = function (output, context) {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
  };
};
var deserializeAws_restJson1SalesforceConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
    isSandboxEnvironment:
      output.isSandboxEnvironment !== undefined && output.isSandboxEnvironment !== null
        ? output.isSandboxEnvironment
        : undefined,
  };
};
var deserializeAws_restJson1SalesforceDestinationProperties = function (output, context) {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames !== undefined && output.idFieldNames !== null
        ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
    writeOperationType:
      output.writeOperationType !== undefined && output.writeOperationType !== null
        ? output.writeOperationType
        : undefined,
  };
};
var deserializeAws_restJson1SalesforceMetadata = function (output, context) {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
var deserializeAws_restJson1SalesforceSourceProperties = function (output, context) {
  return {
    enableDynamicFieldUpdate:
      output.enableDynamicFieldUpdate !== undefined && output.enableDynamicFieldUpdate !== null
        ? output.enableDynamicFieldUpdate
        : undefined,
    includeDeletedRecords:
      output.includeDeletedRecords !== undefined && output.includeDeletedRecords !== null
        ? output.includeDeletedRecords
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1ScheduledTriggerProperties = function (output, context) {
  return {
    dataPullMode: output.dataPullMode !== undefined && output.dataPullMode !== null ? output.dataPullMode : undefined,
    firstExecutionFrom:
      output.firstExecutionFrom !== undefined && output.firstExecutionFrom !== null
        ? new Date(Math.round(output.firstExecutionFrom * 1000))
        : undefined,
    scheduleEndTime:
      output.scheduleEndTime !== undefined && output.scheduleEndTime !== null
        ? new Date(Math.round(output.scheduleEndTime * 1000))
        : undefined,
    scheduleExpression:
      output.scheduleExpression !== undefined && output.scheduleExpression !== null
        ? output.scheduleExpression
        : undefined,
    scheduleOffset:
      output.scheduleOffset !== undefined && output.scheduleOffset !== null ? output.scheduleOffset : undefined,
    scheduleStartTime:
      output.scheduleStartTime !== undefined && output.scheduleStartTime !== null
        ? new Date(Math.round(output.scheduleStartTime * 1000))
        : undefined,
    timezone: output.timezone !== undefined && output.timezone !== null ? output.timezone : undefined,
  };
};
var deserializeAws_restJson1SchedulingFrequencyTypeList = function (output, context) {
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
var deserializeAws_restJson1ServiceNowConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1ServiceNowMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1ServiceNowSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1SingularConnectorProfileProperties = function (output, context) {
  return {};
};
var deserializeAws_restJson1SingularMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1SingularSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1SlackConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1SlackMetadata = function (output, context) {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
var deserializeAws_restJson1SlackSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1SnowflakeConnectorProfileProperties = function (output, context) {
  return {
    accountName: output.accountName !== undefined && output.accountName !== null ? output.accountName : undefined,
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    privateLinkServiceName:
      output.privateLinkServiceName !== undefined && output.privateLinkServiceName !== null
        ? output.privateLinkServiceName
        : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
    warehouse: output.warehouse !== undefined && output.warehouse !== null ? output.warehouse : undefined,
  };
};
var deserializeAws_restJson1SnowflakeDestinationProperties = function (output, context) {
  return {
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    intermediateBucketName:
      output.intermediateBucketName !== undefined && output.intermediateBucketName !== null
        ? output.intermediateBucketName
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1SnowflakeMetadata = function (output, context) {
  return {
    supportedRegions:
      output.supportedRegions !== undefined && output.supportedRegions !== null
        ? deserializeAws_restJson1RegionList(output.supportedRegions, context)
        : undefined,
  };
};
var deserializeAws_restJson1SourceConnectorProperties = function (output, context) {
  return {
    Amplitude:
      output.Amplitude !== undefined && output.Amplitude !== null
        ? deserializeAws_restJson1AmplitudeSourceProperties(output.Amplitude, context)
        : undefined,
    Datadog:
      output.Datadog !== undefined && output.Datadog !== null
        ? deserializeAws_restJson1DatadogSourceProperties(output.Datadog, context)
        : undefined,
    Dynatrace:
      output.Dynatrace !== undefined && output.Dynatrace !== null
        ? deserializeAws_restJson1DynatraceSourceProperties(output.Dynatrace, context)
        : undefined,
    GoogleAnalytics:
      output.GoogleAnalytics !== undefined && output.GoogleAnalytics !== null
        ? deserializeAws_restJson1GoogleAnalyticsSourceProperties(output.GoogleAnalytics, context)
        : undefined,
    InforNexus:
      output.InforNexus !== undefined && output.InforNexus !== null
        ? deserializeAws_restJson1InforNexusSourceProperties(output.InforNexus, context)
        : undefined,
    Marketo:
      output.Marketo !== undefined && output.Marketo !== null
        ? deserializeAws_restJson1MarketoSourceProperties(output.Marketo, context)
        : undefined,
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3SourceProperties(output.S3, context)
        : undefined,
    Salesforce:
      output.Salesforce !== undefined && output.Salesforce !== null
        ? deserializeAws_restJson1SalesforceSourceProperties(output.Salesforce, context)
        : undefined,
    ServiceNow:
      output.ServiceNow !== undefined && output.ServiceNow !== null
        ? deserializeAws_restJson1ServiceNowSourceProperties(output.ServiceNow, context)
        : undefined,
    Singular:
      output.Singular !== undefined && output.Singular !== null
        ? deserializeAws_restJson1SingularSourceProperties(output.Singular, context)
        : undefined,
    Slack:
      output.Slack !== undefined && output.Slack !== null
        ? deserializeAws_restJson1SlackSourceProperties(output.Slack, context)
        : undefined,
    Trendmicro:
      output.Trendmicro !== undefined && output.Trendmicro !== null
        ? deserializeAws_restJson1TrendmicroSourceProperties(output.Trendmicro, context)
        : undefined,
    Veeva:
      output.Veeva !== undefined && output.Veeva !== null
        ? deserializeAws_restJson1VeevaSourceProperties(output.Veeva, context)
        : undefined,
    Zendesk:
      output.Zendesk !== undefined && output.Zendesk !== null
        ? deserializeAws_restJson1ZendeskSourceProperties(output.Zendesk, context)
        : undefined,
  };
};
var deserializeAws_restJson1SourceFieldProperties = function (output, context) {
  return {
    isQueryable: output.isQueryable !== undefined && output.isQueryable !== null ? output.isQueryable : undefined,
    isRetrievable:
      output.isRetrievable !== undefined && output.isRetrievable !== null ? output.isRetrievable : undefined,
  };
};
var deserializeAws_restJson1SourceFields = function (output, context) {
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
var deserializeAws_restJson1SourceFlowConfig = function (output, context) {
  return {
    connectorProfileName:
      output.connectorProfileName !== undefined && output.connectorProfileName !== null
        ? output.connectorProfileName
        : undefined,
    connectorType:
      output.connectorType !== undefined && output.connectorType !== null ? output.connectorType : undefined,
    incrementalPullConfig:
      output.incrementalPullConfig !== undefined && output.incrementalPullConfig !== null
        ? deserializeAws_restJson1IncrementalPullConfig(output.incrementalPullConfig, context)
        : undefined,
    sourceConnectorProperties:
      output.sourceConnectorProperties !== undefined && output.sourceConnectorProperties !== null
        ? deserializeAws_restJson1SourceConnectorProperties(output.sourceConnectorProperties, context)
        : undefined,
  };
};
var deserializeAws_restJson1SupportedFieldTypeDetails = function (output, context) {
  return {
    v1:
      output.v1 !== undefined && output.v1 !== null
        ? deserializeAws_restJson1FieldTypeDetails(output.v1, context)
        : undefined,
  };
};
var deserializeAws_restJson1SupportedValueList = function (output, context) {
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
var deserializeAws_restJson1SupportedWriteOperationList = function (output, context) {
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
var deserializeAws_restJson1TagMap = function (output, context) {
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
var deserializeAws_restJson1Task = function (output, context) {
  return {
    connectorOperator:
      output.connectorOperator !== undefined && output.connectorOperator !== null
        ? deserializeAws_restJson1ConnectorOperator(output.connectorOperator, context)
        : undefined,
    destinationField:
      output.destinationField !== undefined && output.destinationField !== null ? output.destinationField : undefined,
    sourceFields:
      output.sourceFields !== undefined && output.sourceFields !== null
        ? deserializeAws_restJson1SourceFields(output.sourceFields, context)
        : undefined,
    taskProperties:
      output.taskProperties !== undefined && output.taskProperties !== null
        ? deserializeAws_restJson1TaskPropertiesMap(output.taskProperties, context)
        : undefined,
    taskType: output.taskType !== undefined && output.taskType !== null ? output.taskType : undefined,
  };
};
var deserializeAws_restJson1TaskPropertiesMap = function (output, context) {
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
var deserializeAws_restJson1Tasks = function (output, context) {
  return (output || [])
    .filter(function (e) {
      return e != null;
    })
    .map(function (entry) {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Task(entry, context);
    });
};
var deserializeAws_restJson1TrendmicroConnectorProfileProperties = function (output, context) {
  return {};
};
var deserializeAws_restJson1TrendmicroMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1TrendmicroSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1TriggerConfig = function (output, context) {
  return {
    triggerProperties:
      output.triggerProperties !== undefined && output.triggerProperties !== null
        ? deserializeAws_restJson1TriggerProperties(output.triggerProperties, context)
        : undefined,
    triggerType: output.triggerType !== undefined && output.triggerType !== null ? output.triggerType : undefined,
  };
};
var deserializeAws_restJson1TriggerProperties = function (output, context) {
  return {
    Scheduled:
      output.Scheduled !== undefined && output.Scheduled !== null
        ? deserializeAws_restJson1ScheduledTriggerProperties(output.Scheduled, context)
        : undefined,
  };
};
var deserializeAws_restJson1TriggerTypeList = function (output, context) {
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
var deserializeAws_restJson1UpsolverDestinationProperties = function (output, context) {
  return {
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    bucketPrefix: output.bucketPrefix !== undefined && output.bucketPrefix !== null ? output.bucketPrefix : undefined,
    s3OutputFormatConfig:
      output.s3OutputFormatConfig !== undefined && output.s3OutputFormatConfig !== null
        ? deserializeAws_restJson1UpsolverS3OutputFormatConfig(output.s3OutputFormatConfig, context)
        : undefined,
  };
};
var deserializeAws_restJson1UpsolverMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1UpsolverS3OutputFormatConfig = function (output, context) {
  return {
    aggregationConfig:
      output.aggregationConfig !== undefined && output.aggregationConfig !== null
        ? deserializeAws_restJson1AggregationConfig(output.aggregationConfig, context)
        : undefined,
    fileType: output.fileType !== undefined && output.fileType !== null ? output.fileType : undefined,
    prefixConfig:
      output.prefixConfig !== undefined && output.prefixConfig !== null
        ? deserializeAws_restJson1PrefixConfig(output.prefixConfig, context)
        : undefined,
  };
};
var deserializeAws_restJson1VeevaConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1VeevaMetadata = function (output, context) {
  return {};
};
var deserializeAws_restJson1VeevaSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
  };
};
var deserializeAws_restJson1ZendeskConnectorProfileProperties = function (output, context) {
  return {
    instanceUrl: output.instanceUrl !== undefined && output.instanceUrl !== null ? output.instanceUrl : undefined,
  };
};
var deserializeAws_restJson1ZendeskDestinationProperties = function (output, context) {
  return {
    errorHandlingConfig:
      output.errorHandlingConfig !== undefined && output.errorHandlingConfig !== null
        ? deserializeAws_restJson1ErrorHandlingConfig(output.errorHandlingConfig, context)
        : undefined,
    idFieldNames:
      output.idFieldNames !== undefined && output.idFieldNames !== null
        ? deserializeAws_restJson1IdFieldNameList(output.idFieldNames, context)
        : undefined,
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
    writeOperationType:
      output.writeOperationType !== undefined && output.writeOperationType !== null
        ? output.writeOperationType
        : undefined,
  };
};
var deserializeAws_restJson1ZendeskMetadata = function (output, context) {
  return {
    oAuthScopes:
      output.oAuthScopes !== undefined && output.oAuthScopes !== null
        ? deserializeAws_restJson1OAuthScopeList(output.oAuthScopes, context)
        : undefined,
  };
};
var deserializeAws_restJson1ZendeskSourceProperties = function (output, context) {
  return {
    object: output.object !== undefined && output.object !== null ? output.object : undefined,
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
var isSerializableHeaderValue = function (value) {
  return (
    value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
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
//# sourceMappingURL=Aws_restJson1.js.map
